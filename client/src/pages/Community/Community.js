import React, { useState,useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Search from '../../components/common/Search/Search';
//import Pagination from '../../components/common/Pagination/Pagination';

function Community() {
  const navigate = useNavigate();
  
  //const [totalItems, setTotalItems] = useState(0);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  
  useEffect(() => {
    import('./Community.css');
    window.scrollTo(0, 0);
  }, [page]);

  const items = [
    {
      notice: true,
      postName : "공지 제목입니다",
      postDate : "2024. 11. 01 13:39:05",
      postComment : "",
      postContent: "내용이 들어가지요",
    },
    {
      notice: false,
      postName : "안핏(安fit) 근처 맛집 있을까요?",
      postDate : "2024. 11. 01 13:39:05",
      postComment : "35",
      postContent: "내용",
    },
    {
      notice: false,
      postName : "안핏(安fit) 근처 맛집 있을까요? 안핏(安fit) 근처 맛집 있을까요?",
      postDate : "2024. 11. 01 13:39:05",
      postComment : "35",
      postContent: "내용 내용",
    },
    {
      notice: false,
      postName : "안핏(安fit) 근처 맛집 있을까요? 안핏(安fit) 근처 맛집 있을까요?",
      postDate : "2024. 11. 01 13:39:05",
      postComment : "35",
      postContent: "내용~~~~~~~~",
    },
    {
      notice: false,
      postName : "안핏(安fit) 근처 맛집 있을까요? 안핏(安fit) 근처 맛집 있을까요?",
      postDate : "2024. 11. 01 13:39:05",
      postComment : "35",
      postContent: "내용!!!!!!!",
    },
  ];

  const RenderList = ({items}) => {
    const [detailItems, setDetailItems] = useState([]);
    const LinkToPostDetail = (data) => {
      setDetailItems(data);
      navigate('detail', { state: data });
    }

    return (
      <div className="board-wrap">
        {items.map((item, index) => (
          <div key={index} className="list-wrap" onClick={() => {LinkToPostDetail(item)}}>
            <div className="list-top">
              {item.notice ? (<><span className="label-box blue">공지</span></>) : null}
              <div className={(item.notice ? 'title dot notice' : 'title dot')}>
                {item.postName}
              </div>
            </div>
            <div className="list-bottom">
              <div className="date">{item.postDate}</div>
              {item.postComment > 0 && item.postComment !== null ? (<><div className="comment">{item.postComment}</div></>) : null}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
      <div className="community-wrap">
        <div className="box-title">커뮤니티</div>
        <Search />
        <RenderList items={items} />
        {/*<Pagination
          totalItems={10}
          currentPage={page && parseInt(page) > 0 ? parseInt(page) : 1}
          pageCount={5}
          itemCountPerPage={50}
        />*/}
        <button type="button" className="btn-write" onClick={() => {navigate('write')}}></button>
      </div>
  );
}

export default Community;
