import Image from 'next/image'
import React from 'react'

const Homectc = () => {
    return (
        <div className='flex justify-between items-center '>
            <div className='flex justify-center items-center flex-col ml-16'>
                <div className='flex flex-col gap-5'>
                    <div className="w-[528px] justify-start text-neutral-800 text-6xl font-bold font-['Roboto_Condensed'] leading-[70px]">Lorem ipsum dolor sit amet</div>
                    <div className="w-[646px] justify-start text-black text-lg font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse. </div>
                </div>
                <div className='flex gap-2'>
                    <input type="text" className="w-80 h-12 bg-white rounded-md border border-stone-300" />
                    <div className="h-12 px-6 py-2 bg-blue-800 rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                        <div className="justify-center text-white text-base font-bold font-['Inter']">Submit</div>
                        <div className="w-4 h-0 border-2 border-white"></div>
                    </div>
                </div>
                <div className='flex gap-3 mt-4 text-left'>
                    <div className="w-7 h-7 px-2 py-2.5 bg-blue-700 rounded-[50px] inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                        <div className="w-3 h-2 outline outline-2 outline-offset-[-1px] outline-white" />
                    </div>
                    <div className="justify-start text-black text-base font-medium font-['Inter'] leading-normal">No credit card required!</div>
                </div>
            </div>
            <div className="overflow-hidden  w-1/2 h-full relative flex justify-center items-center custom-clip">
                <Image src="/images/bike-image.png" alt="image" width={932} height={932} className='object-cover w-[932px] h-[932px] left-[-140px] top-[-19px]' />
            </div>
        </div>
    )
}

export default Homectc
