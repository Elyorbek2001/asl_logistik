import React from 'react';
import world from "../../assets/World.png";
import logo1 from "../../assets/main/logo1.png";
import logo2 from "../../assets/main/logo2.png";
import logo3 from "../../assets/main/logo3.png";


const About = () => {
    return (
        <div id="About" className="about flex flex-col items-center justify-center py-3 px-5 sm:px-8 md:mt-5 ">
            {/* Image with Text */}
            <div
                className="relative w-full bg-center bg-cover flex   "
                style={{
                    backgroundImage: `url(${world})`,
                }}
            >
                <div className=' text-[12px] py-5 '>
                    <h5 className='text-[#0563AB] text-[18px] font-bold sm:text-2xl'>О компании</h5>
                    <div className=''>
                        <div className='md:grid md:grid-cols-2 gap-4 justify-between items-center'>
                            <div className='py-5 w-[80%] font-bold text-[25px] sm:text-[40px] md:w-[80%] xl:text-[55px] xl:font-bold'>
                                <h1>Решение для потребностей вашего бизнеса</h1>
                            </div>

                            <p className='text-[18px] sm:text-[18px] xl:text-[22px] xl:pl-[110px]'>Мы делаем логистическую доставку намного проще и понятнее. Сочетание хорошего сервиса и технологий делает все эффективным</p>
                        </div>


                        <div className='pt-5 grid grid-row-3 gap-10 pb-10 sm:grid-cols-2 md:grid-cols-3'>
                            <div className='bg-white border rounded-[12px] p-2'>
                                <div className='flex items-center gap-4 py-5 w-[90%]'>
                                    <img src={logo1} alt="" />
                                    <p className='font-bold text-[20px] md:text-[14px] xl:text-[20px] xl:w-[50%]'>Малый и средний бизнес</p>
                                </div>
                                <p className='text-[15px] xl:text-[17px] xl:pt-[8px]'>Оптимальные логистические решения для стартапов и компаний, развивающих свои направления.</p>
                            </div>

                            <div className='bg-white border rounded-[12px] p-2'>
                                <div className='flex items-center gap-4 py-5 w-[90%]'>
                                    <img src={logo2} alt="" />
                                    <p className='font-bold text-[20px] md:text-[14px] xl:text-[20px] xl:w-[50%]'>Крупные корпоративные клиенты</p>
                                </div>
                                <p className='text-[15px] xl:text-[17px]'>Полный цикл логистики, включая индивидуальные маршруты, консолидацию грузов и международные перевозки.</p>
                            </div>
                            <div className='bg-white border rounded-[12px] p-2'>
                                <div className='flex items-center gap-4 py-5 w-[90%]'>
                                    <img src={logo3} alt="" />
                                    <p className='font-bold text-[20px] md:text-[14px] xl:text-[20px] xl:w-[50%]'>Частные клиенты</p>
                                </div>
                                <p className='text-[15px] xl:text-[17px] xl:pt-[8px]'>Надёжная доставка личных и коммерческих грузов с гарантией качества.</p>
                            </div>
                        </div>
                        <div className='grid grid-row-3 gap-4 pb-2 pt-5 bg-[#EFF8FF] rounded-[12px] sm:grid-cols-2 md:grid-cols-3 px-2'>
                            <div className='text-center flex-col items-center pb-5 pt-8 '>
                                <h1 className='text-[50px] font-normal'>2+</h1>
                                <p className='text-[25px]'>года на рынке</p>
                            </div>
                            <div className='text-center flex-col items-center pb-5 pt-8 '>
                                <h1 className='text-[50px] font-normal'>1000+</h1>
                                <p className='text-[25px]'>тонн ежемесячно</p>
                            </div>
                            <div className='text-center flex-col items-center pb-5 pt-8'>
                                <h1 className='text-[50px] font-normal'>100+</h1>
                                <p className='text-[25px]'>основных маршрутов</p>
                            </div>
                            <div className='col-span-full px-4'>
                                <hr className='border-t-2 border-[#8B8B8B99] my-4' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;
