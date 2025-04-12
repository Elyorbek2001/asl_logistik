import React from 'react';
import fon from "../../assets/main/fon.2.png";

const Main = () => {
    return (
        <main className='main flex flex-col lg:flex-row  px-5 py-3 sm:px-[33px] sm:py-5'>
            {/* Image Section */}
            <div className="img w-full lg:w-[50%]">
                <img src={fon} alt="" className='object-cover w-full rounded-xl' />
            </div>

            {/* Text and Form Section */}
            <div className="text w-full lg:w-[50%] pl-0 lg:pl-20 xs:pt-5 sm:pt-5 flex flex-col items-center lg:items-start">
                <h1 className='xs:text-[25px] xs:pb-5 sm:text-[25px] md:text-[30px] lg:text-[45px] xl:text-[49px] xl:font-medium text-center lg:text-left'>
                    Надежная логистика для вашего бизнеса
                </h1>

                <div className="form w-full pt-5 pb-10 xs:pt-3 xs:pb-3 sm:pt-3 sm:pb-5 lg:pt-5 lg:pb-10">
                    <h1 className='text-3xl max-w-full whitespace-nowrap text-[18px] xs:w-[80px] xs:h-auto leading-[1.2] sm:text-[15px] md:text-[20px] lg:h-auto lg:text-[25px] xl:h-auto xl:text-[30px] xl:pt-[20px] text-center lg:text-left'>
                        Calculate your shipment
                    </h1>
                    <form action="" className="grid grid-cols-1 gap-4 pt-5 xs:pt-1 xs:gap-2 sm:pt-4 sm:gap-3 md:grid-cols-2 md:gap-4 xl:pt-10 xl:grid-cols-2 xl:gap-4">
                        {/* From Field */}
                        <div className="flex flex-col">
                            <label htmlFor="from" className="text-sm font-semibold"></label>
                            <input
                                id="from"
                                type="text"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 xs:py-2 xs:text-[14px] xs:rounded-[8px] xs:px-2 xs:w-full sm:w-full md:w-[160px] lg:w-[230px] xl:w-[320px] lg:text-[15px] xl:text-[18px]"
                                placeholder="Enter origin"
                            />
                        </div>

                        {/* To Field */}
                        <div className="flex flex-col">
                            <label htmlFor="to" className="text-sm font-semibold"></label>
                            <input
                                id="to"
                                type="text"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 xs:py-2 xs:text-[14px] xs:rounded-[8px] xs:px-2 xs:w-full sm:w-full md:w-[160px] lg:w-[230px] xl:w-[315px] lg:text-[15px] xl:text-[18px]"
                                placeholder="Destination"
                            />
                        </div>

                        {/* Cargo Description Field */}
                        <div className="flex flex-col col-span-1 md:col-span-2">
                            <label htmlFor="cargo" className="text-sm font-semibold"></label>
                            <input
                                id="cargo"
                                type="text"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 xs:py-2 xs:text-[14px] xs:rounded-[8px] xs:px-2 xs:w-full sm:w-full md:w-full lg:w-full xl:w-full lg:text-[15px] xl:text-[18px]"
                                placeholder="kg, volume"
                            />
                        </div>

                        {/* Name Field */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-semibold"></label>
                            <input
                                id="name"
                                type="text"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 xs:py-2 xs:text-[14px] xs:rounded-[8px] xs:px-2 xs:w-full sm:w-full md:w-[160px] lg:w-[230px] xl:w-[320px] lg:text-[15px] xl:text-[18px]"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-sm font-semibold"></label>
                            <input
                                id="phone"
                                type="text"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 xs:py-2 xs:text-[14px] xs:rounded-[8px] xs:px-2 xs:w-full sm:w-full md:w-[160px] lg:w-[230px] xl:w-[315px] lg:text-[15px] xl:text-[18px]"
                                placeholder="Enter your phone"
                            />
                        </div>
                    </form>

                    <div className='  pt-3 xl:pt-10'>
                        <button className='w-full bg-[#0563AB]  py-2 text-white rounded-xl text-[15px] sm:px-1 sm:py-1 sm:text-[12px] md:px-2 md:py-2 md:text-[14px] lg:text-[16px] xl:px-40 xl:h-[40px]'>
                            Calculate
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
