import React, { useState } from "react";

interface Props {
  initialCounter?: number;
}

const Counter: React.FC<Props> = ({initialCounter}) => {
  const [count, setCount] = useState<number>(initialCounter ?? 0)

  const handleButtonClick = (type: string) => {
    if(type === "+") setCount(count + 1);
    if(type === "-") setCount(count - 1);
  }

  return (
    <div className="counter-container">
      <ul className="counter-ul">
        <li className="counter-minus" onClick={() => handleButtonClick("-")}>-</li>
        <li className="counter-value">{count}</li>
        <li className="counter-plus" onClick={() => handleButtonClick("+")}>+</li>
      </ul>
    </div>
  )
}

export default Counter;