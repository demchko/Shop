import React from 'react';
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {IoMdArrowDropright} from "react-icons/io";
import style from '../CategoryPage/CategoryPage.module.css';
import s from './CartPage.module.css';
import {useDispatch, useSelector} from "react-redux";

const CartPage = () => {

    const basket = useSelector(state => state.basket);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();

    console.log(total, basket);

    return (
        <div>
            <Header />
            <div className={style.wrapper} >
                <Link to='/'><FaHome /></Link>
                <IoMdArrowDropright />
                <p>Cart</p>
            </div>
            <div className={s.block} >
                <h1>My Cart</h1>
                {
                    basket.length ?
                    <div className={s.container} >
                        <div className={s.leftBlock} >
                            {
                                basket.map(item => (
                                    <div className={s.listItem} >
                                        <img src={item.images[0]} />
                                        <div className={s.item} >
                                            <h2>{item.title}</h2>
                                            <div className={s.btns} >
                                                <p>Qty:</p>
                                                <button onClick={() => dispatch({type: 'DECREMENT_QUANTITY', payload: item})} >-</button>
                                                <p>{item.quantity}</p>
                                                <button onClick={() => dispatch({type: 'INCREMENT_QUANTITY', payload: item})} >+</button>
                                            </div>
                                            <p>Price: {item.price * item.quantity}$</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div>
                                <button className={s.clearButton} onClick={() => dispatch({type: 'CLEAR'})} >Clear Cart</button>
                            </div>
                        </div>
                        <div className={s.rightBlock} >
                            <p>Order Summary</p>
                            <hr />
                            <div className={s.orderItem} >
                                <p>Selected Item(s) price: {total}$</p>
                                <p>Discount: 0$</p>
                                <p>Delivery: 10$</p>
                            </div>
                            <p>Grand Total: {total+10}$</p>
                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                    : 'Cart is Empty'
                }
            </div>
        </div>
    );
};

export default CartPage;