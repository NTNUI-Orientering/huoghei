import React, { FC, useEffect } from 'react';
import { HH } from '../../CONSTS';
import useNewsService from '../../services/NewsService';
import { PostInterface } from '../../types/News';
import Loader from '../../utils/Loader';
import NewsItem from './NewsItem';

const News: FC = () => {
  const { news, isLoading, error, newsPage } = useNewsService(HH.getPostsPath);

  useEffect(() => {
    console.log({ ...news });
  }, [news]);

  return (
    <>
      {isLoading && <Loader />}
      {news?.length &&
        news.map((newsItem: PostInterface) => {
          return <NewsItem key={newsItem.id} {...newsItem} />;
        })}
    </>
  );
};

export default News;
