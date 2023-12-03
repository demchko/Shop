import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Products.module.css';
import ItemModal from "../ItemModal/ItemModal";

const Products = ({products}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const openModal = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);


    return (
        <div className={style.wrapper}>
            <ItemModal id={selectedId} showModal={showModal} onClose={closeModal} />
            <h1>Our Products</h1>
            <div className={style.list}>
                {products.map(item => (
                    <div key={item.id} className={style.block} onClick={() => openModal(item.id)}>
                        <p className={style.category}>{item.category.name}</p>
                        <img src={item.images[0]} alt={item.title}/>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
