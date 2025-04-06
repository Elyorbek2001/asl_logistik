import React from 'react'
import logo from "../../assets/main/logoooo.png";

const Header = () => {
    return (
        <header className="header flex justify-between items-center px-20 py-5 sm:px-8 xs:px-5 xs:py-3">
            <img
                className='w-[300px] h-[100px] sm:w-[220px] sm:h-[80px] xs:w-[100px] xs:h-[40px]'
                src={logo}
                alt="Logo"
            />
            <ul className='grid grid-cols-4 gap-4 text-center text-base text-[14px] sm:text-[12px] xs:text-[10px] xl:text-[20px]'>
                <li><a href="">О НАС</a></li>
                <li><a href="#About">О компании</a></li>
                <li><a href="">ТАРИФ</a></li>
                <li><a href="">КОНТАКТ</a></li>
            </ul>
        </header>
    )
}

export default Header
