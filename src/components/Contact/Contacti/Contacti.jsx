import React from 'react'
import contact from "../../../assets/contact1.jpg"

const Contacti = () => {
    return (
        <div className='flex flex-col text-center rounded-xl sm:px-8 px-5 py-3'>
            <img
                src={contact}
                alt="Contact rasm"
                className=" rounded-xl h-[400px] w-full sm:h-[400px] md:h-[350px] lg:h-[450px] xl:h-[600px] object-cover mx-auto"
            />
        </div>
    )
}

export default Contacti
