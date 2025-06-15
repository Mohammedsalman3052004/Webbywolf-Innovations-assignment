import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'
import Showcasecard from '../components/Showcase-card'

const showcasecard = [
    { image: "/images/showcase-card1.png", text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat." },
    { image: "/images/showcase-card2.png", text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis." },
    { image: "/images/showcase-card3.png", text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt." },
]

const Showcasecontent = () => {
    return (
        <div className="flex justify-end items-center relative bg-white overflow-hidden my-20">
            <div className="w-[1361px] h-[989px] relative bg-white/60 shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-neutral-300 overflow-hidden mr-0 flex justify-between items-center">
                <div className='flex flex-col justify-center items-center px-8 py-10'>
                    <div className='flex flex-col justify-center items-start gap-5'>
                        <h3 className="self-stretch justify-start text-blue-700 text-2xl font-semibold font-['Inter']">Lorem ipsum dolor sit</h3>
                        <div className="w-80 justify-start text-neutral-800 text-3xl font-bold font-['Roboto_Condensed'] uppercase">Lorem ipsum dolor sit amet</div>
                        <p className="self-stretch justify-start text-black text-lg font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.</p>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-5 mt-12.5 w-full'>
                        {showcasecard.map((card, index) => (
                            <Showcasecard key={index} image={card.image} text={card.text} />
                        ))}
                    </div>
                    <div className='flex justify-start items-center gap-4 mt-18 w-full'>
                        <Button text="Learn more" />
                        <div className='flex justify-center items-center gap-2'>
                            <Image src="/icons/phone.svg" alt="arrow" width={16} height={16} className="w-6 h-6 border-white" />
                            <p className="justify-center text-blue-900 text-base font-semibold font-['Inter']">123456789</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-[629px] h-[803px] flex justify-center items-center'>
                        <Image src="/images/bike-showcase.png" alt="bike showcase" width={629} height={803} className='object-cover w-[629px] h-[803px]' />
                    </div>
                </div>
                <div className="w-full h-5 bg-gradient-to-r from-blue-900 via-green-700 to-indigo-950 absolute bottom-0 left-0" />

            </div>
        </div>
    )
}

export default Showcasecontent
