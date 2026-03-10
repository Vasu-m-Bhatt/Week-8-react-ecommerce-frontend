import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav style={{padding:"10px", background:"#222", color:"#fff"}}>
      <Link to="/" style={{marginRight:"20px", color:"#fff"}}>Home</Link>
      <Link to="/cart" style={{color:"#fff"}}>Cart</Link>
    </nav>
  );
};

export default Navbar;