import { useState, useEffect } from "react"

function Counter({ end, duration = 2000 }){

    const [count, setCount] = useState(0);

    useEffect(() => {
  let start = 0;

  const increment = end / (duration / 50);

  const timer = setInterval(() => {
    start += increment;

    if (start >= end) {
      setCount(end);
      clearInterval(timer);
    } else {
      setCount(Math.floor(start));
    }
  }, 50);

  return () => clearInterval(timer);
}, [end, duration]);
    return(
        <div>
            <h2>{count.toLocaleString()}+</h2>

        </div>
    )
}
export default Counter;