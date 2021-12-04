import React from 'react';
import Description from '../Description/Description';
import DishMenu from '../DishMenu/DishMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainMenu from '../MainMenu/MainMenu';

const Home = () => {
    return (
        <div>
            <MainMenu />
            <Header />
            <DishMenu />
            <Description />
            <Footer />
        </div>
    );
};

export default Home;