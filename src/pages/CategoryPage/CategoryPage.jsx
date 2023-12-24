import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import {Link, useParams} from "react-router-dom";
import Products from "../../components/Products/Products";
import axios from "axios";
import style from './CategoryPage.module.css';
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const CategoryPage = () => {

    const {name} = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://api.escuelajs.co/api/v1/products');
            setCategoryProducts(result.data.filter(item => item.category.name == name));
        };
        fetchData();
    }, []);


    return (
        <div>
            <Header />
            <div className={style.wrapper} >
                <Link to='/'><FaHome /></Link>
                <IoMdArrowDropright />
                <Link to='/'><p>Category</p></Link>
                <IoMdArrowDropright />
                <p>{name}</p>
            </div>
            <Products products={categoryProducts} />
        </div>
    );
};

export default CategoryPage;