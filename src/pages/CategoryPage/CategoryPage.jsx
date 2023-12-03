import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import {useParams} from "react-router-dom";
import Products from "../../components/Products/Products";
import axios from "axios";
import products from "../../components/Products/Products";

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
            <h1>Category: {name}</h1>
            <Products products={categoryProducts} />
        </div>
    );
};

export default CategoryPage;