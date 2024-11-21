import React from "react";
import PriceList from './PriceList';
import Table from '../../../components/common/Table/Table';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './anfit-info.css';
import markerIcon from '../../../assets/images/icon-marker.png';

const { kakao } = window;

function AnfitInfo() {

  useEffect(() => {
    const container = document.getElementById('map'),
    option = { 
        center: new kakao.maps.LatLng(37.5944870033424, 127.016621618562),
        level: 2
    };
    const map = new kakao.maps.Map(container, option);

      const imgSrc = markerIcon;
      const imgSize = new kakao.maps.Size(34, 34);
      const imgOption = {offset : new kakao.maps.Point(17, 30)};
    
      const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);
      const markerPosition = new kakao.maps.LatLng(37.5944870033424, 127.016621618562);
    
    const marker = new kakao.maps.Marker({
        position: markerPosition, 
        image: markerImg
      });

      marker.setMap(map);
      map.setZoomable(false);
  }, [])
  

  const [currentTab, clickTab] = useState(0);
  const [currentSubTab, setCurrentSubTab] = useState(0);

  //회원권 안내 테이블
  const columns = [
    { header: '회원권 종류', accessor: 'type', colspan: 2, colWidth: '25%'},
    { header: '', accessor: 'count', colWidth: '25%'},
    { header: '소진기간', accessor: 'limit', colWidth: '50%'},
  ];
  
  const data = [
    { type: 'PT', count: '10회', limit: '5주 이내', colspan: { type: 1 }, rowspan: { type: 2 }},
    { type: '', count: '20회', limit: '10주 이내'},
    { type: '그룹 운동 10회', count: '', limit: '8주 이내', rowspan: { type: 1 }, colspan: { type: 2 }},
  ];

  //횟수권
  const countTypePrice = [
    {
      count: '1회',
      price: '35,000원',
      regularPrice: null,
      labels: [{ text: '정가', color: 'gray' }],
      limit: null,
    },
    {
      count: '4회',
      price: '135,000원',
      regularPrice: '140,000원',
      labels: [
        { text: '할인가', color: 'red' },
        { text: '대학생 할인가능', color: 'blue' },
      ],
      limit: '30일 이내 소진',
    },
    {
      count: '10회',
      price: '350,000원',
      regularPrice: '300,000원',
      labels: [
        { text: '할인가', color: 'red' },
        { text: '대학생 할인가능', color: 'blue' },
      ],
      limit: '40일 이내 소진',
    },
    {
      count: '30회',
      price: '810,000원',
      regularPrice: '1,050,000원',
      labels: [
        { text: '할인가', color: 'red' },
        { text: '홀딩 가능(7일)', color: 'green' },
      ],
      limit: '110일 이내 소진',
    },
    {
      count: '50회',
      price: '1,250,000원',
      regularPrice: '1,750,000원',
      labels: [
        { text: '할인가', color: 'red' },
        { text: '홀딩 가능(14일)', color: 'green' },
      ],
      limit: '180일 이내 소진',
    },
  ];

  //개월권
  const monthTypePrice = [
    {
      count: '1개월',
      price: '300,000원',
      regularPrice: null,
      labels: [{ text: '대학생 할인가능', color: 'blue' }],
      limit: null,
    },
    {
      count: '3개월',
      price: '750,000원',
      regularPrice: null,
      labels: [
        { text: '홀딩 가능(7일)', color: 'green' },
      ],
      limit: null,
    },
    {
      count: '6개월',
      price: '1,200,000원',
      regularPrice: null,
      labels: [
        { text: '홀딩 가능(14일)', color: 'green' },
      ],
      limit: null,
    },
  ];

  //다빈 코치
  const dbPtTypePrice = [
    {
      count: '10회',
      types: [
        { price: '600,000원', detail: '회당 60,000원' },
        { price: '850,000원', detail: '회당 75,000원 · 인당 37,500원' },
      ],
    },
    {
      count: '20회',
      types: [
        { price: '1,100,000원', detail: '회당 55,000원' },
        { price: '1,600,000원', detail: '회당 80,000원 · 인당 40,000원' },
      ],
    },
    {
      count: '30회',
      types: [
        { price: '1,500,000원', detail: '회당 50,000원' },
        { price: '2,250,000원', detail: '회당 75,000원 · 인당 37,500원' },
      ],
    },
    {
      count: '50회',
      types: [
        { price: '2,300,000원', detail: '회당 46,000원' },
        { price: '3,500,000원', detail: '회당 70,000원 · 인당 35,000원' },
      ],
    },
  ];
  
  //빙수 코치
  const bsPtTypePrice = [
    {
      count: '10회',
      types: [
        { price: '700,000원', detail: '회당 70,000원' },
        { price: '900,000원', detail: '회당 90,000원 · 인당 45,000원' },
      ],
    },
    {
      count: '20회',
      types: [
        { price: '1,130,000원', detail: '회당 65,000원' },
        { price: '1,700,000원', detail: '회당 85,000원 · 인당 42,500원' },
      ],
    },
    {
      count: '30회',
      types: [
        { price: '1,800,000원', detail: '회당 60,000원' },
        { price: '2,400,000원', detail: '회당 80,000원 · 인당 40,000원' },
      ],
    },
    {
      count: '50회',
      types: [
        { price: '2,800,000원', detail: '회당 56,000원' },
        { price: '3,800,000원', detail: '회당 76,000원 · 인당 38,000원' },
      ],
    },
  ];

  const menuArr = [
    { name : '센터 소개', content : 
      <div className="sns-wrap">
        <div className="sns-title">anfit_official_ss</div>
        <Swiper slidesPerView={'auto'} spaceBetween={10} className="info-slide">
          <SwiperSlide>
            1
          </SwiperSlide>
          <SwiperSlide>
            2
          </SwiperSlide>
        </Swiper>
        <div className="quotation-box">
          <strong>안핏(安fit)</strong>은<br/>
          운동하는 여성이 더욱 많아지길 바라는 마음,<br/>
          여성들이 보다 편안하고 안전한 공간에서<br/>
          운동하길 바라는 마음에서 탄생했습니다<br/><br/>

          몸과 마음의 건강을 통해 삶을 단단하게 함으로써<br/>
          <strong>자립, 안정, 용기</strong>를 얻었으면 합니다<br/>
          그리고 <strong>여유, 사랑, 공존</strong>이 함께했으면 좋겠습니다
        </div>
        <div className="box-title">안핏 시설</div>
        <Swiper slidesPerView={'auto'} spaceBetween={10} className="info-slide">
          <SwiperSlide>
            1
          </SwiperSlide>
          <SwiperSlide>
            2
          </SwiperSlide>
        </Swiper>
        <div className="box-title">오시는 길</div>
        <div className="map-wrap">
          <div id="map"></div>
          <div className="address-wrap">
            <div className="name">안핏 여성 전용 PT & 그룹 운동</div>
            <div className="detail">
              <CopyToClipboard onCopy={() => alert('복사')} text="서울특별시 성북구 아리랑로4길 8, 2층">
                <div>서울특별시 성북구 아리랑로4길 8, 2층</div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div className="parking-info">
          별도의 주차 공간이 없습니다.<br/>
          더 서울병원 유료 추자창 이용, 또는 대중교통 이용을 권장드립니다.
        </div>
      </div>
     },
    { name : '코치 소개', content :
      <>
        <div className="slogan-wrap">
          <div className="title"><strong>운동에 진심</strong>인 여성 코치 둘, 저희가 <strong>추구하는 가치</strong>입니다</div>
          <div className="slogan-box quotation-box">
            #운동 #책  #자연 #여성<br/>#존중 #배려 #혼자가 아닌 우리 #평등
          </div>
        </div>
        <div className="coach-wrap">
          <div className="coach">
            <div className="info">다빈 코치<div className="sns-title">dabin__coach</div></div>
            <div className="desc">
              남이 아닌 ‘나의 삶’에서 의미있고 중요한 걸 찾는 여정을 함께합니다. 
              스스로 지속 가능한 것들을 찾아가는 과정을 선택하신 분들의 곁에서 현명한 선택을 할 수 있도록 돕겠습니다.
            </div>
            <Swiper slidesPerView={'auto'} spaceBetween={8} className="info-slide">
              <SwiperSlide>
                1
              </SwiperSlide>
              <SwiperSlide>
                2
              </SwiperSlide>
              <SwiperSlide>
                3
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="coach">
            <div className="info">빙수 코치<div className="sns-title">bingsu__coach</div></div>
            <div className="desc">
              “ 당신의 몸을 건‘강하게’ 만들어 드립니다. ”<br/>
              지루하기만 했던 운동, 지속 가능하도록 제가 항상 옆에서<br/>
              이끌어드리겠습니다. 여성분들, 우리 같이 건‘강해져요!’
            </div>
            <Swiper slidesPerView={'auto'} spaceBetween={8} className="info-slide">
              <SwiperSlide>
                1
              </SwiperSlide>
              <SwiperSlide>
                2
              </SwiperSlide>
              <SwiperSlide>
                3
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </>
     },
    { name : '수강권 안내', content : 
      <>
        <ul className="sub-tab-nav">
          {['그룹 운동', 'PT'].map((subTabName, subTabIndex) => (
            <li key={subTabIndex} className={
              currentSubTab === subTabIndex
              ? 'sub-nav-btn active'
              : 'sub-nav-btn'
            }
            onClick={() => setCurrentSubTab(subTabIndex)}>
              {subTabName}
            </li>
          ))}
        </ul>
        <div className="pass-notice">
          * 부가세 별도<br/>
          * 대학생 할인 10%
        </div>
        <div className="sub-tab-contents content-bottom-line">
          {currentSubTab === 0 &&
          <>
            <div className="price-box">
              <PriceList title="횟수권" items={countTypePrice} type="group"/>
            </div>
            <div className="price-box">
              <PriceList title="개월권" items={monthTypePrice} type="group"/>
            </div>
          </>
          }
          {currentSubTab === 1 &&
          <>
            <div className="price-box">
              <PriceList title="다빈 코치" items={dbPtTypePrice} />
            </div>
            <div className="price-box">
              <PriceList title="빙수 코치" items={bsPtTypePrice} />
            </div>
            <div className="pt-price-notice">
              PT <strong>누적 51회</strong>부터 <strong>횟수 제한 없이 단가 고정</strong>
            </div>
            <ul className="price-notice-list">
              <li><p className="pt-type-label">1:1 PT</p> 55,000원</li>
              <li><p className="pt-type-label">2:1 PT</p> 75,000원</li>
            </ul>
          </>
          }
        </div>
        <div className="info-detail">
          <div className="box-title">회원권 안내</div>
            <ul className="detail-list">
              <li>
                <p className="title">회원권 사용 기간</p>
                <Table columns={columns} data={data} thTitle />
              </li>
              <li>
                <p className="title">회원권 사용 기간</p>
                <div>
                  운동공간 오픈 이후 4주 이내 회원권 사용을 시작해야 합니다.<br/>
                  4주 이후 자동으로 회원권이 개시됩니다.
                </div>
              </li>
              <li>
                <p className="title">회원권 양도</p>
                <div>
                  회원권 개시 전 양도는 가능하나,<br/>
                  개시 후 양도는 불가합니다.
                </div>
              </li>
            </ul>
        </div>
      </>
     },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return (
    <>
    <div className="box-title">안핏 안내</div>
    <ul className="tab-nav">
      {menuArr.map((el,index) => (
        <li key={index} className={index === currentTab ? "nav-btn active" : "nav-btn" }
        onClick={() => selectMenuHandler(index)}>{el.name}</li>
      ))}
    </ul>
    <div className="tab-contents">
      <div>{menuArr[currentTab].content}</div>
    </div>
    </>
  );
}
  
export default AnfitInfo;