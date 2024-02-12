import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState();

  return (
    <div className="container">
      <div className="box" style={{ background: color }}></div>
      <span>
        <label> Enter color :</label>
        <input
          type="text"
          placeholder="Enter color..."
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </span>
    </div>
  );
}

export default App;
