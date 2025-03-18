// import React, { useEffect, useState } from 'react'

// function clock1() {
//     const [time,setTime] = useState(new Date());// need this to store the current time and update it every second

//     useEffect (() => {
//         const interval = setInterval(()=>{
//             setTime(new Date());

//         },1000);
//         return () => {
//             clearInterval(interval);
//         }

//     },[]);
//   return (
//     <div>clock1</div>
//   )
// }

// export default clock1

import React, { useEffect, useState } from 'react'

function clock1() {
    const[time,setTime] = useState(new Date());

    useEffect(()=>{
        const interval =  setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(interval);
        };

    },[]);
  return (
    <div>clock1
        <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default clock1