import React, { FC } from 'react';
import PageLayout from '../PageLayout';
import News from '../../components/News/News';

const HomePage: FC = () => {
  return (
    <>
      <PageLayout>
        <News />
      </PageLayout>
    </>
  );
};

export default HomePage;
