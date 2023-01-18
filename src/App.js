import { Route, Routes } from "react-router-dom";
import AppNavLinks from "./components/AppNavLinks";

import Explore from "./components/Explore";
import Home from "./components/Home";
import Whatsapp from "./components/Whatsapp";

import Notification from "./components/Notification";

function App() {
  return (
    <div>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
