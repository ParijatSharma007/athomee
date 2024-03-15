import assets from "@/json/assets";
import Image from "next/image";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Reservation } from "@/typescript/interfaces";
import { useMutation } from "react-query";
import { deleteResvation } from "@/api/functions/admin.api";
import { useRef } from "react";

export default function DeleteReservationModal({
  invoice,
  refetch,
}: {
  invoice: Reservation;
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
    mutationFn: deleteResvation,
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
            // onClick={() => setOpen(true)}
            variant="outline"
            className="text-red-500 border-red-100 bg-red-50 hover:border-primary"
          >
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md !rounded-[12px]">
          <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
            <DialogTitle className="text-2xl md:text-[16px] sm:text-[14px] sm:leading-[1.5] text-left">
              Delete reservation
            </DialogTitle>
          </DialogHeader>
          <div className="md:basis-full md:flex md:flex-col">
            <div className="px-10 pt-6 pb-10 sm:px-5 border-solid border-b border-gray-200 max-h-[494px] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
              <div className="flex flex-wrap  items-center">
                <div className="w-[78px] rounded-[12px] sm:w-full sm:mb-4">
                  <Image
                    className="rounded-[12px] sm:mx-auto"
                    src={
                      invoice.service_data.images &&
                      invoice.service_data.images[0]
                        ? invoice.service_data.images[0]
                        : assets.serviceInfoImg
                    }
                    width={78}
                    height={78}
                    alt=""
                  />
                </div>
                <div className="w-[calc(100%-78px)] sm:w-full pl-4 sm:pl-0 flex flex-wrap items-end justify-between">
                  <div className="pr-2 w-full">
                    <p className="text-gray-500 text-[12px] font-satoshi_medium mb-1">
                      {invoice.service_data.title}
                    </p>
                    <p className="text-gray-900 w-full text-[16px] font-satoshi_medium mb-2 flex items-center">
                      <span className="inline-block mr-2 w-8/12">
                        {invoice.service_data.description}
                      </span>
                      <Badge className="py-[3px] px-3 bg-[#F7F4F1] rounded-[100px] text-[14px] font-satoshi_medium text-gray-900">
                        {invoice.package_title}
                      </Badge>
                    </p>
                    <div className="flex items-center">
                      <div className="w-[24px] h-[24px] rounded-full mr-2">
                        <Image
                          src={
                            invoice.client_data.profilePicture
                              ? invoice.client_data.profilePicture
                              : assets.vendorImage1
                          }
                          alt=""
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex justify-between w-full">
                        <p className="text-gray-900 text-[14px]">
                          {invoice.client_data.firstName}{" "}
                          {invoice.client_data.lastName}
                        </p>
                        <p className="font-satoshi_medium sm:mt-2">
                          ${invoice.package_price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative px-10 w-full sm:px-5 pt-6 pb-2 bg-white border-gray-100 border-t border-solid flex justify-end items-center">
              <ul className="flex items-center sm:w-full sm:flex-wrap">
                <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                  <DialogClose asChild>
                    {/* <DialogClose onClick={() => setOpen(false)} asChild> */}
                    <Button
                      ref={buttonRef}
                      type="button"
                      variant={"outline"}
                      className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white border-gray-200 sm:w-full"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </li>
                <li className="sm:w-full">
                  <Button
                    onClick={() => mutate(invoice._id)}
                    type="button"
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
