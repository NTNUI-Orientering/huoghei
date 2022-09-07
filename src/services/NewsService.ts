import { useEffect, useState } from 'react';
import { HH } from '../CONSTS';

const useNewsService = (pathToResource: string) => {
  const [news, setNews] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [newsPage, setNewsPage] = useState(1);

  const fetchData = async (): Promise<void> => {
    console.log('Fetch news');
    setIsLoading(true);
    await fetch(HH.hostUrl + pathToResource + '?page=' + newsPage)
      .then(async (response) => {
        console.log('Fetched: ' + response.status);
        //console.log(response.json());
        const posts = await response.json();
        setNews([...news, posts][0]);
      })
      .catch((error) => {
        console.log('error', error);
        setError(error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { news, isLoading, error, newsPage };
};

export default useNewsService;
