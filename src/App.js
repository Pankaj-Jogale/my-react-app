import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>} />
      <Route path="/explore" element={<h1>Explore</h1>} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
