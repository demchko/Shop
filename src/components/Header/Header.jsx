import React, {useEffect, useMemo, useState} from 'react';
import style from './Header.module.css';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import {FaS} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import ItemModal from "../ItemModal/ItemModal";
const Header = () => {

    const basket = useSelector(state => state.basket);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://api.escuelajs.co/api/v1/products');
            setProducts(result.data);
        };
        fetchData();
    }, []);

    const filteredArray = useMemo(() => {
        return products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, products]);

    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const openModal = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const closeModal = () => {
        setSearch('');
        setShowModal(false);
    }


    return (
        <div className={style.header} >
            <ItemModal id={selectedId} showModal={showModal} onClose={closeModal} />
            <div className={style.logo} >
                <Link to='/'>
                    <p>Shopping</p><span>HUB</span>
                </Link>
            </div>
            <div className={style.search} >
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search here...' />
                <button><CiSearch /></button>
            </div>
            {
                (search !== '' && products.length !== 0)
                && <div className={style.itemBlock} >
                    {
                        filteredArray.length
                        ? filteredArray.slice(0, 6).map(item => (
                                <div className={style.searchItem} onClick={() => openModal(item.id)} >
                                    <img src={item.images[0]} />
                                    <p>{item.title}</p>
                                </div>
                            ))
                        : <div className={style.searchItem} >
                            <p>No item!</p>
                          </div>
                    }
                </div>
            }
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