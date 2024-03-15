"use client"
/* eslint-disable react/no-unescaped-entities */
import CommonInput from '@/components/CommonInput/CommonInput';
import Container from '@/components/Container';
import SignHeader from '@/components/SignHeader/SignHeader';
import { Button } from '@/components/ui/CustomButtonPrimary/CustomButtonPrimary';
import assets from '@/json/assets';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { setCookie } from 'nookies';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup"

function forgotPassword() {
    const {token} = useRouter().query
    const schema = yup.object({
        password : yup.string().required("*Password is required").min(8, "length")
    })
    const {setValue, handleSubmit, formState : {errors}} = useForm({
        defaultValues : {
            password : ""
        },
        resolver : yupResolver(schema)
    })

    const handleChange = ({target} : React.ChangeEvent<HTMLInputElement>) => {
        setValue("password", target.value)
    }

    const onSubmit = ({password} : {password : string}) => {
        console.log(password, "password");
    }
    return (
        <>
            <SignHeader/>
            <div className='min-h-[calc(100vh-80px)] py-9 flex items-center'>
                <Container>
                    <div className='max-w-[560px] mx-auto'>
                        <div className='mb-8'>
                            <h2 className='text-3xl	mb-2'>Reset password</h2>
                            <p>Please, create your new password</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-wrap -mx-[16px] -my-[16px]'>
                                <div className='w-full px-[16px] py-[16px]'>
                                    <CommonInput passwordvalue placeholderLabel="Password" type='password' name='password' onChange={handleChange}/>
                                    <p className='text-xs text-[var(--secondary)] mt-2' 
                                    style={{color : errors?.password?.message === "length" ? "red" : ""}}>Must be at least 8 characters.</p>
                                </div>
                                <div className='w-full px-[16px] py-[16px]'>
                                    <Button className='w-[100%] text-base py-3 h-auto' variant="default">Continue</Button>
                                </div>

                                <div className='w-full px-[16px] py-[16px] text-center'>
                                    <Link className='text-sm hover:text-[var(--secondary)] flex items-center justify-center' href="/"><i className='mr-3'><Image src={assets?.left_arrow} width={15} height={15} alt=''/></i>Back to login</Link>
                                </div>

                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default forgotPassword;