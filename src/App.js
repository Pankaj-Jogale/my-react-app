import { useState } from "react";

function App() {
  return (
    <div>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

function AppHeader() {
  return (
    <div className="bg-primary text-light p-1 sticky-top d-flex flex-column justify-content-center align-items-center">
      <h1>Project Book</h1>
      <marquee>
        *Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length: a paragraph is a group of at least five
        sentences, a paragraph is half a page long, etc. In reality, though, the
        unity and coherence of ideas among sentences is what constitutes a
        paragraph.
      </marquee>
    </div>
  );
}

function AppBody() {
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
}

function AppFooter() {
  return (
    <div className="bg-secondary d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2">About Us</div>
      <div>Follow Us</div>
      <div>About Us</div>
    </div>
  );
}
export default App;
