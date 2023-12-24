import React, {useEffect, useState} from 'react';
import axios from "axios";
import style from './Category.module.css';
import {Link} from "react-router-dom";

const Category = () => {

    const [category, setCategory] = useState([]);

    const fetchData = async () => {
        const result = await axios('https://api.escuelajs.co/api/v1/products');
        let arr = result.data.map(item => item.category);
        setCategory(arr.filter((item, index, array) => {
            // Перевіряємо, чи не є поточний елемент дублікатом попереднього
            return index === 0 || item.name !== array[index - 1].name;
        }));
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className={style.wrapper} >
            <h1>Category</h1>
            <div className={style.list} >
                {
                    category.slice(0, 5).map(item => (
                        <div key={item.id} className={style.block} >
                            <Link to={`/category/${item.name}`}>
                                <img src={item.image}/>
                                <p>{item.name}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;