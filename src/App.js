import { useState } from "react";

function App() {
  let [list, setList] = useState(["mumbai", "delhi", "pune"]);

  let addItem = () => {
    let newList = ["hi", ...list];
    setList(newList);
  };
  return (
    <div>
      <h1>map function</h1>
      <h1>{list}</h1>
      <input type="button" value="change value" onClick={addItem} />
    </div>
  );
}
export default App;
