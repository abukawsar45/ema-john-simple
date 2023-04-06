import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Shop from './components/Shop/Shop';

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet>
                <Shop/>
            </Outlet>
        </div>
    );
};

export default Home;