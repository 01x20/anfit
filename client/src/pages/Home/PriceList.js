import React from 'react';

const PriceList = ({ title, items }) => {
  return (
    <div>
      <div className="title">{title}</div>
      <ul className="price-list">
        {items.map((item, index) => (
          <li key={index}>
            <div className="left-info">
              <p className="count">{item.count}</p>
              <p className={`price ${item.regularPrice ? 'type1' : ''}`}>
                {item.regularPrice && (
                  <span className="regular-price">{item.regularPrice}</span>
                )}
                {item.price}
              </p>
            </div>
            <div className="right-info">
              {item.labels.map((label, idx) => (
                <div key={idx} className={`label-box ${label.color}`}>
                  {label.text}
                </div>
              ))}
              {item.limit && <div className="limit">{item.limit}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceList;