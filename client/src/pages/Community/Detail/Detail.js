import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../../../components/common/Button/Button';

const CommunityDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const detailData = location.state;

  const RenderDetail = () => {
    return (
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
        {detailData.postContent}
      </div>
    </div>
    );
  };

  const RenderComments = ({items}) => {
    const [idx, setIdx] = useState(null);
  const [toggle, setToggle] = useState(false);


    const onClickShow = (index) => {
      if (idx === index) {
        setToggle(!toggle);
      } else {
        setIdx(index);
        setToggle(true);
      }
    };

    return (
      <div className="comments-wrap">
        <div className="title">댓글 <strong>{items.length}</strong></div>
        <div className="comment-ipt">
          <input type="text" className="int" placeholder="댓글을 입력해 주세요" />
        </div>
        {items.map((item, index) => (
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
    );
  };

  const replyList = [
    {
      date : "2024.06.05 08:50",
      contents : "댓글 내용 1",
    },
    {
      date : "2024.06.05 08:50",
      contents : "댓글 내용 2",
    },
    {
      date : "2024.06.05 08:50",
      contents : "댓글 내용 333333",
    },
    {
      date : "2024.06.05 08:50",
      contents : "댓글 내용 555",
    },
  ];
  
  useEffect(() => {
    import('./Detail.css');
  }, []);

  return (
    <div className="community-wrap">
      <div className="box-title">커뮤니티</div>
      <RenderDetail />
      <RenderComments items={replyList} />
      <Button title={"목록"} onClick={() => navigate('/community')} />
    </div>   
  );
}

export default CommunityDetail;
