import { useState } from "react";

function App() {
  //dynamic bootstrap styling

  let [theme, settheme] = useState("danger");
  let [list] = useState([1, 1, 1, 1, 1, 1, 1]);

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
      <div className="sticky-top">
        <h1 className={`bg-${theme}  `}>Pankaj</h1>
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

      {list.map((item) => (
        <div className={`alert alert-${theme}`}>
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph.
        </div>
      ))}

      <div className={`alert alert-${theme}`}>
        <div>
          <p>
            Paragraphs are the building blocks of papers. Many students define
            paragraphs in terms of length: a paragraph is a group of at least
            five sentences, a paragraph is half a page long, etc. In reality,
            though, the unity and coherence of ideas among sentences is what
            constitutes a paragraph.
          </p>
        </div>
      </div>
      <div className={`alert alert-${theme}`}>
        <div>
          <p>
            Paragraphs are the building blocks of papers. Many students define
            paragraphs in terms of length: a paragraph is a group of at least
            five sentences, a paragraph is half a page long, etc. In reality,
            though, the unity and coherence of ideas among sentences is what
            constitutes a paragraph.
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
