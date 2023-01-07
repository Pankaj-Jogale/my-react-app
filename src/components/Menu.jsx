import { useState, React } from "react";

const Menu = () => {
  let [list] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
  return (
    <div className="row " style={{ width: "100%", height: "auto" }}>
      {list.map((item, index) => (
        <div key={index} className="col-12 col-md-3 my-2">
          <div className="card">
            <img
              src={`https://picsum.photos/${201 + index}`}
              alt="image"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-header">Card Title</div>
            <div
              className="card-body"
              style={{ height: "150px", overflow: "scroll" }}
            >
              Paragraphs are the building blocks of papers. Many students define
              paragraphs in terms of length: a paragraph is a group of at least
              five sentences.Paragraphs are the building blocks of papers. Many
              students define paragraphs in terms of length
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
