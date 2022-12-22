import { useState } from "react";

function App() {
  //passing event+custom parameter from btn

  let [theme, settheme] = useState("primary");
  let clickme = (e, p1) => {
    theme = p1;
    settheme(theme);
    console.log(p1);
    //event para in console
    console.log(e);
  };
  return (
    <div>
      {/* comment in tag*/}
      <h1 className={`bg-${theme} text-light p-2`}>hi</h1>
      <input
        type="button"
        value="clickme"
        onClick={(e) => clickme(e, "danger")}
      />
    </div>
  );
}
export default App;
