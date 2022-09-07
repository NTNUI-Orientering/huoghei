import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { HH } from '../CONSTS';

const usePageService = (pathToResource: string) => {
  const [result, setResult] = useState<Service<any>>({ status: 'loading' });

  const fetchData = async (): Promise<void> => {
    console.log('Fetch');
    setResult({ status: 'loading' });
    fetch(HH.hostUrl + pathToResource)
      .then((response) => response.json())
      .then((response) => setResult({ status: 'fetched', payLoad: response }))
      .catch((error) => setResult({ status: 'error', error }));
  };

  useEffect(() => {
    fetchData();
  }, [pathToResource]);

  return result;
};

export default usePageService;
