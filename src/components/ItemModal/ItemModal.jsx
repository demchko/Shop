import React from 'react';
import axios from 'axios';
import style from './ItemModal.module.css';
import { FaShoppingCart } from "react-icons/fa";
const ItemModal = ({ id, showModal, onClose }) => {
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const result = await axios(`https://api.escuelajs.co/api/v1/products/${id}`);
                setProduct(result.data);
            }
        };
        fetchData();
    }, [id]);

    if (!showModal) return null;

    console.log(product);

    return (
        <div className={style.modalOverlay} onClick={onClose}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <button className={style.closeButton} onClick={onClose}>X</button>
                {
                    product &&
                    <div>
                        <h1>{product.title}</h1>
                        <img src={product.images[0]} />
                        <p>{product.description}</p>
                        <hr />
                        <div className={style.block} >
                            <p className={style.price} >Price: ${product.price}</p>
                            <div className={style.btns} >
                                <p>Qty:</p>
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                        </div>
                        <button className={style.add} >
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
