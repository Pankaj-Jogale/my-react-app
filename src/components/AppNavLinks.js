// import { Link } from "react-router-dom";

// function AppNavLinks() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top ">
//       <div className="container-fluid ">
//         <Link className="navbar-brand" to="#">
//           Port-Folio
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link " aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/skills">
//                 Skills
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/resume">
//                 Resume
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 Contact Me
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="https://www.linkedin.com/in/pankaj-jogale-8780791a7"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 LinkedIn
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default AppNavLinks;
import { Link } from "react-router-dom";
import { useState } from "react";

function AppNavLinks() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top ">
      <div className="container-fluid ">
        <Link
          className="navbar-brand"
          to="#"
          onClick={() => setIsNavOpen(false)}
        >
          Port-Folio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to="/"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={toggleNav}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume" onClick={toggleNav}>
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggleNav}>
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/pankaj-jogale-8780791a7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsNavOpen(false)}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default AppNavLinks;
