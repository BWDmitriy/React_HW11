import React, { useEffect, useState } from 'react';

const Clock = () => {

  const [date, setState] = useState(new Date());

    

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID)
  }, [date])

    const tick = () => setState(new Date());


      return (
        <div>
          <h1>Привет, мир!</h1>
          <h2>Сейчас {date.toLocaleTimeString()}.</h2>
        </div>
      );
    }


export default Clock;