import React, { useEffect, useState } from "react";
import Axios from 'axios';
import {API_URL} from '../../../Config';
import { useSearchParams, useNavigate } from 'react-router-dom';

import Button from '../../../components/common/Button/Button';

const CommunityDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [postData, setPostData] = useState([]);
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");
  const [idx, setIdx] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [totalComments, setTotalComments] = useState(0);

  const postId = searchParams.get('id');

  useEffect(() => {
    import('./Detail.css');

    if (postId) {
      Axios.get(`${API_URL}/posts/${postId}`)
        .then((res) => {
          const sortedComments = res.data.comments.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
          });
          setTotalComments(countTotalComments(res.data.comments));
          setPostData({
            ...res.data,
            comments: sortedComments,
          });
        })
        .catch((error) => console.error(error));
    }
  }, [postId]);

  const countTotalComments = (comments) => {
    if (!comments) return 0;
  
    return comments.reduce((total, comment) => {
      const repliesCount = comment.replies ? countTotalComments(comment.replies) : 0;
      return total + 1 + repliesCount;
    }, 0);
  };

  const handleContents = (e) => {
    setComment(e.currentTarget.value);
  };

  const handleReply = (e) => {
    setReply(e.currentTarget.value);
  }

  const onClickShow = (index) => {
    if (idx === index) {
      setToggle(!toggle);
    } else {
      setIdx(index);
      setToggle(true);
    }
  };

  const submitComments = () => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const newComment = {
      id: Date.now().toString(), // 고유 ID 생성
      date: formattedDate,
      contents: comment,
    };

    if (newComment.contents) {
      Axios.put(`${API_URL}/posts/${postId}`, {
        ...postData,
        comments: [newComment, ...postData.comments],
      })
        .then(() => {
          setPostData((prevPostData) => ({
            ...prevPostData,
            comments: [newComment, ...prevPostData.comments],
          }));
          setComment("");
        })
        .catch((err) => {
          console.error("작성 실패:", err.response ? err.response.data : err.message);
        });
    } else {
      alert("댓글 내용을 입력해 주세요");
    }
  };

  const submitReply = (parentCommentId) => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
    const newReply = {
      id: Date.now().toString(), // 고유 ID 생성
      date: formattedDate,
      contents: reply,
    };
  
    if (newReply.contents) {
      const updatedComments = postData.comments.map((comment) => {
        if (comment.id === parentCommentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply], // 기존 replies에 새 대댓글 추가
          };
        }
        return comment;
      });
  
      Axios.put(`${API_URL}/posts/${postId}`, {
        ...postData,
        comments: updatedComments,
      })
        .then(() => {
          setPostData((prevPostData) => ({
            ...prevPostData,
            comments: updatedComments,
          }));
          setReply("");
        })
        .catch((err) => {
          console.error("대댓글 작성 실패:", err.response ? err.response.data : err.message);
        });
    } else {
      alert("답글 내용을 입력해 주세요");
    }
  };


  return (
    <div className="community-wrap">
      <div className="box-title">커뮤니티</div>
      <div className="post-detail-wrap">
        <div className="detail-top">
          <div className="title">
            {postData.notice ? (
              <span className="label-box blue">공지</span>
            ) : null}
            {postData.postName}
          </div>
          <div className="date">{postData.postDate}</div>
        </div>
        <div className="detail-body">
          <div
            dangerouslySetInnerHTML={{ __html: postData.postContent }}
          ></div>
        </div>
      </div>
      <div className="comments-wrap">
        <div className="title">댓글 <strong>{totalComments}</strong></div>
        <div className="comment-ipt">
          <input type="text" className="int" onChange={handleContents} placeholder="댓글을 입력해 주세요" />
          <button type="button" className="btn-submit" onClick={submitComments}>등록</button>
        </div>
        {postData.comments && postData.comments.length > 0
        ? postData.comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            <div className="comments-box">
              <div className="comments-top">
                <div className="date">{comment.date}</div>
                <button type="button" className="comments-more-btn"></button>
              </div>
              <div className="comments-body">{comment.contents}</div>
              <button
                type="button"
                className="btn-reply"
                onClick={() => onClickShow(index)}>
                {comment.replies && comment.replies.length > 0
                  ? `답글 ${comment.replies.length}개`
                  : "답글 작성"}
              </button>
            </div>
            <div className={`toggle-wrap ${idx === index && toggle ? "show" : ""}`}>
            {comment.replies &&
              comment.replies.map((reply) => (
                <div className="comments-box reply-box" key={reply.id}>
                  <div className="comments-top">
                    <div className="date">{reply.date}</div>
                    <button type="button" className="comments-more-btn"></button>
                  </div>
                  <div className="comments-body">{reply.contents}</div>
                </div>
              ))}
            <div className="comments-reply-wrap">
              <div className="comment-ipt">
                <input
                  type="text"
                  className="int"
                  onChange={handleReply}
                  placeholder="답글을 입력해 주세요"
                />
                <button
                  type="button"
                  className="btn-submit"
                  onClick={() => submitReply(comment.id)}>
                  등록
                </button>
              </div>
              <button
                type="button"
                className="btn-reply-close"
                onClick={() => setToggle(false)}>
                </button>
            </div>
          </div>
          </React.Fragment>
        ))
        : null}
      </div>
      <Button title={"목록"} onClick={() => navigate('/community')} />
    </div>
  );
}

export default CommunityDetail;
