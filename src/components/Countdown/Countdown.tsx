import React, { FC } from 'react';
import './Countdown.less';
import { useCountDown } from '../../hooks/CountdownHook';

interface CountDownI {
  endDateTime: string;
}

const CountDown: FC<CountDownI> = ({ endDateTime }) => {
  const [days, hours, minutes, seconds] = useCountDown(endDateTime);

  return (
    <>
      {days + hours + minutes + seconds > 0 && (
        <div className="countdown-container">
          <div className="countdown-wrapper">
            <div className="box days">
              <div className="days" id="days">
                {days}
              </div>
              <div className="text">dager</div>
            </div>
            <div className="box hours">
              <div className="hours" id="hours">
                {hours}
              </div>
              <div className="text">timer</div>
            </div>
            <div className="box minutes">
              <div className="minutes" id="minutes">
                {minutes}
              </div>
              <div className="text">minutter</div>
            </div>
            <div className="box seconds">
              <div className="seconds" id="seconds">
                {seconds}
              </div>
              <div className="text">sekunder</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountDown;
