import React from 'react';
import img1 from "../../assets/s.img1.png"; // PNG formatidagi rasm
import img2 from "../../assets/s.img2.png";
import img3 from "../../assets/s.img3.png";

const Section = () => {
    return (
        <div id='Section' className="section flex flex-col items-center justify-center sm:px-8 px-5 py-3 md:mt-12">
            <div className='text-[12px]'>
                <h5 className='text-[#0563AB] text-[18px] font-bold sm:text-2xl'>Услуги</h5>
                <div className=''>
                    <div className='md:grid md:grid-cols-2 gap-4 justify-between items-center'>
                        <div className='py-5 w-[90%] font-bold text-[25px] sm:text-[40px] md:w-[120%]  xl:text-[55px] xl:font-bold'>
                            <h1>Откройте для себя полный спектр услуг, которые мы предлагаем для доставки</h1>
                        </div>

                        <p className='text-[18px] sm:text-[18px] xl:text-[22px] xl:pl-[110px]'>Мы делаем логистическую доставку намного проще и понятнее. Сочетание хорошего обслуживания и технологий делает все эффективным</p>
                    </div>

                    <div className="grid grid-col items-center gap-4 py-4  sm:grid-cols-2 md:grid-cols-3">
                        {/* Rasm 1 */}
                        <div className="relative  ">
                            <img src={img1} alt="Image 1" className="w-[100%] h-[600px] object-cover rounded-[12px]" />
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xl shadow-lg p-2 bg-opacity-50">ServiceImageМеждународные грузоперевозки</div>
                        </div>
                        {/* Rasm 2 */}
                        <div className="relative ">
                            <img src={img2} alt="Image 2" className="w-[100%] h-[600px] object-cover rounded-[12px]" />
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xl shadow-lg p-2 bg-opacity-50">ServiceImageСкладирование и обработка грузов</div>
                        </div>
                        {/* Rasm 3 */}
                        <div className="relative">
                            <img src={img3} alt="Image 3" className="w-[100%] h-[600px] object-cover rounded-[12px]" />
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xl shadow-lg p-2 bg-opacity-50">Таможенное оформление</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
