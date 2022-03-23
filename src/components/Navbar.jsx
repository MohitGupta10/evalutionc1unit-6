import { Link } from "react-router-dom";
import "./navbar.css";
// const links = [
//   {
//     title: "Home",
//     link: "/"
//   },
//   //   add the other link as well
// ];
export const Navbar = () => {
  return (
    <>
      <div className="header">
        <Link to="/" className="tag">
          Home
        </Link>
        <Link to="/about" className="tag">
          About
        </Link>
        <Link to="/product" className="tag">
          Product
        </Link>
        <Link to="/SingleProduct" className="tag">
          SingleProduct
        </Link>
      </div>
    </>
  );
  //map through the link ad display it in header
};
