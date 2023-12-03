import React, {useEffect, useState} from 'react';
import style from './Main.module.css';
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Category from "../../components/Category/Category";
import Products from "../../components/Products/Products";
import axios from "axios";

const Main = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://api.escuelajs.co/api/v1/products');
            setProducts(result.data.slice(0, 12));
        };
        fetchData();
    }, []);


    return (
        <div className={style.main} >
            <Header />
            <SubHeader />
            <Category />
            <Products products={products} />
        </div>
    );
};

export default Main;