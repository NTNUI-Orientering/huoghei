import React, { useEffect } from 'react';
import { PostInterface } from '../../types/News';
import './NewsItem.less';

const NewsItem = (newsItem: PostInterface) => {
  useEffect(() => {
    console.log('NI' + newsItem);
  }, []);

  return (
    <div className="newsitem-container">
      <div className="newsitem-wrapper">
        <div className="title-div">
          <h2>{newsItem.title.rendered}</h2>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              newsItem.content.rendered.length > 300
                ? newsItem.excerpt.rendered
                : newsItem.content.rendered
          }}
        ></div>
        <div>{newsItem.date}</div>
      </div>
    </div>
  );
};

export default NewsItem;
