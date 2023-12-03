import React from 'react';
import style from './Header.module.css';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import {FaS} from "react-icons/fa6";
const Header = () => {
    return (
        <div className={style.header} >
            <div className={style.logo} >
                <p>Shopping</p><span>HUB</span>
            </div>
            <div className={style.search} >
                <input placeholder='Search here...' />
                <button><CiSearch /></button>
            </div>
            <div className={style.cart} >
                <FaShoppingCart />
                <p>Cart</p>
                <span>0</span>
            </div>
        </div>
    );
};

export default Header;