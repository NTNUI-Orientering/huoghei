import { useEffect, useState } from 'react';
import { HH } from '../CONSTS';

const useNewsService = (pathToResource: string) => {
  const [news, setNews] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [newsPage, setNewsPage] = useState(1);

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    await fetch(HH.hostUrl + pathToResource + '?page=' + newsPage)
      .then(async (response) => {
        const posts = await response.json();
        setNews([...news, ...posts]);
      })
      .catch((error) => {
        console.log('error', error);
        setError(error);
      });
    setIsLoading(false);
  };

  const loadMoreData = () => {
    setNewsPage(newsPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [newsPage]);

  return { news, isLoading, error, newsPage, loadMoreData };
};

export default useNewsService;
