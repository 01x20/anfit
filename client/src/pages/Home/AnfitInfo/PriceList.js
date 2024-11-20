import React from 'react';

const PriceList = ({ title, items, type }) => {
  return (
    <>
      <div className="title">{title}</div>
      <ul className={type === 'group' ? 'price-list group' : 'price-list pt'}>
        {items.map((item, index) => {
          if (type === 'group') {
            return (
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
            );
          } else {
            return (
              <li key={index}>
                <div className="left-info">
                  <p className="count">{item.count}</p>
                </div>
                <div className="right-info">
                  {item.types.map((typeItem, idx) => (
                    <div key={idx} className="line">
                      <p className="price-type">
                        <span className="pt-type-label">{idx + 1}:1 PT</span> {typeItem.price}
                      </p>
                      <p className="price-detail">{typeItem.detail}</p>
                    </div>
                  ))}
                </div>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default PriceList;