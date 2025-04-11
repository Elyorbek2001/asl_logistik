import React from 'react'
import tarif from "../../../assets/tarif.png"

const ImageDisplay = () => {
    return (
        <div className='flex flex-col text-center h-[150px] px-10 py-2 sm:px-8 xs:px-5 xs:py-5 sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[580px]'>
            <img src={tarif} alt="" />
        </div>
    )
}

export default ImageDisplay
