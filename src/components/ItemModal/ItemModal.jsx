import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './ItemModal.module.css';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ItemModal = ({ id, showModal, onClose }) => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Initialize quantity

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const result = await axios(`https://api.escuelajs.co/api/v1/products/${id}`);
                setProduct({ ...result.data, quantity: 1 }); // Add quantity property
            }
        };
        fetchData();
    }, [id]);

    if (!showModal) return null;

    const incrementQuantity = () => {
        setQuantity(prevQty => prevQty + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQty => Math.max(1, prevQty - 1));
    };

    const click = () => {
        dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } }); // Use updated quantity
        setQuantity(1);
        onClose();
    };

    console.log(product);

    return (
        <div className={style.modalOverlay} onClick={onClose}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <button className={style.closeButton} onClick={onClose}>X</button>
                {
                    product &&
                    <div >
                        <h1>{product.title}</h1>
                        <img src={product.images[0]} alt={product.title} />
                        <p>{product.description}</p>
                        <hr />
                        <div className={style.block} >
                            <p className={style.price} >Price: ${product.price * quantity}</p>
                            <div className={style.btns} >
                                <p>Qty:</p>
                                <button onClick={decrementQuantity}>-</button>
                                <p>{quantity}</p> {/* Display quantity */}
                                <button onClick={incrementQuantity}>+</button>
                            </div>
                        </div>
                        <button onClick={click} className={style.add} >
                            <FaShoppingCart />
                            <p>Add To Cart</p>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default ItemModal;
