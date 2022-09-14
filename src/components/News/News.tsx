import React, { FC } from 'react';
import { HH } from '../../CONSTS';
import useNewsService from '../../services/NewsService';
import { PostInterface } from '../../types/News';
import Loader from '../../utils/Loader';
import NewsItem from './NewsItem';
import './News.less';

const News: FC = () => {
  const { news, isLoading, error, loadMoreData } = useNewsService(HH.getPostsPath);

  function getMoreNews() {
    loadMoreData();
  }

  return (
    <div className="news-container">
      {error && <div> Noe gikk galt </div>}
      {isLoading && !news?.length && <Loader marginTop="md" />}
      {news?.length > 0 && (
        <div>
          {news
            .filter((newsItem: PostInterface) => {
              if (newsItem.status === 'publish') return newsItem;
            })
            .map((newsItem: PostInterface) => {
              return <NewsItem key={newsItem.id} {...newsItem} />;
            })}

          {isLoading && news?.length && <Loader marginTop="sm" />}

          <div className="button-container">
            <button className="more-posts-button" onClick={getMoreNews}>
              Last inn tidligere
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
