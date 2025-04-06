import React from 'react'

const Aside = () => {
    return (
        <div className="aside flex flex-col items-center justify-center px-20 py-5 sm:px-8 xs:px-5 xs:py-5">
            <div className=' text-[12px]  '>
                <h5 className='text-[#0563AB] text-[18px] font-bold sm:text-2xl'>Преимущества</h5>
                <div className=''>
                    <div className='md:grid md:grid-cols-2 gap-4 justify-between items-center'>
                        <div className='py-5 w-[80%] font-bold text-[25px] sm:text-[40px] md:w-[80%] xl:text-[55px] xl:font-bold'>
                            <h1>Наши преимущества</h1>
                        </div>

                        <p className='text-[18px] sm:text-[18px] xl:text-[22px] xl:pl-[110px]'>Сотрудничество с нами — это гарантия того, что ваш груз окажется в нужном месте в нужное время, а вы получите высокий уровень сервиса и уверенность в результате.</p>
                    </div>



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

    )
}

export default Aside
