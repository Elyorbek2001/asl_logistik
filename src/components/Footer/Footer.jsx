import React from 'react'
import logo from "../../assets/f.logo.png";
import instagarm from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";


const Footer = () => {
    return (
        <div className='Footer bg-[#0563AB] flex flex-col  px-20 py-5 sm:px-8 xs:px-5 xs:py-5 '>
            <div className='logo w-[250px] h-[130px] flex justify-center items-center'>
                <img src={logo} alt="" />
            </div>
            <hr />
            <div className='grid grid-cols-4 font-normal gap-10 pt-10 pb-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
                <div className='text-white'>
                    <h4 className='font-bold pt-8 pb-2' >ИНФОРМАЦИЯ</h4>
                    <ul>
                        <li className='mb-2'>
                            <a href="">О компании</a>
                        </li>
                        <li className='mb-2'>
                            <a href="">Вакансии</a>
                        </li>
                        <li className='mb-2'>
                            <a href="">Контакты</a>
                        </li>
                        <li className='mb-2'>
                            <a href="">Тариф</a>
                        </li>
                    </ul>
                </div>

                <div className='text-white'>
                    <h4 className='font-bold pt-8 pb-2' >УСЛУГИ</h4>
                    <ul>
                        <li className='mb-2'>
                            <a href="">Международные грузоперевозки</a>
                        </li>
                        <li className='mb-2'>
                            <a href="">Складирование и обработка грузов</a>
                        </li>
                        <li className='mb-2'>
                            <a href="">Таможенное оформление</a>
                        </li>
                        <li className='mb-2'>
                            <a href="">Логистический консалтинг</a>
                        </li>
                    </ul>
                </div>

                <div className='text-white '>
                    <h4 className='font-bold pt-8 pb-2' >Контакты</h4>
                    <ul>
                        <li className='mb-2'>
                            <a href="">+7 775 337 85 95</a>
                        </li>
                        <li className='mb-2'>
                            <a href="">sultanbek.asilbek@gmail.com</a>
                        </li>
                        <li className='mb-2'>
                            <a href="">Республика Казахстан, г.Алматы, Тулебаева 38, Бизнес центр Жетысу, офис 512</a>
                        </li>

                    </ul>
                </div>

                <div className='text-white'>
                    <h4 className='font-bold pt-8 pb-2' >СЛЕДИТЕ ЗА НАМИ В СОЦИАЛЬНЫХ СЕТЯХ</h4>
                    <ul>
                        <li>
                            <a href="">Присоединяйтесь к нам</a>
                        </li>
                        <div className='flex gap-5 pt-5'>
                            <img src={instagarm} alt="" />
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                        </div>

                    </ul>
                </div>

            </div>

            <hr className='mt-8' />

            <div className='text-white flex justify-center items-center pt-5'>
                <p>© 2025 Все права защищены</p>

            </div>

        </div>
    )
}

export default Footer
