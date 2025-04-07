import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
    return (
        <div className="faq flex flex-col items-center justify-center px-20 py-5 sm:px-8 xs:px-5 xs:py-5 md:mt-24">
            <div className='text-[12px]'>
                <h5 className='text-[#0563AB] text-[18px] font-bold sm:text-2xl'>ЧЗВ</h5>
                <div className=''>
                    <div className='md:grid md:grid-cols-2 gap-4 justify-between items-center'>
                        <div className='py-5 w-[90%] font-bold text-[25px] sm:text-[40px] md:w-[120%] xl:text-[55px] xl:font-bold'>
                            <h1>Часто задаваемые вопросы</h1>
                        </div>

                        <p className='text-[18px] sm:text-[18px] xl:text-[22px] xl:pl-[110px]'>
                            Изучите наш подробный раздел часто задаваемых вопросов, который ответит на все ваши вопросы и поможет вам спланировать приятное и незабываемое путешествие.
                        </p>
                    </div>
                </div>

                {/* FAQ Accordion Section */}
                <div className="faq-accordion w-[100%] mt-10 md:w-[80%] lg:w-[60%] lg:text-[40px] xl:w-[70%] ">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography className="lg:text-[20px]" style={{ fontSize: '20px' }}>
                                Какие услуги предоставляет ваша компания?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="lg:text-[17px]" style={{ fontSize: '17px' }}>
                                Мы предоставляем полный спектр логистических услуг, включая международные и внутренние перевозки, складирование, таможенное оформление и консолидацию грузов.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                            <Typography className="lg:text-[20px]" style={{ fontSize: '20px' }}>Как вы гарантируете сохранность грузов?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="lg:text-[17px]" style={{ fontSize: '17px' }}>
                                Мы сотрудничаем только с проверенными перевозчиками, используем современные системы отслеживания и соблюдаем все меры безопасности на каждом этапе перевозки
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                            <Typography className="lg:text-[20px]" style={{ fontSize: '20px' }}>С какими регионами вы работаете?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="lg:text-[17px]" style={{ fontSize: '17px' }}>
                                Наша компания активно работает с Китаем, странами СНГ и Европой, обеспечивая эффективные решения для доставки грузов в кратчайшие сроки.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                            <Typography className="lg:text-[20px]" style={{ fontSize: '20px' }}>Каковы сроки доставки грузов?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="lg:text-[17px]" style={{ fontSize: '17px' }}>
                                Сроки зависят от типа груза, маршрута и выбранного вида транспорта. Мы всегда стараемся предложить оптимальное время доставки и информируем клиента на каждом этапе.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;
