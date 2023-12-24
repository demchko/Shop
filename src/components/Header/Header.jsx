import React from 'react';
import style from './Header.module.css';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import {FaS} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const Header = () => {

    const basket = useSelector(state => state.basket);

    return (
        <div className={style.header} >
            <div className={style.logo} >
                <p>Shopping</p><span>HUB</span>
            </div>
            <div className={style.search} >
                <input placeholder='Search here...' />
                <button><CiSearch /></button>
            </div>
            <Link to='/cart'>
                <div className={style.cart} >
                    <FaShoppingCart />
                    <p>Cart</p>
                    <span>{basket.length}</span>
                </div>
            </Link>
        </div>
    );
};

export default Header;