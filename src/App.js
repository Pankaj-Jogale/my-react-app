function App() {
  return (
    <div>
      <h1>Using internal function(Person) as tag in these function(App tag)</h1>
      <Person name="pankaj " />
      <Person name="Raj " />
      <Person name="Rajiv " />
      <Person name="Raja " />
    </div>
  );
}

function Person({ name }) {
  return (
    <div>
      <h1>Person name: {name}</h1>
      <img src="https://picsum.photos/400" alt="" srcset="" />
      <div>
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length: a paragraph is a group of at least five
        sentences, a paragraph is half a page long, etc. In reality, though, the
        unity and coherence of ideas among sentences is what constitutes a
        paragraph.
      </div>
      <br />
    </div>
  );
}
export default App;

// export { App };
