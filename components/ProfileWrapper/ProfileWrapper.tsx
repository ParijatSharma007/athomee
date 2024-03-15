"use client";
import Container from "@/components/Container";
import React from 'react'



export interface profileProps{
  children:React.ReactNode;
}

function ProfileWrapper({children}:profileProps) {
  return (
   <div >
    <Container>
      <div className="flex items-center justify-between -mx-4">
        <div className="w-[395px] basis-[395px] px-4">
          ok
        </div>
        <div className="w-[calc(100vw-395px)] basis-[calc(100vw-395px)] px-4">
          {children}
        </div>
      </div>
    </Container>
   </div>
  )
}

export default ProfileWrapper