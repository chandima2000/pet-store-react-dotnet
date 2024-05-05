import React,{useState} from "react";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom';

export default function Navbar() {

  const [open,setOpen] = useState(false);

  const toggleNavBar = () => {
    if(window.innerWidth < 500) {
      setOpen(!open);
    }
  };

  const menuStyle = open ? "menu open" : "menu";


  return (
    <div className="navbar">
      <div className="brand">Pet Store</div>
      <div className="hamburger">
        <MenuIcon onClick={toggleNavBar}/>
      </div>
      <div className={menuStyle}>
        <ul>

            <CloseIcon 
                className='close'
                onClick={toggleNavBar}
            />
            <div className="wrap">
              <li onClick={toggleNavBar}>
                  <Link to="/">Home</Link>
              </li>
              <li onClick={toggleNavBar}>
                  <Link to="/products">Products</Link>
              </li>
              <li onClick={toggleNavBar}>
                  <Link to="/products/add">Add Product</Link>
              </li>
            </div>
           
        </ul>
      </div>
    </div>
  );
}
