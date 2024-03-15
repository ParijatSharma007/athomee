import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import CommonInput from "../CommonInput/CommonInput";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import * as z from "zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
  address: z.string().nonempty({
    message: "Address cannot be empty",
  }),
});
interface FormInput {
  address: string;
}

export default function ChangeAddressModal({
  address,
  id,
  updateReserv,
}: {
  address?: string | undefined;
  updateReserv: any;
  id: string;
}) {
  console.log("init", address);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInput>();

  useEffect(() => {
    if (address) {
      setValue("address", address || "");
    }
  }, [address, setValue]);

  const [isLoading, setIsLoading] = useState(false);
  const handleSave = async (formData: FormInput) => {
    try {
      setIsLoading(true);
      FormSchema.parse(formData);
      console.log("Address updated:", formData.address);
      const res = await updateReserv({ id, address: formData.address });
      if (res) {
        console.log("Address updated:", formData.address);
        handleClick();
      }
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        console.error("Validation error:", validationError.errors);
      } else {
        console.error("Unexpected error:", validationError);
      }
    } finally {
      setIsLoading(false);
    }
  };
  const onSubmit = handleSubmit(handleSave);

  const buttonRef = useRef<any>(null);
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
            className="text-[14px] rounded-[100px]  border-none hover:bg-primary hover:text-white"
          >
            Change
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <form onSubmit={onSubmit}>
            <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
              <DialogTitle className="text-2xl md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
                Change address
              </DialogTitle>
            </DialogHeader>
            <div className="md:basis-full md:flex md:flex-col">
              <div className="px-10 pb-10 pt-6 sm:px-5 border-solid border-b border-gray-200  overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
                <div>
                  <CommonInput
                    defaultValue={address}
                    placeholderLabel="Address"
                    {...register("address")}
                    onChange={(e) => setValue("address", e.target.value)}
                  />
                </div>
                {errors.address && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="relative px-10 w-full sm:px-5 pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
                <ul className="flex items-center sm:w-full sm:flex-wrap">
                  <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant={"outline"}
                        ref={buttonRef}
                        className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                  </li>
                  <li className="sm:w-full">
                    <Button
                      type="submit"
                      className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white sm:w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Saving..." : "Save"}
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild></DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
