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
                <a href=""><li>О НАС</li></a>
                <a href=""><li>УСЛУГИ</li></a>
                <a href=""><li>ТАРИФ</li></a>
                <a href=""><li>КОНТАКТ</li></a>
            </ul>
        </header>
    )
}

export default Header
