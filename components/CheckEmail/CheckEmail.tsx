"use client"
/* esl
int-disable react/no-unescaped-entities */
// import CommonInput from '@/components/CommonInput/CommonInput';
import Container from '@/components/Container';
import SignHeader from '@/components/SignHeader/SignHeader';
import { Button } from '@/components/ui/CustomButtonPrimary/CustomButtonPrimary';
import assets from '@/json/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';

function CheckEmail({email} : {email : string}) {
    const router = useRouter()
    return (
        <>
            <SignHeader/>
            <div className='min-h-[calc(100vh-80px)] py-9 flex items-center'>
                <Container>
                    <div className='max-w-[560px] mx-auto'>
                        <div className='text-center w-[100%]'>
                            <i className='mx-auto table mb-6'><Image src={assets?.verify_icon} width={56} height={56} alt=''/></i>
                            <h2 className='text-3xl	mb-4'>Check your email</h2>
                            <p className='text-[var(--grey70707B)] font-satoshi_regular'>We sent a reset link to <Link className='text-[var(--foreground)] hover:text-[var(--secondary)]' href={`mailto:${`amelia.golden@gmail.com`}`}>{email}</Link></p>
                            <Button className='w-[100%] text-base py-3 h-auto mt-10' variant="default" onClick={() => {
                                router.push("/auth/client/login")
                            }}>Back to login</Button>
                            <p className='mt-10 text-sm text-[var(--grey31)]'>Didn't receive the email? <button className='text-[var(--foreground)] hover:text-[var(--secondary)] ml-2' onClick={() => {}}>Resend</button></p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default CheckEmail;