import { Link } from "react-router-dom";

function AppNavLinks() {
  return (
    <div>
      <Link to="/">Home |</Link>
      <Link to="/explore"> Explore |</Link>
      <Link to="/notification"> notification |</Link>
    </div>
  );
}
export default AppNavLinks;
