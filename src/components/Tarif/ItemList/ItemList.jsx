import React from 'react'
import logo1 from "../../../assets/tarif/t.logo.png";
import logo2 from "../../../assets/tarif/t.logo2.png";
import logo3 from "../../../assets/tarif/t.logo3.png";
import logo4 from "../../../assets/tarif/t.logo4.png";

const ItemList = () => {
    return (
        <div className='ItemList flex flex-col  sm:px-8 xs:px-5 px-5 py-3 md:mt-10'>
            <h5 className='text-[#0563AB] text-[18px] font-bold sm:text-2xl'>Тариф</h5>
            <div className='text-[12px]  '>

                <div className='md:grid md:grid-cols-2 gap-4 justify-between items-center'>
                    <div className='py-5 w-[80%] font-bold text-[25px] sm:text-[40px] md:w-[80%] xl:text-[55px] xl:font-bold'>
                        <h1>Гибкие варианты ценообразования</h1>
                    </div>

                    <p className='text-[18px] sm:text-[18px] xl:text-[22px] xl:pl-[110px]'>Мы упрощаем логистическую доставку, делая ее более простой и понятной. Сочетая выдающийся сервис с передовыми технологиями, мы обеспечиваем эффективность на каждом этапе</p>
                </div>


                <div className='pt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 pb-10'>
                    <div>
                        <div className='pt-4 pb-4 text-start text-[18px] font-medium sm:text-[18px] xl:text-[22px] '>
                            <p className='text-[18px] sm:text-2xl'>Рассчитайте стоимость доставки</p>
                        </div>
                        <form className="grid grid-cols-1 text-[17px] pt-1 gap-2 sm:pt-4 sm:gap-3 md:grid-cols-1 xl:grid-cols-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Откуда"
                                    className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Куда"
                                    className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <textarea
                                placeholder="Описание груза (вес, объём)"
                                className="rounded-xl border px-4 py-2 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Ваш телефон"
                                    className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Страна"
                                    className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#0563AB] py-2 text-white rounded-xl text-[16px] hover:bg-blue-700 transition"
                            >
                                Рассчитать
                            </button>
                        </form>
                    </div>


                    <div className='pt-5 grid grid-row-3 gap-10 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 '>
                        <div className='bg-[#F6F6F6;] border rounded-[12px] p-4'>
                            <div className='flex items-center gap-4 py-5 w-[90%]'>
                                <img src={logo1} alt="" />
                                <p className='font-bold text-[20px] md:text-[14px] xl:text-[20px] xl:w-[50%]'>Адресная доставка</p>
                            </div>
                            <p className='text-[15px] xl:text-[17px] xl:pt-[8px]'>Доставка до адресата с указанием удобного времени</p>
                        </div>

                        <div className='bg-[#F6F6F6;] border rounded-[12px] p-4'>
                            <div className='flex items-center gap-4 py-5 w-[90%]'>
                                <img src={logo2} alt="" />
                                <p className='font-bold text-[20px] md:text-[14px] xl:text-[20px] xl:w-[50%]'>Собственный автопарк</p>
                            </div>
                            <p className='text-[15px] xl:text-[17px]'>Предоставляем широкий спектр услуг в перевозке грузов различных габаритов.</p>
                        </div>
                        <div className='bg-[#F6F6F6;] border rounded-[12px] p-4'>
                            <div className='flex items-center gap-4 py-5 w-[90%]'>
                                <img src={logo3} alt="" />
                                <p className='font-bold text-[20px] md:text-[14px] xl:text-[20px] xl:w-[50%]'>ЧОплата в один конец</p>
                            </div>
                            <p className='text-[15px] xl:text-[17px] xl:pt-[8px]'>Вы оплачиваете стоимость перевозки в один конец, не платите за обратную дорогу.</p>
                        </div>
                        <div className='bg-[#F6F6F6;] border rounded-[12px] p-4'>
                            <div className='flex items-center gap-4 py-5 w-[90%]'>
                                <img src={logo4} alt="" />
                                <p className='font-bold text-[20px] md:text-[14px] xl:text-[20px] xl:w-[50%]'>Доставка груза точно в срок</p>
                            </div>
                            <p className='text-[15px] xl:text-[17px]'>Мы гарантируем качественную доставку груза точно в указанный срок.</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ItemList
