"use client";
import React, { useEffect, useRef, useState } from "react";
import { CameraIcon, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { useMutation, useQueryClient } from "react-query";
import { updateClientProfileDetails } from "@/hooks/react-qurey/query-hooks/ClientProfile.hook";
import { Input } from "../ui/input";
import Image from "next/image";
import assets from "@/json/assets";
import { Typography } from "@mui/material";
export default function EditAvatarModal({
  profileimage,
}: {
  profileimage?: any;
}) {
  const queryClient = useQueryClient();
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState<string | File>(assets.noprofileimage);
  useEffect(() => {
    if (profileimage) {
      setSelectedImage(profileimage);
    }
  }, [profileimage]);

  const [error, setError] = useState("");
  const { mutate: updateImage, isLoading: updateloading } = useMutation(
    updateClientProfileDetails,
    {
      onMutate: () => {
        // setIsLoadingUpdate(true);
        setError("");
      },
      onSuccess: (data) => {
        console.log("data", data);
        setIsLoadingUpdate(false);
        queryClient.invalidateQueries(["clientprofile"]);
        handleClick();
      },
      onError: () => {
        console.log("Error");
        setIsLoadingUpdate(false);
        setError("Error updating profile. Please try again.");
      },
    }
  );
  const { mutate: deleteImage, isLoading: deleteloading } = useMutation(
    updateClientProfileDetails,
    {
      onMutate: () => {
        // setIsLoadingUpdate(true);
        setError("");
      },
      onSuccess: (data) => {
        console.log("data", data);
        setIsLoadingUpdate(false);
        queryClient.invalidateQueries(["clientprofile"]);
        handleClick();
      },
      onError: () => {
        console.log("Error");
        setIsLoadingUpdate(false);
        setError("Error updating profile. Please try again.");
      },
    }
  );

  const handleDeleteImage = async () => {
    try {
      setIsLoadingDelete(true);
      await deleteImage({
        body: { remove_profile_image: true },
      });
    } catch (error) {
      console.error("Error deleting profile image", error);
      setIsLoadingDelete(false);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  // useEffect(() => {
  //   setSelectedImage(profileimage);
  // }, [profileimage]);

  const buttonRef = useRef<any>(null);
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
      // setSelectedImage(null);
    }
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setError("");
  };

  console.log("selectedImage", selectedImage);
  const handleUpdateImage = async () => {
    if (!selectedImage) {
      setError("Please select an image before updating.");
      return;
    }
    if (selectedImage) {
      setIsLoadingUpdate(true);
      const formData = new FormData();
      formData.append("profile_image", selectedImage);
      try {
        await updateImage({
          body: formData,
        });
      } catch (error) {
        console.error("Error updating profile image", error);
      } finally {
        setIsLoadingUpdate(false);
      }
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // setSelectedImage(null);
    setError("");
  };
  let imageSrc = selectedImage;
  if (selectedImage && typeof selectedImage === "object") {
    imageSrc = URL.createObjectURL(selectedImage);
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            ref={buttonRef}
            onClick={handleOpenModal}
            className="absolute bottom-[-12px] left-[50%] translate-x-[-50%] bg-white transition-all w-auto text-[16px] font-satoshi_medium text-gray-900 border-transparent shadow-[0px_1px_12px_0px_rgba(16,24,40,0.15)] rounded-[100px] border-solid border px-4 py-2 flex item-center h-auto  hover:bg-secondary hover:text-white"
          >
            <i className="mr-2">
              <CameraIcon />
            </i>
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-[24px] md:text-[16px] font-satoshi_medium  sm:text-[14px] sm:leading-[1.5] md:!text-center">
              Edit your avatar
            </DialogTitle>
            <div className="p-3 flex justify-between w-full align-center">
              <div className="relative h-[48px] w-auto mr-2 border rounded-lg">
                <div className="flex p-3">
                  <p className="mr-3">Upload a file</p> <CameraIcon />
                </div>
                <Input
                  className="absolute top-0  left-0 h-full w-full opacity-0"
                  type="file"
                  onChange={handleImageChange}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              {selectedImage && (
                <Image
                  src={
                    typeof selectedImage === "object"
                      ? URL.createObjectURL(selectedImage)
                      : selectedImage
                  }
                  alt="Profile Image"
                  width={150}
                  height={150}
                  className="object-cover rounded-md"
                />
              )}
            </div>
          </DialogHeader>
          <div className="relative pt-6 pb-[40px] md:pb-5 md:basis-full md:flex md:flex-col">
            <div className="relative flex flex-col px-6 h-full w-full overflow-y-auto md:basis-full md:flex-wrap md:justify-end">
              <Button
                type="button"
                variant={"outline"}
                onClick={handleUpdateImage}
                disabled={updateloading}
                className="rounded-[50px] w-full px-[16px] py-[6px] border-gray-200 mb-4 "
              >
                {updateloading ? "Updating..." : "Update"}
              </Button>
              <Button
                type="button"
                variant={"ghost"}
                onClick={() => {
                  handleDeleteImage();
                }}
                className="rounded-[50px] w-full px-[16px] py-[6px] bg-red-50 border border-red-100 text-red-600"
                disabled={deleteloading}
              >
                {deleteloading ? "Deleting..." : "Delete"}
              </Button>
              {/* <DialogClose asChild>
                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={() => {
                    handleDeleteImage();
                  }}
                  className="rounded-[50px] w-full px-[16px] py-[6px] bg-red-50 border border-red-100 text-red-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Deleting..." : "Delete"}
                </Button>
              </DialogClose> */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
