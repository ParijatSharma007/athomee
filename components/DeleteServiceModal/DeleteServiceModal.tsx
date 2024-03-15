import assets from "@/json/assets";
import Image from "next/image";
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
import { ServiceDataTwo } from "@/typescript/interfaces";
import { useRef } from "react";
import { useMutation } from "react-query";
import { deleteService } from "@/api/functions/admin.api";

export default function DeleteServiceModal({
  invoice,
  refetch,
}: {
  invoice: ServiceDataTwo;
  refetch: any;
}) {
  const buttonRef = useRef<any>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef?.current?.click();
    }
  };
  // const [open, setOpen] = useState(false);
  const { mutate } = useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      handleClick();
      refetch();
    },
  });

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-red-500 border-red-100 bg-red-50 hover:border-primary"
          >
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl md:text-[16px] sm:text-[14px] sm:leading-[1.5] text-left">
              Delete this service?
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="px-10 pt-6 pb-10 sm:px-5 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <div className="flex flex-wrap  items-center">
                <div className="w-[78px] rounded-[12px] sm:w-full sm:basis-full sm:mb-5">
                  <Image
                    className="rounded-[12px] sm:mx-auto"
                    src={
                      invoice?.images && invoice?.images[0]
                        ? invoice?.images[0]
                        : assets.serviceInfoImg
                    }
                    width={78}
                    height={78}
                    alt=""
                  />
                </div>
                <div className="w-[calc(100%-78px)] pl-4 flex flex-wrap items-end justify-between sm:w-full sm:basis-full">
                  <div className="pr-2">
                    <p className="text-gray-500 text-[12px] font-satoshi_medium mb-1">
                      {invoice?.title}
                    </p>
                    <p className="text-gray-900 text-[16px] font-satoshi_medium mb-2">
                      {invoice?.description}
                      <span className="inline-block text-gray-400 align-bottom ml-2" >
                        {/* (3 packages) */}
                        ({invoice?.packages?.length}{" "}
                        {invoice?.packages?.length > 1 ? "packages" : "package"})
                      </span>
                    </p>
                    <div className="flex items-center">
                      <div className="w-[24px] h-[24px] rounded-full mr-2">
                        <Image
                          src={
                            invoice?.vendor_data?.profilePicture
                              ? invoice?.vendor_data?.profilePicture
                              : assets.vendorImage1
                          }
                          alt=""
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex justify-between w-full">
                        <p className="text-gray-900 text-[12px] font-satoshi_medium">
                          {invoice?.vendor_data?.firstName}{" "}
                          {invoice?.vendor_data?.lastName}
                        </p>

                        <p className="font-satoshi_medium sm:mt-2">
                          {invoice.packages_data?.map((item, index) => (
                            <p key={index}>
                              {index !== invoice?.packages_data?.length - 1
                                ? `$${item.rate},`
                                : `$${item.rate}`}
                            </p>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative px-10 w-full pt-6 pb-2 sm:px-5 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center sm:w-full sm:flex-wrap">
                <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                  <DialogClose asChild>
                    <Button
                      ref={buttonRef}
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                    >
                      Undo
                    </Button>
                  </DialogClose>
                </li>
                <li className="sm:w-full">
                  <Button
                    type="button"
                    onClick={() => mutate(invoice._id)}
                    className="rounded-[50px] px-[20px] py-[6px] transition-all bg-red-500 hover:bg-secondary hover:text-white sm:w-full"
                  >
                    Delete
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
