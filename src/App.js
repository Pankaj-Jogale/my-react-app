import { useState } from "react";

function App() {
  //data member ex
  let project = "counter appln";
  let [counter, setcounter] = useState(0);

  //member funtion ex
  let clickme = () => {
    counter++;
    setcounter(counter);
  };
  return (
    <div>
      <h1>{project}</h1>
      <h1>{counter}</h1>
      <input type="button" value="clickMe" onClick={clickme} />
    </div>
  );
}
export default App;
