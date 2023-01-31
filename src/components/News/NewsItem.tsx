import React from 'react';
import { PostInterface } from '../../types/News';
import './NewsItem.less';
import ntnuiIcon from '../../assets/images/ntnui_banner-60x60.png';
import { Link } from 'react-router-dom';
import { HH } from '../../CONSTS';

const NewsItem = (newsItem: PostInterface) => {
  return (
    <div className="newsitem-container">
      <div className="newsitem-wrapper">
        <div className="title-div">
          <h2>{newsItem.title.rendered}</h2>
        </div>
        <div className="top-row">
          <div>
            <span>
              {newsItem.author === 8 && (
                <span>
                  {' '}
                  <img alt="icon" src={ntnuiIcon} className="icon" /> NTNUI -{' '}
                </span>
              )}
              Publisert: {new Date(newsItem.date).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div
          className="content-div"
          dangerouslySetInnerHTML={{
            __html:
              newsItem.content.rendered.length > 300
                ? newsItem.excerpt.rendered
                : newsItem.content.rendered
          }}
        />

        {newsItem.content.rendered.length > 300 && (
          <button>
            <Link className="link" to={HH.publicPath+`/post/${newsItem.id}`}>
              {' '}
              Les mer{' '}
            </Link>
          </button>
        )}
        <hr />
      </div>
    </div>
  );
};

export default NewsItem;
