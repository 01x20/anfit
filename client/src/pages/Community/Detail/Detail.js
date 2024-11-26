import React from "react";
import { useEffect } from "react";


function CommunityDetail() {
  
  useEffect(() => {
    import('./Detail.css');
  }, []);

  return (
      <div className="community-wrap">
        <div className="box-title">커뮤니티</div>
        상세!!!
      </div>
  );
}

export default CommunityDetail;
