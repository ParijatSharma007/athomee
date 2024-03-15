"use client";

import Container from "@/components/Container";
import assets from "@/json/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignHeader() {
  const router = useRouter();
  return (
    <div className="py-[25px] md:overflow-hidden md:py-4">
      <Container>
        <div className="md:flex md:justify-center md:pb-4 md:border-b md:border-gray-200 md:mx-[-16px]">
          <Link href="/" className="inline-block">
            <Image src={assets.logo} width={124} height={24} alt="" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default SignHeader;
