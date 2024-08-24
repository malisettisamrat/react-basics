import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = (count) => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount(count)}>Count is {count}</button>
    </div>
  );
}

export default App;
