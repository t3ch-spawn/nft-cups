import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="h-[100%] w-[100%] flex">
        <Loader />
      </main>
    </>
  );
}

export default App;
