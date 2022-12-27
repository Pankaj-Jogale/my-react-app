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

export default AppHeader;
