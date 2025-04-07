import React from 'react'
import logo from "../../assets/f.logo.png";

const Footer = () => {
    return (
        <div className='Footer bg-[#0563AB] flex flex-col  px-20 py-5 sm:px-8 xs:px-5 xs:py-5 '>
            <div className='logo w-[250px] h-[130px] flex justify-center items-center'>
                <img src={logo} alt="" />
            </div>
            <hr />
            <div>
                <div>
                    <h4>ИНФОРМАЦИЯ</h4>
                    <ul>
                        <li>
                            <a href="">О компании</a>
                        </li>
                        <li>
                            <a href="">Вакансии</a>
                        </li>
                        <li>
                            <a href="">Контакты</a>
                        </li>
                        <li>
                            <a href="">Тариф</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div></div>

        </div>
    )
}

export default Footer
