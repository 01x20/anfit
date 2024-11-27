import React, { useState,useEffect } from "react";
import Axios from 'axios';
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

  const RenderList = () => {
    const [items, setItems] = useState([]); // API 데이터 저장
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태
    const [detailItems, setDetailItems] = useState([]); // 상세 데이터
    const navigate = useNavigate();

    // API 호출
    useEffect(() => {
      Axios.get(`http://localhost:4000/posts`)
        .then((res) => {
          setItems(res.data);
        })
        .catch((err) => {
          console.error('에러 발생: ', err);
          setError(err);
        })
        .finally(() => {
          setLoading(false);
      });
    }, []);
    
    const LinkToPostDetail = (data) => {
      setDetailItems(data);
      navigate('detail', { state: data });
    }

    if (loading) return <div>로딩 중...</div>;

    if (error) return <div>에러 발생</div>;

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
        <RenderList />
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
