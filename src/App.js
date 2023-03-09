import { Route, Routes } from "react-router-dom";
import AppNavLinks from "./components/AppNavLinks";
import Explore from "./components/Explore";
import Home from "./components/Home";
import Messenger from "./pages/Messenger";

import Notification from "./components/Notification";

function App() {
  return (
    <div>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/message" element={<Messenger />} />
      </Routes>
    </div>
  );
}

export default App;
