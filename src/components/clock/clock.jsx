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

    const formattedTime = time.toLocaleTimeString();
    const formattedDate = time.toLocaleDateString();
//   return <h1>
//     {formattedTime}
//     {formattedDate}
//   </h1>;

return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh", fontSize:"25px"}}>
        <h1 style={{textAlign:"center"}}>{formattedDate}</h1>
        <h2 style ={{textAlign:"center"}}>{formattedTime}</h2>
    </div>
)
  
}

export default Clock;


