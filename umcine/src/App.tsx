import { useState } from "react";

const MIN = 0 ;
const MAX = 5;
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>카운터</h1>
      <p>현재 값: {count}</p>
      {count < MAX && (
      <button onClick={() => setCount((current) => current + 1)}>
        +1
      </button>
     )}
     {count > MIN && (
      <button onClick={() => setCount((current) => current - 1)}>
        -1
      </button>
     )}
      <button onClick={() => setCount(0)}>
        초기화
      </button>
    </main>
  );
}
