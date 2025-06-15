import Image from 'next/image'
import React from 'react'

const Showcasecard = ({image,text}: {image: string, text: string}) => {
    return (
        <div className=" h-36 flex justify-center items-center gap-8">
            <div className='w-36 h-36'>
                <Image src={image} alt="image" width={36} height={36} className='object-cover w-36 h-36' />
            </div>
            <div className='flex justify-center items-center text-lg font-normal font-[Inter] leading-normal w-93'>
                {text}
            </div>
        </div>
    )
}

export default Showcasecard
