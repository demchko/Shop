import React, {useEffect, useState} from 'react';
import style from './SubHeader.module.css';
import axios from "axios";
import {Link} from "react-router-dom";

const SubHeader = () => {

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
            <div className={style.subHeader} >
                {
                    category.map(item => (
                        <Link to={`/category/${item.name}`}>
                            <p>{item.name}</p>
                        </Link>
                    ))
                }
            </div>
            <img  src='https://static.vecteezy.com/system/resources/previews/011/188/578/original/flash-sale-banner-with-orange-podium-scene-with-lightning-symbol-icon-flash-sale-online-shopping-banner-template-design-for-social-media-and-website-vector.jpg' />
        </div>
    );
};

export default SubHeader;