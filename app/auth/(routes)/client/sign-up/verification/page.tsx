/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CommonProgress from "@/components/CommonProgress/CommonProgress";
import SignSlideRight from "@/components/SignSlideRight/SignSlideRight";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import assets from "@/json/assets";
import Image from "next/image";
import Link from "next/link";
import React, {
  HtmlHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useVerifyUser } from "@/hooks/react-qurey/query-hooks/authQuery.hooks";
import ButtonLoader from "@/components/ButtonLoader/ButtonLoader";
import { setCookieClient } from "@/lib/storage.lib";
// import { getCookie, setCookieClient } from "../";

function verificationVendor() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token: any = searchParams.get("token");
  const fileInputRef = useRef<any>(null);
  const [docList, setDocList] = useState<any>([]);
  const [showFileError, setShowFileError] = useState<boolean>(false);
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);

  const { mutate: verifyUser, isLoading } = useVerifyUser();

  const fileUploadModalHandler = useCallback((data: any) => {
    // if (docList?.length < 2) {
    //   setIsFileUploadModalOpen(false);
    // } else {
    //   setIsFileUploadModalOpen(data);
    // }
    setIsFileUploadModalOpen(data);
    setShowFileError(false);
  }, []);
  const handleButtonClick = () => {
    // if (docList?.length == 2 || docList?.length > 2) {
    //   return false;
    // }
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  function formatFileSize(bytes: number) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  const getDocs = (file: any) => {
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      setShowFileError(true);
      setIsFileUploadModalOpen(false);
      // Optionally, clear the input field
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return false;
    }
    const modifiedArray = [...docList, { id: docList?.length + 1, doc: file }];
    setDocList(modifiedArray);
    setIsFileUploadModalOpen(false);
  };
  const deleteFileHandler = (_id: any) => {
    const modifiedArray = docList?.filter((_i: any) => _i?.id != _id);
    setDocList(modifiedArray);
  };

  const verifyUserHandler = () => {
    const formData: FormData = new FormData();
    formData.append("token", `${!!token ? token.replace(/ /g, "+") : ""}`);
    for (let i = 0; i < docList.length; i++) {
      const file = docList[i];
      formData.append(`verification_docs`, file?.doc);
    }
    verifyUser(formData, {
      onSuccess: (response: any) => {
        const {   role} = response?.data?.data ?? {};
        console.log("🚀 ~ verifyUserHandler ~ rolasdasde:", role,response,response?.data?.data)
        
        setCookieClient("atHomee_token", response?.data?.token ?? "");
        // router.push("/client/listing");
          if (role == "client") {
            router.push("/client/listing");
          } else if (role == "super_admin") {
            router.push("/admin/dashboard");
          } else if (role == "individual" || role == "company") {
            router.push("/dashboard");
          }
      },
    });
  };
  console.log("docList", docList);

  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 pr-20 pl-20 pt-8 xl:px-12 lg:px-4 md:w-full md:px-0 md:pt-4">
        <div className="h-[100%]">
          <div className="md:flex md:justify-center md:pb-4 md:border-b md:border-gray-200">
            <Link href="/" className="inline-block">
              <Image src={assets.logo} width={124} height={24} alt="" />
            </Link>
          </div>
          <div className="py-9 flex items-center min-h-[calc(100vh-80px)]  md:px-4 md:py-6">
            <div className="w-[100%] max-h-[calc(100vh-130px)] custom-scrollbar overflow-y-auto overflow-x-hidden">
              <div>
                <h2 className="text-3xl	mb-2 lg:text-[30px] md:text-[24px]">
                  Verification
                </h2>
                <p>
                  To activate the account, please upload a photo of your ID and
                  Chamber of Commerce. The photo must be clear and legible.
                </p>
              </div>

              {((docList?.length != 0 && docList?.length < 2) ||
                showFileError) && (
                <div className="border border-[--redFECACA] border-1 rounded-[12px] text-base font-satoshi_medium text-[var(--redEF4444)] bg-[var(--redFEF2F2)] flex py-5 px-6 mt-8 md:px-4 md:py-4">
                  <i className="self-center mb-[2px] mr-[17px] md:mr-[12px]">
                    <Image
                      src={assets?.account_tooltip}
                      width={17}
                      height={17}
                      alt=""
                    />
                  </i>
                  {showFileError
                    ? "Maximum file size 10 MB."
                    : docList?.length != 0 && docList?.length < 2
                    ? "Select more than one file."
                    : ""}
                </div>
              )}

              <div className="mt-8 mb-6">
                <Dialog
                  open={
                    // docList?.length < 2
                    //   ? false
                    //   :
                    isFileUploadModalOpen
                  }
                  onOpenChange={(open) => fileUploadModalHandler(open)}
                >
                  <DialogTrigger className="w-[100%]">
                    <div className="min-h-[240px] md:min-h-[160px] border border-dashed border-[--textgray] p-6 flex flex-col rounded-[12px] items-center justify-center cursor-pointer">
                      <i className="mb-3">
                        <Image
                          src={assets?.dropdrag}
                          width={33}
                          height={30}
                          alt=""
                        />
                      </i>
                      <span className="text-base text-[var(--primary)] font-satoshi_medium mb-1">
                        Drag & drop or{" "}
                        <span className="text-[var(--secondary)]">
                          click to upload
                        </span>
                      </span>
                      <p className="text-sm text-[var(--textgray)]">
                        Maximum file size 10 MB.
                      </p>
                    </div>
                  </DialogTrigger>
                  {/* <DialogClose asChild> */}
                  <DialogContent className="h-auto min-w-[inherit] max-w-[345px] border_rad_ten no_cross_modal">
                    <ul className="ul_inner">
                      <li
                        className="border-b border-[--greyb0b0b2]"
                        onClick={handleButtonClick}
                      >
                        <div className="relative">
                          {/* <Input
                              type="file"
                              ref={fileInputRef}
                              className="absolute w-[100%] h-[100%] opacity-0"
                              onChange={(event: any) => {
                                console.log(
                                  "event.target.files",
                                  event.target.files
                                );
                                // getDocs(event.target.files[0]);
                              }}
                            /> */}
                          <div className="flex py-3 px-6 pl-4 cursor-pointer">
                            <div className="w-[calc(100%-27px)] pr-2 text-[17px] tracking-[-0.5px] text-black">
                              Photo Library
                            </div>
                            <div className="w-[27px]">
                              <Image
                                src={assets?.library_img1}
                                width={27}
                                height={22}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </li>

                      <li onClick={handleButtonClick}>
                        <div className="relative">
                          {/* <Input
                              type="file"
                              className="absolute w-[100%] h-[100%] opacity-0"
                            /> */}
                          <div className="flex py-3 px-6 pl-4 cursor-pointer">
                            <div className="w-[calc(100%-27px)] pr-2 text-[17px] tracking-[-0.5px] text-black">
                              Camera
                            </div>
                            <div className="w-[27px]">
                              <Image
                                src={assets?.library_img2}
                                width={27}
                                height={22}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </DialogContent>
                  {/* </DialogClose> */}
                </Dialog>
              </div>

              <div>
                {docList?.length > 0 && (
                  <div className="relative">
                    {docList?.length > 0 &&
                      docList?.map((_file: any, index: number) => (
                        <>
                        <div className="relative bg-[var(--border-primary)] border border-solid border-[var(--greyF4F4F5)] rounded-[12px] p-4 pr-[60px] mb-2">
                          <Button
                            className="bg-[transparent] p-0 h-auto hover:bg-transparent absolute right-[10px] top-[50%] translate-y-[-50%]"
                            key={_file?.id}
                            onClick={() => deleteFileHandler(_file?.id)}
                          >
                            <Image
                              src={assets?.cross_icons}
                              width={16}
                              height={12}
                              alt=""
                            />
                          </Button>
                          <div className="flex flex-wrap">
                            <i className="w-[48px] h-[48px] border border-solid border-[var(--cmn-grey)] rounded-[12px] bg-[var(--secondary-foreground)] flex items-center justify-center">
                              <Image
                                src={assets?.pin_upload}
                                width={18}
                                height={19}
                                alt=""
                              />
                            </i>
                            <div className="w-[calc(100%-48px)] pl-4 text-[var(--primary)]">
                              <h5>{_file?.doc?.name}</h5>
                              <span className="text-sm text-[var(--textgray)]">
                                {/* 6 MB */}
                                {formatFileSize(_file?.doc?.size)}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <CommonProgress
                              valueProgress={(docList?.length ) * 100}
                              customClass="black_white_progress"
                            />
                          </div>
                        </div>
                        </>
                      ))}
                  </div>
                )}
              </div>

              {!isLoading ? (
                <Button
                  className="w-[100%] text-base py-3 h-auto mt-8 md:mt-2"
                  variant="default"
                  onClick={verifyUserHandler}
                  disabled={!token || docList?.length < 2}
                >
                  Send
                </Button>
              ) : (
                <Button
                  className="w-[100%] text-base py-3 h-auto mt-8 md:mt-2"
                  variant="default"
                >
                  <ButtonLoader />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-4 md:hidden">
        <SignSlideRight bannerImage={assets.banner_image_sign}>
          <h2 className="text-4xl leading-[1.4] text-[var(--black-light)] xl:text-[32px] lg:text-[24px]">
            <span className="text-[var(--secondary)] font-satoshi_bold">
              Casacall
            </span>{" "}
            combines a multitude of professionals near you with <br />{" "}
            <span className="relative pb-3">
              instant booking{" "}
              <span
                className="absolute w-[100%] left-0 right-0 bottom-0 h-2"
                style={{
                  backgroundImage: `url(${assets.lineBanner2})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                }}
              ></span>
            </span>{" "}
            and{" "}
            <span className="relative pb-3">
              flexible settings.{" "}
              <span
                className="absolute w-[100%] left-0 right-0 bottom-0 h-2"
                style={{
                  backgroundImage: `url(${assets.lineBanner2})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                }}
              ></span>
            </span>
          </h2>
        </SignSlideRight>
      </div>
      <Input
        type="file"
        ref={fileInputRef}
        className="absolute w-[1%] h-[1%] opacity-0"
        onChange={(event: any) => {
          getDocs(event.target.files[0]);
        }}
      />
    </div>
  );
}

export default verificationVendor;
