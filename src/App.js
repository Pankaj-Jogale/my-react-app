import { useState } from "react";

function App() {
  //map function

  let [list] = useState(["Hello", "hii", "chennai", "delhi"]);

  return (
    <div>
      <h1>map demo</h1>
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}
export default App;
