import React from 'react';
import './NavbarBanner.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from "react-router-dom";

function NavbarBanner() {
  const options = [
    { label: 'All', icon: <MenuOutlinedIcon sx={{ fontSize: '24px' }} /> },
    { label: 'MX Player' },
    { label: 'Sell' },
    { label: 'Best Sellers' },
    { label: "Today's Deals" },
    { label: 'Mobiles' },
    { label: 'Electronics' },
    { label: 'Home & Kitchen' },
    { label: 'Customer Service' },
    { label: 'Prime' },
    { label: 'New Releases' },
    { label: 'Amazone Pay' },
    { label: 'Fashion' },
    { label: 'Car & Motorbike' },
    { label: 'Computers' },
    { label: 'Sports,Fitness & Outdoors' },
    { label: 'Home Improvement' },
    { label: 'Books' }
  ];

  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        {options.map((option, index) => (
          <Link to={"/products"} key={index} className="optionsNavbarBanner" aria-label={option.label}>
            {option.icon && option.icon}
            <div className="allOptionsNavbarBanner">{option.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavbarBanner;
