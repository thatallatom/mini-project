import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Blog">Blog</Link>
      <Link to="/Login">Login</Link>
    </nav>
  );
}
