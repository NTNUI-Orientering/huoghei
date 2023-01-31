import React, { FC } from 'react';
import PageLayout from '../PageLayout';
import News from '../../components/News/News';
import CountDown from '../../components/Countdown/Countdown';
import { useOptionsContext } from '../../hooks/OptionsContext';
import Carousel from '../../components/Carousel/Carousel';

const HomePage: FC = () => {
  //TODO:  Need to update to correct endDateTime when backend is ready
  const { options } = useOptionsContext();
  //console.log(options)
  return (
    <>
      <Carousel />
      <PageLayout>
        {options?.paamelding_stenger && <CountDown endDateTime={options?.lopsdato} />}
        <News />
      </PageLayout>
    </>
  );
};

export default HomePage;
