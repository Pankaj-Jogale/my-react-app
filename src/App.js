import { useState } from "react";

function App() {
  //dynamic bootstrap styling

  let [theme, settheme] = useState("danger");

  let updateTheme = (p1 = "danger") => {
    theme = p1;
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
          onClick={() => updateTheme("primary")}
        />
        <input
          className="btn btn-success"
          type="button"
          value="makesuccesstheme"
          onClick={() => updateTheme("success")}
        />
        <input
          className="btn btn-info"
          type="button"
          value="makeinfotheme"
          onClick={() => updateTheme("info")}
        />
      </div>
      <br />

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
