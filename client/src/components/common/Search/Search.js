import React from "react";
import { useEffect } from "react";

function Search() {
  useEffect(() => {
    import('./Search.css');
  }, []);

  return (
      <div className="search-wrap">
        <select className="int">
            <option>전체</option>
            <option>제목</option>
            <option>내용</option>
        </select>
        <div className="src-ipt">
            <input type="text" className="int" placeholder="검색어를 입력해 주세요" />
        </div>
        <button type="button" className="btn-search">검색</button>
      </div>
  );
}

export default Search;
