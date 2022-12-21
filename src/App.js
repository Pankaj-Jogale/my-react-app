import { useState } from "react";

function App() {
  //dynamic bootstrap styling

  let [theme, settheme] = useState("danger");

  let makeprimarytheme = () => {
    theme = "primary";
    settheme(theme);
  };

  let makesuccesstheme = () => {
    theme = "success";
    settheme(theme);
  };

  let makeinfotheme = () => {
    theme = "info";
    settheme(theme);
  };
  return (
    <div>
      <h1 className={`bg-${theme}`}>Pankaj</h1>
      <input
        className="btn btn-primary"
        type="button"
        value="makeprimarytheme"
        onClick={makeprimarytheme}
      />
      <input
        className="btn btn-success"
        type="button"
        value="makesuccesstheme"
        onClick={makesuccesstheme}
      />
      <input
        className="btn btn-info"
        type="button"
        value="makeinfotheme"
        onClick={makeinfotheme}
      />
    </div>
  );
}
export default App;
