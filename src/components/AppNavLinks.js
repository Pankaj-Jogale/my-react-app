import { Link } from "react-router-dom";

function AppNavLinks() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top p-1">
      <div className="container-fluid ">
        <Link className="navbar-brand fs-2" to="#">
          Project Book
          <marquee className="d-flex fs-6 opacity-50">
            *Paragraphs are the building blocks of papers. Many students define
            paragraphs in terms of length: a paragraph is a group of at least
            five sentences, a paragraph is half a page long, etc. In reality,
            though, the unity and coherence of ideas among sentences is what
            constitutes a paragraph.
          </marquee>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notification">
                Notifications
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default AppNavLinks;
