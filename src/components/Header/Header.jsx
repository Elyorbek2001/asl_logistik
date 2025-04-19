import React, { useState } from 'react';
import logo from "../../assets/main/logoooo.png";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header relative flex justify-between items-center  sm:px-8 px-5 py-3">
            <img
                className='w-[120px] h-[50px] sm:w-[170px] sm:h-[60px] '
                src={logo}
                alt="Logo"
            />

            {/* 🖥 Katta ekranlar uchun menyu */}
            <ul className='hidden md:flex gap-6 text-center text-[18px] xl:text-[20px]'>
                <li><a href="/">Главная</a></li>
                <li><a href="#About">О компании</a></li>
                <li><a href="#Section">Услуги</a></li>
                <li><Link to={"/Tarif"}>Тариф</Link></li>
                <li><Link to={"/Contact"}>Контакты</Link></li>
            </ul>

            {/* 📱 Kichik ekranlarda hamburger tugma */}
            <div className="md:hidden" onClick={handleMenuToggle}>
                <button className="text-3xl focus:outline-none">
                    {isMenuOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* 📱 Kichik ekranlar uchun ochiladigan menyu */}
            {isMenuOpen && (
                <ul className='absolute top-20 right-5 bg-white rounded shadow-md w-[200px] flex flex-col gap-3 text-center py-4 z-50 text-[16px]'>
                    <li><a href="/" onClick={() => setIsMenuOpen(false)}>Главная</a></li>
                    <li><a href="#About" onClick={() => setIsMenuOpen(false)}>О компании</a></li>
                    <li><a href="#Section" onClick={() => setIsMenuOpen(false)}>Услуги</a></li>
                    <li><Link to={"/Tarif"} onClick={() => setIsMenuOpen(false)}>Тариф</Link></li>
                    <li><Link to={"/Contact"} onClick={() => setIsMenuOpen(false)}>Контакты</Link></li>
                </ul>
            )}
        </header>
    );
};

export default Header;
