import React from 'react';
import fon from "../../assets/main/fon.2.png";
import axios from "axios";

const Main = () => {
    const [loading, setLoading] = React.useState(false);
    const SendMessage = (event) => {
        event.preventDefault();
        if (loading) return;  // agar loading bo'lsa, yana yuborilmasin

        setLoading(true);
        // Token va chatId
        const token = "7765338174:AAGIw8bMxVU62xeWYCUfsMhGMBCGW0Cklk8";
        const chatId = "6563907367";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        // Formadan ma'lumot olish
        const formData = new FormData(event.target);
        const from = formData.get("from");
        const to = formData.get("to");
        const cargo = formData.get("cargo");
        const name = formData.get("name");
        const phone = formData.get("phone");

        // Xabar matni
        const messageContent = `From: ${from} \nTo: ${to} \nCargo: ${cargo} \nName: ${name} \nPhone: ${phone}`;

        // Telegramga xabar yuborish
        axios({
            url: url,
            method: "POST",
            data: {
                chat_id: chatId,
                text: messageContent,
            }
        }).then((res) => {
            alert("Сообщение отправлено");
            event.target.reset();  // Formani tozalash
        }).catch((error) => {
            console.log("Yuborishda xatolik", error);
        }).finally(() => {
            setLoading(false);  // so'rov tugagandan keyin loading holatini o'chiramiz
        });
    };

    return (
        <main className='main flex flex-col lg:flex-row px-5 py-3 sm:px-[33px] sm:py-5'>
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
                    <form id='myForm' onSubmit={SendMessage} className="grid grid-cols-1 gap-4 pt-5 xs:pt-1 xs:gap-2 sm:pt-4 sm:gap-3 md:grid-cols-2 md:gap-4 xl:pt-10 xl:grid-cols-2 xl:gap-4">
                        {/* From Field */}
                        <div className="flex flex-col">
                            <label htmlFor="from" className="text-sm font-semibold"></label>
                            <input
                                id="from"
                                name="from"
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
                                name="to"
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
                                name="cargo"
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
                                name="name"
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
                                name="phone"
                                type="text"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 xs:py-2 xs:text-[14px] xs:rounded-[8px] xs:px-2 xs:w-full sm:w-full md:w-[160px] lg:w-[230px] xl:w-[315px] lg:text-[15px] xl:text-[18px]"
                                placeholder="Enter your phone"
                            />
                        </div>

                        <div className='md:col-span-2 pt-4'>
                            <button
                                type='submit'
                                className='w-full bg-[#0563AB] py-2 text-white rounded-xl text-[16px] hover:bg-blue-700 transition'
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Calculate"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Main;
