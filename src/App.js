import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CartPage from "./pages/CartPage/CartPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/category/:name' element={<CategoryPage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </div>
    );
};

export default App;