import React from "react";
import classes from "./Header.module.css"
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown, FaCartPlus } from "react-icons/fa";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import LowerHeader from "./LowerHeader";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section>
      <div className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* logo */}
          <Link to='/'>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
              width={80}
            />
          </Link>
          <div className={classes.delivery}>
            <span>
              {/* location logo */}
              <CiLocationOn size={30} />
            </span>

            <div className={classes.delivery_place}>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="search" placeholder="search for the products...." />
          {/* search icon */}
          <CiSearch size={25}/>
        </div>
        {/* right side link */}

        <div className={classes.order__container}>
          <Link to='' className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg"
              alt="flag"
            />
            <section>
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </section>
          </Link>

          <Link to='/auth'>
            
              <p>Sign In</p>
              <span>Account & Lists</span>
            
          </Link>
          <Link to='/orders'>
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          <Link to='/cart' className={classes.cart}>
            <FaCartPlus size={30}/>
            <span>0</span>
          </Link>
        </div>
      </div>
      <LowerHeader/>
    </section>
  );
};

export default Header;
