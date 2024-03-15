/* eslint-disable react/no-unescaped-entities */
import CommonInput from '@/components/CommonInput/CommonInput';
import Container from '@/components/Container';
import SignHeader from '@/components/SignHeader/SignHeader';
import { Button } from '@/components/ui/CustomButtonPrimary/CustomButtonPrimary';
import assets from '@/json/assets';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

function forgotPassword() {
    return (
        <>
            <SignHeader/>
            <div className='min-h-[calc(100vh-80px)] py-9 flex items-center'>
                <Container>
                    <div className='max-w-[560px] mx-auto'>
                        <div className='text-center w-[100%]'>
                            <i className='mx-auto table mb-6'><Image src={assets?.confirm_icon} width={56} height={56} alt=''/></i>
                            <h2 className='text-3xl	mb-4'>Password reset</h2>
                            <p className='text-[var(--grey70707B)] font-satoshi_regular'>Your password has been successfully reset. Click below to log in magically.</p>
                            <Button className='w-[100%] text-base py-3 h-auto mt-10' variant="default">Back to login</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default forgotPassword;