import React, { useState } from "react";
import Dropdown from "./Component.js/Dropdown";

const options = [
  {
    label: "Red Color",
    value: "red",
  },
  {
    label: "Green Color",
    value: "green",
  },
  {
    label: "White Color ",
    value: "white",
  },
];
function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
}

export default App;
