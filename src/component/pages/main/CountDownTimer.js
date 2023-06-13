import React from 'react';
import { useCountDown } from './useCountDown';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
        <p className="count-down">{days}:{hours}:{minutes}:{seconds}</p>
    </div>
  );
};

const CountDownTimer = ({ targetDate }) => {
  const {days, hours, minutes, seconds}= useCountDown(targetDate);

  if ((days + hours + minutes + seconds) < 0) {
    return (<div><p className="count-down">LET'S HACK!</p></div>);
  } else {
    return (
      <ShowCounter
        days= "0"
        hours="0"
        minutes="0"
        seconds="0"
      />
    );
  }
};

export default CountDownTimer;
