import { useState } from "react";
import "./App.css";
import CountButton from "./CountButton";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountButton count={count} setCount={setCount} />
    </div>
  );
}

export default App;
