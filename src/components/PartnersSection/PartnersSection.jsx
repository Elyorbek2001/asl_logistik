import React from 'react'
import img1 from "../../assets/p.img1.png";
import img2 from "../../assets/p.img2.png";
import img3 from "../../assets/p.img3.png";
import img4 from "../../assets/p.img4.png";

const images = [img1, img2, img3, img4];

const PartnersSection = () => {
    return (
        <div className='bg-[#EFF8FF] flex flex-col text-center h-[300px] sm:px-8 px-5 py-3 md:mt-24 sm:h-[350px] md:h-[400px] lg:h-[500px] '>
            <p className='py-10 font-bold text-[25px] sm:text-[40px] xl:text-[55px]'>Наши партнеры</p>

            <div className="scroll-wrapper w-full ">
                <div className="scroll-track gap-8">
                    {/* Repeat the logos twice for seamless loop */}
                    {[...images, ...images].map((img, idx) => (
                        <div
                            key={idx}
                            className="bg-white  flex items-center justify-center rounded-lg mx-5 shrink-0 w-[130px] h-[100px] sm:w-[150px] sm:h-[100px]  md:w-[200px] md:h-[150px] lg:w-[250px] lg:h-[200px] relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:z-10"
                        >
                            <img src={img} alt={`partner-${idx}`} className="rounded-md max-h-[80%] max-w-[80%]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PartnersSection
