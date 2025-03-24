import { useState } from "react"

 // 일반적으로 사용

export default function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
    onTotal();
  }
   // 상태, 로직
   return (
    <>
    <button onClick={handleCounter}>Counter: {counter}</button>
    </>
   )
  
 }
