import React from 'react'

const ContactText = () => {
    return (
        <div className='ItemList flex flex-col px-20 py-5 sm:px-8 xs:px-5 xs:py-5 md:mt-10'>
            <h5 className='text-[#0563AB] text-[18px] font-bold sm:text-2xl'>О компании</h5>
            <div className='text-[12px]  '>

                <div className='md:grid md:grid-cols-2 gap-4 justify-between items-center'>
                    <div className='py-5 w-[80%] font-bold text-[25px] sm:text-[40px] md:w-[80%] xl:text-[55px] xl:font-bold'>
                        <h1>Связаться с нами</h1>
                    </div>

                    <p className='text-[18px] sm:text-[18px] xl:text-[22px] xl:pl-[110px]'>We’re Here to Help. Whether You Have Questions or Need Assistance, Our Team is Ready to Provide Support and Ensure a Smooth Experience.</p>
                </div>
            </div>
        </div>

    )
}

export default ContactText
