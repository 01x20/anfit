import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

//import Button from '../../../components/common/Button/Button';

const CommunityDetail = () => {
  const [searchParams] = useSearchParams();
  const [postData, setPostData] = useState([]);
  const [comment, setComment] = useState("");
  const [idx, setIdx] = useState(null);
  const [toggle, setToggle] = useState(false);

  const postId = searchParams.get('id');

  useEffect(() => {
    import('./Detail.css');

    if (postId) {
      Axios.get(`http://localhost:4000/posts/${postId}`)
        .then((res) => {
          setPostData(res.data);
        })
        .catch((error) => console.error(error));
    }
  }, [postId]);

  const handleContents = (e) => {
    setComment(e.currentTarget.value);
  };

  const onClickShow = (index) => {
    if (idx === index) {
      setToggle(!toggle);
    } else {
      setIdx(index);
      setToggle(true);
    }
  };

  return (
    <>
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
      {postData.comments && postData.comments.length > 0 ?
        postData.comments.map((comment, index) => 
      <div className="comments-wrap" key={index}>
        <div className="title">댓글 <strong>{postData.comments ? postData.comments.length : 0}</strong></div>
        <div className="comment-ipt">
          <input type="text" className="int" onChange={handleContents} placeholder="댓글을 입력해 주세요" />
          <button type="button">등록</button>
        </div>
          <div className="comments-box">
            <div className="comments-top">
              <div className="date">{comment.date}</div>
              <button type="button" className="comments-more-btn"></button>
            </div>
            <div className="comments-body">
              {comment.contents}
            </div>
            <button type="button" className="btn-reply" onClick={() => {onClickShow(index)}}>답글 작성</button>
          </div>
          <div className={`comments-reply-wrap ${idx === index && toggle ? 'show' : ''}`}>
            <div className="comment-ipt">
              <input type="text" className="int" placeholder="답글을 입력해 주세요" />
            </div>
            <button type="button" className="btn-reply-close" onClick={() => setToggle(false)}></button>
          </div>
      </div>
      ) : (null)}
    </>
  );
}

/*const CommunityDetail = () => {
  const navigate = useNavigate();
    
  
  const [items, setItems] = useState([]);

  

  

  const submitComments = (postId) => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let params = {
      date: formattedDate,
      contents: comment,
      id: Date.now().toString()
    }

    if(params.contents) {
      Axios.post(`http://localhost:4000/posts/${postId}/comments`, params)
        .then((res) => {
          setItems((prevItems) => 
            prevItems.map((item) =>
              item.id === postId 
                ? { ...item, comments: [...item.comments, res.data] } 
                : item
            ));
          setComment('');
        })
        .catch((err) => {
          console.error('작성 실패', err);
        });
      } else {
        alert('댓글 내용을 입력해 주세요');
      }
  };

  // 댓글 리스트 불러오기
  useEffect(() => {
    Axios.get(`http://localhost:4000/posts`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error('댓글 목록 로딩 실패');
      });
  }, []);

  const RenderDetail = () => {
    return (
      <>
      <div className="post-detail-wrap">
        <div className="detail-top">
          <div className="title">
            {detailData.notice ?
            (<span className="label-box blue">공지</span>)
            : null}
            {detailData.postName}
          </div>
          <div className="date">
            {detailData.postDate}
          </div>
        </div>
        <div className="detail-body">
          <div dangerouslySetInnerHTML={{ __html: detailData.postContent }} ></div>
        </div>
      </div>
      <div className="comments-wrap">
      <div className="title">댓글 <strong>{detailData.comments.length}</strong></div>
      <div className="comment-ipt">
        <input type="text" className="int" onChange={handleContents} placeholder="댓글을 입력해 주세요" />
        <button type="button" onClick={() => {submitComments(items.id)}}>등록</button>
      </div>
      {items.comments.map((item, index) => (
      <React.Fragment key={index}>
      <div className="comments-box">
        <div className="comments-top">
          <div className="date">{item.date}</div>
          <button type="button" className="comments-more-btn"></button>
        </div>
        <div className="comments-body">
          {item.contents}
        </div>
        <button type="button" className="btn-reply"
          onClick={() => {onClickShow(index)}}>
          답글 작성</button>
      </div>
      <div className={`comments-reply-wrap ${idx === index && toggle ? 'show' : ''}`}>
        <div className="comment-ipt">
          <input type="text" className="int" placeholder="답글을 입력해 주세요" />
        </div>
        <button type="button" className="btn-reply-close" onClick={() => setToggle(false)}></button>
      </div>
      </React.Fragment>
      ))}
    </div>
  </>
  );    
};
  
  useEffect(() => {
    
  }, []);

  return (
    <div className="community-wrap">
      <div className="box-title">커뮤니티</div>
      <RenderDetail />
      <Button title={"목록"} onClick={() => navigate('/community')} />
    </div>   
  );
}*/

export default CommunityDetail;
