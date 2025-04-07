import React from 'react'
import img1 from "../../assets/main/a.img1.png";
import img2 from "../../assets/main/a.im2.png";

const Aside = () => {
    return (
        <div className="aside flex flex-col items-center justify-center px-20 py-5 sm:px-8 xs:px-5 xs:py-5 md:mt-24">
            <div className=' text-[12px]  '>
                <h5 className='text-[#0563AB] text-[18px] font-bold sm:text-2xl'>Преимущества</h5>
                <div className=''>
                    <div className='md:grid md:grid-cols-2 gap-4 justify-between items-center'>
                        <div className='py-5 w-[80%] font-bold text-[25px] sm:text-[40px] md:w-[80%] xl:text-[55px] xl:font-bold'>
                            <h1>Наши преимущества</h1>
                        </div>

                        <p className='text-[18px] sm:text-[18px] xl:text-[22px] xl:pl-[110px]'>Сотрудничество с нами — это гарантия того, что ваш груз окажется в нужном месте в нужное время, а вы получите высокий уровень сервиса и уверенность в результате.</p>
                    </div>

                    <div className='pt-5 grid grid-row-3 gap-10 pb-10 sm:grid-cols-2 md:grid-cols-3'>

                        <div className='bg-white border rounded-[12px] py-4 px-5  group hover:bg-[#0563AB] transition-all duration-300'>

                            <div className='flex items-center gap-4 py-5  w-[100%] justify-between group hover:bg-[#0563AB] transition-all duration-300'>
                                <p className='font-normal text-[60px]  group-hover:text-white transition-colors duration-300'>
                                    01
                                </p>

                                <div className="relative w-[90px] h-[90px]">
                                    <img
                                        src={img1}
                                        alt="Togri rasm"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                                    />
                                    <img
                                        src={img2}
                                        alt="Xato rasm"
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>

                            <p className='font-bold text-[20px] py-2 xl:text-[17px] xl:pt-[8px] group-hover:text-white transition-colors duration-300'>Клиентоориентированность</p>
                            <p className='text-[15px]  xl:text-[17px] xl:pt-[8px] group-hover:text-white transition-colors duration-300'>Мы всегда на связи, оперативно решаем вопросы и стремимся сделать процесс сотрудничества максимально удобным и комфортным для клиента.</p>
                        </div>


                        <div className='bg-white border rounded-[12px] py-4 px-5  group hover:bg-[#0563AB] transition-all duration-300'>

                            <div className='flex items-center gap-4 py-5  w-[100%] justify-between group hover:bg-[#0563AB] transition-all duration-300'>
                                <p className='font-normal text-[60px]  group-hover:text-white transition-colors duration-300'>
                                    02
                                </p>

                                <div className="relative w-[90px] h-[90px]">
                                    <img
                                        src={img1}
                                        alt="Togri rasm"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                                    />
                                    <img
                                        src={img2}
                                        alt="Xato rasm"
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>

                            <p className='font-bold text-[20px] py-2 xl:text-[17px] xl:pt-[8px] group-hover:text-white transition-colors duration-300'>Оперативная доставка</p>
                            <p className='text-[15px]  xl:text-[17px] xl:pt-[8px] group-hover:text-white transition-colors duration-300'>От перевозок и складирования до консолидации грузов и таможенного оформления — мы предлагаем полный комплекс услуг, который покрывает все этапы логистического процесса.</p>
                        </div>


                        <div className='bg-white border rounded-[12px] py-4 px-5  group hover:bg-[#0563AB] transition-all duration-300'>

                            <div className='flex items-center gap-4 py-5  w-[100%] justify-between group hover:bg-[#0563AB] transition-all duration-300'>
                                <p className='font-normal text-[60px]  group-hover:text-white transition-colors duration-300'>
                                    03
                                </p>

                                <div className="relative w-[90px] h-[90px]">
                                    <img
                                        src={img1}
                                        alt="Togri rasm"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                                    />
                                    <img
                                        src={img2}
                                        alt="Xato rasm"
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>

                            <p className='font-bold text-[20px] py-2 xl:text-[17px] xl:pt-[8px] group-hover:text-white transition-colors duration-300'>Индивидуальный подход к каждому клиенту</p>
                            <p className='text-[15px]  xl:text-[17px] xl:pt-[8px] group-hover:text-white transition-colors duration-300'>У нас есть надёжный партнёр в Китае, что позволяет эффективно организовывать логистику, минимизировать затраты и обеспечивать бесперебойную работу даже в условиях высокой конкуренции.</p>
                        </div>

                    </div>





                </div>
            </div>
        </div>

    )
}

export default Aside
