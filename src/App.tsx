import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
        <h1>Hello World!</h1>
      </div>
    </>
  );
}

export default App;
