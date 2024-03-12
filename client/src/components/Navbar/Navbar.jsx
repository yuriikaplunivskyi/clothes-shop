import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import logoEng from "/icon/en.png";

import "./navbar.scss"
import Cart from '../Cart/Cart';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={logoEng} alt="icon of current language" />
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>UAH</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            <img className='logo' src="/icon/cropped-logotip-miriadda.png" alt="logo of shop" />
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderIcon/>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </nav>
  )
}

export default Navbar;