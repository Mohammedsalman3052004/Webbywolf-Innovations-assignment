import Image from 'next/image'
import React from 'react'

const Button = ({text}: {text: string}) => {
    return (
        <div className="h-9 px-6 py-2 bg-blue-800 rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] inline-flex justify-between items-center gap-2.5 overflow-hidden">
            <div className="justify-center text-white text-base font-bold font-['Inter']">{text}</div>
            <Image src="/icons/right-arrow.svg" alt="arrow" width={16} height={16} className="w-4 border-white" />
        </div>
    )
}

export default Button;
