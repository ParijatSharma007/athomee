import TipsListIcon from '@/json/icons/TipsListIcon';
import React from 'react'

interface tipListItems{
    title: string;
    subText: string;
    bgColor: string;
}

export default function CommonTipsListCart({title, subText,bgColor}:tipListItems) {
  return (
    <div>
      <div className={`relative pt-8 pb-6 px-6 rounded-[12px] bg-[${bgColor}]`}>
        <i className='w-[32px] h-[32px] rounded-full bg-gray-900 flex items-center justify-center absolute top-[-16px] left-[24px]'><TipsListIcon/></i>
        <h5 className='text-[16px] text-gray-900 font-satoshi_medium mb-2'>{title}</h5>
        <p className='text-[14px] text-black font-satoshi_regular'>{subText}</p>
      </div>
    </div>
  )
}
