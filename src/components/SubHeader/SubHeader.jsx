import React from 'react';
import style from './SubHeader.module.css';

const SubHeader = () => {
    return (
        <div className={style.wrapper} >
            <div className={style.subHeader} >
                <p>Clothes</p>
                <p>Electronics</p>
                <p>Furniture</p>
                <p>Shoes</p>
                <p>Others</p>
            </div>
            <img  src='https://static.vecteezy.com/system/resources/previews/011/188/578/original/flash-sale-banner-with-orange-podium-scene-with-lightning-symbol-icon-flash-sale-online-shopping-banner-template-design-for-social-media-and-website-vector.jpg' />
        </div>
    );
};

export default SubHeader;