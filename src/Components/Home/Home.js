import React from 'react';
import Description from '../Description/Description';
import DishMenu from '../DishMenu/DishMenu';
import DishMenu2 from '../DishMenu/DishMenu2';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainMenu from '../MainMenu/MainMenu';

const Home = () => {
    return (
        <div>
            <MainMenu />
            <Header />
            <DishMenu2 />
            <Description />
            <Footer />
        </div>
    );
};

export default Home;