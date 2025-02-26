import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SpansTree } from "./components/SpansTree/SpansTree";

import { spans } from "./data/spans";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SpansTree rawSpans={spans.spans} />
      </div>
    </>
  );
}

export default App;
