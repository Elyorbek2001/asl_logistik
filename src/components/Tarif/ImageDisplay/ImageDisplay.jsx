import React from 'react';
import tarif from "../../../assets/tarif/tariffon.png";

const ImageDisplay = () => {
    return (
        <div className='flex flex-col text-center rounded-xl sm:px-8 px-5 py-3'>
            <img
                src={tarif}
                alt="Tarif rasm"
                className=" rounded-xl h-[400px] w-full sm:h-[400px] md:h-[350px] lg:h-[450px] xl:h-[600px] object-cover mx-auto"
            />
        </div>
    );
};

export default ImageDisplay;
