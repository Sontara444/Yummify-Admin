import { assets } from "../../assets/assets.js";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div>
          <h3 className="logo">Yummify</h3>
          <p className="admin-pannel">admin pannel</p>
        </div>

        <img className="profile" src={assets.profile_image} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
