/* eslint-disable react/jsx-key */
"use client"

import React, { useEffect, useState } from 'react'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface radioGroupList {
  radioList: any[];
  defaultValue?: string;
  bgColor?: string;
  onChange?: (e: string) => void;
  passingRateAndValue?: (k : { value: string, rate: number }) => void;
  // setRadioList : any
}

export default function CustomRadioGroup({radioList, passingRateAndValue}:radioGroupList) {
    const [realRadioList, setRealRadioList] = useState<any[] | []>([])
    const [needUpdate, setNeedUpdate] = useState<boolean>(true)

    useEffect(() => {
        if(radioList && needUpdate){
            setRealRadioList(radioList?.map((item) => {
                return{
                    ...item,
                    selected : false
                }
            }))
            setTimeout(() => {
                setNeedUpdate(false)
            }, 200)
        }
    }, [radioList])

    useEffect(() => {
        if(passingRateAndValue){
            console.log(tempo, "tempo")
            var tempo = realRadioList.find((i) =>{
                return i.selected
            })
            if(tempo){
                passingRateAndValue({value : tempo.value, rate : tempo.rate})
            }
        }
    }, [realRadioList])

    const handelChange=(e: string)=>{
        setRealRadioList((prev) => {
            return prev.map((item) => {
                if(e === item.value){
                    item.selected = !item.selected
                }else{
                    item.selected = false
                }
                return item
            })
        })
    }
    // console.log(realRadioList, "radioList")
  return (

      <RadioGroup onValueChange={handelChange}  className='flex item-center'>
        {
            realRadioList.map((item,index)=>(
                <div className={`w-1/3 flex items-center space-x-2 relative py-1.5 px-2 md:px-1 bg-[${item.bgColor || '#E8FBDA'}] rounded-3xl ${item.selected && `border border-solid border-black`} `} key={index}>
                    <RadioGroupItem value={item.value} id={`r${index+1}`} className='absolute left-0 top-0 w-full h-full appearance-none opacity-0'/>
                    <label htmlFor={`r${index+1}`} className='md:text-[12px]'>{item.label}</label>
                </div>
            ))
        }
           
            {/* <div className="flex items-center space-x-2 relative py-1.5 px-4 bg-[#E8FBDA] rounded-3xl">
                <RadioGroupItem value="comfortable" id="r2" className='absolute left-0 top-0 w-full h-full appearance-none opacity-0' />
                <label htmlFor="r2">60-Minute</label>
            </div>
            <div className="flex items-center space-x-2 relative py-1.5 px-4 bg-[#F5EFFD] rounded-3xl">
                <RadioGroupItem value="compact" id="r3" className='absolute left-0 top-0 w-full h-full appearance-none opacity-0' />
                <label htmlFor="r3">90-Minute</label>
            </div> */}
        </RadioGroup>
  )
}
