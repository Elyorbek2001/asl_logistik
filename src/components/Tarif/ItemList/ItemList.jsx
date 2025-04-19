import React, { useState } from 'react';
import logo1 from "../../../assets/tarif/t.logo.png";
import logo2 from "../../../assets/tarif/t.logo2.png";
import logo3 from "../../../assets/tarif/t.logo3.png";
import logo4 from "../../../assets/tarif/t.logo4.png";

const BOT_TOKEN = "7765338174:AAGIw8bMxVU62xeWYCUfsMhGMBCGW0Cklk8"; // <-- bu yerga tokenni qo'y
const CHAT_ID = "6563907367"; // <-- bu yerga chat_id ni qo'y

const ItemList = () => {
    const [form, setForm] = useState({
        from: '',
        to: '',
        description: '',
        name: '',
        phone: '',
        email: '',
        country: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const message = `
📦 Новый заказ:
Откуда: ${form.from}
Куда: ${form.to}
Описание: ${form.description}
Имя: ${form.name}
Телефон: ${form.phone}
Email: ${form.email}
Страна: ${form.country}
        `;

        try {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message
                })
            });

            setForm({
                from: '',
                to: '',
                description: '',
                name: '',
                phone: '',
                email: '',
                country: ''
            });

            alert("Сообщение отправлено успешно! "); // Success alert
        } catch (err) {
            console.error('Error sending Telegram message:', err);
            console.log("Произошла ошибка при отправке сообщения. "); // Error alert
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='ItemList flex flex-col sm:px-8 xs:px-5 px-5 py-3 md:mt-10'>
            <h5 className='text-[#0563AB] text-[18px] font-bold sm:text-2xl'>Тариф</h5>
            <div className='text-[12px]'>

                <div className='md:grid md:grid-cols-2 gap-4 justify-between items-center'>
                    <div className='py-5 w-[80%] font-bold text-[25px] sm:text-[40px] md:w-[80%] xl:text-[55px] xl:font-bold'>
                        <h1>Гибкие варианты ценообразования</h1>
                    </div>

                    <p className='text-[18px] sm:text-[18px] xl:text-[22px] xl:pl-[110px]'>Мы упрощаем логистическую доставку, делая ее более простой и понятной...</p>
                </div>

                <div className='pt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 pb-10'>
                    <div>
                        <div className='pt-4 pb-4 text-start text-[18px] font-medium sm:text-[18px] xl:text-[22px]'>
                            <p className='text-[18px] sm:text-2xl'>Рассчитайте стоимость доставки</p>
                        </div>

                        <form onSubmit={handleSubmit} className="grid text-[17px] pt-1 gap-2 sm:pt-4 sm:gap-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="from" value={form.from} onChange={handleChange} type="text" placeholder="Откуда" className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                                <input name="to" value={form.to} onChange={handleChange} type="text" placeholder="Куда" className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                            </div>

                            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Описание груза" className="rounded-xl border border-gray-300 px-4 py-2 h-36 resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"></textarea>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Ваше имя" className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                                <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Ваш телефон" className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="E-mail" className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                                <input name="country" value={form.country} onChange={handleChange} type="text" placeholder="Страна" className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                            </div>

                            <button type="submit" className="w-full bg-[#0563AB] py-2 text-white rounded-xl text-[16px] hover:bg-blue-700 transition">
                                {loading ? 'Отправка...' : 'Рассчитать'}
                            </button>
                        </form>
                    </div>

                    {/* Info cards */}
                    <div className='pt-5 grid grid-row-3 gap-10 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2'>
                        {[logo1, logo2, logo3, logo4].map((logo, idx) => (
                            <div key={idx} className='bg-[#F6F6F6] border rounded-[12px] p-4'>
                                <div className='flex items-center gap-4 py-5 w-[90%]'>
                                    <img src={logo} alt="" />
                                    <p className='font-bold text-[20px] md:text-[14px] xl:text-[20px] xl:w-[50%]'>{["Адресная доставка", "Собственный автопарк", "Оплата в один конец", "Доставка точно в срок"][idx]}</p>
                                </div>
                                <p className='text-[15px] xl:text-[17px]'>
                                    {["Доставка до адресата с указанием удобного времени", "Услуги по перевозке грузов различных габаритов", "Оплата только в одну сторону", "Гарантированная доставка в срок"][idx]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemList;
