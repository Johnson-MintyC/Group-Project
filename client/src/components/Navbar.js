import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Navbar;
