import { useState } from "react";

function Explore() {
  let [list] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <div>
      {list.map((item, index) => (
        <div className="alert alert-secondary" key={index}>
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph.
        </div>
      ))}
    </div>
  );
}
export default Explore;
