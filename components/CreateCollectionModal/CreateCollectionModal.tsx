"use client";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import CommonInput from "../CommonInput/CommonInput";
import * as yup from "yup";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { useCreatesaveCollection } from "@/hooks/react-qurey/query-hooks/ClientSaved.hook";
import { useQueryClient } from "react-query";
import { CLIENT_SAVED_LISTS } from "@/hooks/react-qurey/query-keys/ClientSaved.keys";

// Define Yup schema for validation
const schema = yup.object().shape({
  name: yup
    .string()
    .trim("only Space Not Allowed in Collection Name")
    .required("Name is required")
    .strict(true)
    .min(1, "Collection Name cannot be empty"),
});

type FormData = {
  name: string;
};
export default function CreateCollectionModal() {
  const queryClient = useQueryClient();
  const buttonRef = useRef<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { mutate: createcollection, isLoading } = useCreatesaveCollection();

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (errors.name) {
      setErrorMessage(errors.name.message as string);
    } else {
      setErrorMessage("");
    }
  }, [errors.name]);
  const getUserGivenInput = (e: any) => {
    const name = e.target.name ?? "";
    const value = e.target.value ?? "";
    setValue(name, value);
    setErrorMessage("");
  };
  const onSubmit = async (data: FormData) => {
    console.log("CollectionName", data);
    const payload = {
      name: data?.name,
    };
    createcollection(payload, {
      onSuccess: (res) => {
        // console.log("Success:", res);
        queryClient.invalidateQueries([CLIENT_SAVED_LISTS]);
        handleClick();
      },
      onError: (error) => {
        console.log("Error:", error);
      },
    });
  };

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className=" hover:text-[grey] hover:bg-[white] sm:p-0 sm:min-w-[145px] sm:min-h-[36px] sm:capitalize sm:h-auto sm:border-gray-200"
          >
            <PluseBtnIcon className="sm:w-4 sm:h-auto" />
            <p className="ml-2 hover:text-[grey] sm:text-gray-900 sm:font-satoshi_regular">
              <span className="sm:hidden">Create</span> new collection
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
              Create a collection
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:basis-full md:flex md:flex-col">
              <div className="px-10 pb-10 md:px-4 pt-6 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin max-h-[334px] md:max-h-[inherit] md:basis-full">
                <div>
                  <CommonInput
                    placeholderLabel="Name"
                    onChange={getUserGivenInput}
                    name="name"
                  />
                </div>
                {errorMessage && (
                  <div style={{ color: "red" }} className="error">
                    {errorMessage}
                  </div>
                )}
              </div>
              <div className="relative px-10 md:px-4 md:pt-4 w-full pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
                <ul className="flex items-center md:w-full">
                  <li className="mr-4 md:hidden">
                    <DialogClose asChild>
                      <Button
                        type="button"
                        ref={buttonRef}
                        variant={"outline"}
                        className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                  </li>
                  <li className=" md:w-full">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white md:w-full"
                    >
                      {isLoading ? "Saving.." : "Save"}
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </form>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
