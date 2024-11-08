import React from "react";
import "./NavbarBelt.css";
import amazoneLogo from "../../../Assets/amazonLogo.png";
import india from "../../../Assets/india.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function NavbarBelt() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <Link to={"/"} className="leftBeltNavLogo">
          <img
            className="amazoneLogoNavbar"
            src={amazoneLogo}
            alt="amazoneLogo"
          />
          <span className="navbar_inLogo">.in</span>
        </Link>

        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
            <LocationOnOutlinedIcon
              className="navbarBeltLocationImgIcon"
              sx={{ fontSize: "22px" }}
            />
          </div>

          <div className="navbarBeltLocationPlace">
            <div className="navbarBeltLocationTop">
              Delivering to surat 395006
            </div>
            <div className="navbarBeltLocationBottom">Update Location</div>
          </div>
        </div>
      </div>

      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div className="navbarBeltSearchboxAll">
            <div className="navbarBeltSearchboxAllText">All</div>
            <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
          </div>
          <input
            type="text"
            className="navbarBeltInputSearchBox"
            placeholder="search Amazone.in"
          />

          <div className="searchIconNavbarBelt">
            <SearchOutlinedIcon
              sx={{ fontSize: "20px" }}
              className="searchIconNavbarBeltIcon"
            />
          </div>
        </div>
      </div>

      <div className="rightSideNavbarBelt">
        <div className="indiaFlagCode">
          <img src={india} alt="img" className="indiaFlag" />
          <div className="indiaCodeNavbarBelt">
            EN{" "}
            <ArrowDropDownOutlinedIcon
              sx={{ fontSize: "16px", marginTop: 1, marginLeft: -0.4 }}
              className="indiaCodeNavbarBeltDrp"
            />{" "}
          </div>
        </div>

        <Link to={"/signin"} className="helloSignInNavbarBelt">
          <div className="helloTopNavbarBelt">Hello, User</div>
          <div className="indiaCodeNavbarBelt">Account & Lists</div>
        </Link>


        <div className="helloSignInNavbarBelt">
          <div className="helloTopNavbarBelt">Returns</div>
          <div className="indiaCodeNavbarBelt">& Orders</div>
        </div>

        <Link to={"/cart"} className="helloSignInNavbarBelt">
          <span className="cartItemNumberNavbarBelt">{totalQuantity}</span>
          <div className="helloTopNavbarBelt">
            {" "}
            <ShoppingCartOutlinedIcon /> <span className="cartTitle">
              Cart
            </span>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavbarBelt;
