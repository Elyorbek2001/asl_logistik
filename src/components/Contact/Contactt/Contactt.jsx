import React from 'react'

const Contactt = () => {
    return (
        <div className='ItemList flex flex-col sm:px-8 px-5 py-5 md:mt-10'>
            <h5 className='text-[#0563AB] text-[18px] font-bold sm:text-2xl'>Контакты</h5>
            <div className='text-[12px]  '>

                <div className='md:grid md:grid-cols-2 gap-4 justify-between items-center'>
                    <div className='py-5 w-[80%] font-bold text-[25px] sm:text-[40px] md:w-[80%] xl:text-[55px] xl:font-bold'>
                        <h1>Свяжитесь с нами в любое время</h1>
                    </div>

                    <p className='text-[18px] sm:text-[18px] xl:text-[22px] xl:pl-[110px]'>Мы здесь, чтобы помочь. Независимо от того, есть ли у вас вопросы или вам нужна помощь, наша команда готова оказать поддержку и обеспечить гладкое взаимодействие.</p>
                </div>
            </div>
            <div className="pt-5 gap-10 pb-10">
                <div className="w-full mx-auto bg-gray-50 p-4 rounded-lg shadow grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Связаться</h2>
                        <form className="space-y-6 h-full">
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600"
                            />
                            <input
                                type="text"
                                placeholder="Страна"
                                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600"
                            />
                            <input
                                type="text"
                                placeholder="Город"
                                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600"
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600"
                            />
                            <input
                                type="text"
                                placeholder="Ваш телефон"
                                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600"
                            />
                            <textarea
                                placeholder="Давайте поговорим о вашей идее"
                                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-[#0563AB] hover:bg-blue-800 text-white font-semibold py-3 rounded-full transition"
                            >
                                Рассчитать
                            </button>
                        </form>
                    </div>

                    <div className="h-full">
                        <iframe
                            title="Bizning manzil"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2037225931177!2d69.24007301566458!3d41.29949597927095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b314d5ea3b9%3A0x3b80d8351a40b2ce!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1617805214952!5m2!1sen!2s"
                            className="rounded-xl w-full h-full min-h-[500px]"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>




        </div>

    )
}

export default Contactt
