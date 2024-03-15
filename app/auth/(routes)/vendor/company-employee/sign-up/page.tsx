/* eslint-disable react/no-unescaped-entities */
"use client";
import CheckboxSub from "@/components/CheckboxSub/CheckboxSub";
import CommonInput from "@/components/CommonInput/CommonInput";
import Container from "@/components/Container";
import SignHeader from "@/components/SignHeader/SignHeader";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import Link from "next/link";

function VendorEmployeeSign() {
  return (
    <div className="">
      <SignHeader />
      <div className="h-[calc(100vh-100px)] md:h-full md:min-h-[100vh] flex items-center justify-center py-6 md:py-4">
        <Container>
          <div className="max-w-[560px] mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl	mb-3">
                Join your Health Life team on Casacall!
              </h2>
              <p className="text-base	text-[var(--grey70707B)]">
                You're joining as{" "}
                <Link
                  className="text-[var(--primary)] hover:text-[var(--secondary)]"
                  href={`mailto:juliabrown@gmail.com`}
                >
                  
                  juliabrown@gmail.com
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap -mx-2 -mb-3">
              <div className="w-1/2 px-2 mb-3">
                <CommonInput placeholderLabel="First name" />
              </div>
              <div className="w-1/2 px-2 mb-3">
                <CommonInput placeholderLabel="Last name" />
              </div>
              <div className="w-full px-2 mb-3">
                <CommonInput placeholderLabel="Email" />
              </div>
              <div className="w-full px-2 mb-3">
                <CommonInput passwordvalue placeholderLabel="Password" />
                <p className="text-xs text-[var(--textgray)] mt-[6px]">
                  Min. 8 characters. Combine numbers, upper and lowercase
                  letters.
                </p>
              </div>
              <div className="w-full px-2 my-5">
                <CheckboxSub checked={false}>
                  <span className="text-sm text-[var(--textgray)] font-satoshi_medium">
                    <span className="text-[var(--primary)]">
                      I agree to the
                    </span>{" "}
                    Terms of Service{" "}
                    <span className="text-[var(--primary)]">and</span> Privacy
                    Policy.
                  </span>
                </CheckboxSub>
              </div>
              <div className="w-full px-2 mt-3">
                <Button
                  className="w-[100%] text-base py-3 h-auto"
                  variant="default"
                >
                  Create my Casacall account
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default VendorEmployeeSign;
