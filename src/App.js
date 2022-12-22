import { useState } from "react";

function App() {
  //passing custom parameter from btn

  let [theme, settheme] = useState("primary");
  let clickme = (p1) => {
    theme = p1;
    settheme(theme);
    console.log(p1);
  };
  return (
    <div>
      <h1 className={`bg-${theme} text-light p-2`}>hi</h1>
      <input type="button" value="clickme" onClick={() => clickme("danger")} />
    </div>
  );
}
export default App;
