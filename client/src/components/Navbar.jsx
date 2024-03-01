import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="wrapper">
        <div className="left"></div>
        <div className="center">
          <img src="/public/icon/cropped-logotip-miriadda.png" width={250} style={{background: "pink"}} alt="" />
        </div>
        <div className="right"></div>
      </div>
    </nav>
  )
}

export default Navbar;