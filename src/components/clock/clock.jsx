import React, { useEffect, useState } from 'react'

function Clock  ()  {
    const[time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
  return (
    <div>clock
    <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock;


