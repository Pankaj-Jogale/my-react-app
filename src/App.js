import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/" className="fs-4">
        Home |
      </Link>
      <Link to="/explore"> Explore |</Link>
      <Link to="/notification"> notification |</Link>

      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/explore" element={<h1>Explore</h1>} />
        <Route path="/notification" element={<h1>notification</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
