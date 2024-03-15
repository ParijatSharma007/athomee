import DelectPopUpIcon from "@/json/icons/DelectPopUpIcon";
import InfoIcon from "@/json/icons/InfoIcon";
import NotificationToolTipIcon from "@/json/icons/NotificationToolTipIcon";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface modalProps {
  open?: boolean;
  modalCloseCallback: (data: boolean) => void;
  modalCloseInteractOutsideCallback?: (event: any) => void;
}

export default function CalendarModal({
  open,
  modalCloseCallback,
  modalCloseInteractOutsideCallback,
}: modalProps) {
  return (
    <Dialog open={open} onOpenChange={modalCloseCallback}>
      <DialogContent
        className="sm:max-w-md !rounded-[12px] !max-w-[816px] !w-full"
        onInteractOutside={modalCloseInteractOutsideCallback}
      >
        <DialogHeader className="border-gray-200 border-solid border-b px-10 py-4">
          <DialogTitle className="text-2xl text-left md:text-[16px] sm:text-[14px] sm:leading-[1.5] sm:text-center">
            Edit availability
          </DialogTitle>
        </DialogHeader>
        <div className="md:basis-full md:flex md:flex-col">
          <div className="py-6 px-10 md:py-4 sm:px-5 border-solid border-b border-gray-200 max-h-[400px] sm:max-h-[calc(100vh-270px)] overflow-y-auto scrollbar scrollbar-thumb-[#F4F4F5] scrollbar-track-[#fff] scrollbar-thin md:basis-full">
            <div>
              <div className="mb-6">
                <Badge className="rounded-[12px] p-[16px] flex items-center border-yellow-200 bg-[#FFF8EB] text-[#F59F00] font_satoshi_medium tedxt-[16px]">
                  <i className="w-[12px]">
                    <InfoIcon IconColor="#F59F00" />
                  </i>
                  <p className="w-[calc(100%-12px] pl-4">
                    There are reservations booked for this day. Your changes
                    might impact clients&#39; reservations.
                  </p>
                </Badge>
              </div>
              <div>
                <div>
                  <h4 className="mb-3">Your operating hours</h4>
                  <p className="text-[#70707B]">
                    These are the times you&#39;re available for client
                    reservations.
                  </p>
                </div>
                <div className="flex flex-wrap py-4">
                  <div className="relative flex flex-wrap w-full mt-4 md:pr-[25px]">
                    <div className="w-[20%] md:w-full md:mb-4">
                      <div className="flex items-center space-x-2 text-[16px]">
                        24 Sep, Monday
                      </div>
                    </div>
                    <div className="w-[22%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          From
                        </label>
                        <Select>
                          <SelectTrigger
                            icon={<ChevronDown color="#70707B" />}
                            className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                          >
                            <SelectValue
                              placeholder="9:00 AM AM"
                              className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                            />
                          </SelectTrigger>
                          <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                            <SelectGroup className="p-0">
                              <SelectItem
                                value="1"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                10:30 AM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                10:45 AM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                11:00 AM
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-[22%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          To
                        </label>
                        <Select>
                          <SelectTrigger
                            icon={<ChevronDown color="#70707B" />}
                            className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                          >
                            <SelectValue
                              placeholder="5:00 PM"
                              className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                            />
                          </SelectTrigger>
                          <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                            <SelectGroup className="p-0">
                              <SelectItem
                                value="1"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:00 PM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:15 PM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:30 PM
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-[22%] lg:w-[22%] md:w-[100%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          Max revervations
                        </label>
                        <Input
                          type="text"
                          placeholder="1"
                          className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                        />
                        <div className="absolute right-2 top-[50%] translate-y-[-50%]">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="border-0 p-0 w-auto h-auto bg-transparent"
                                >
                                  <NotificationToolTipIcon />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white">
                                <p>Lorem Ipsum is simply dummy text.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>
                    <div className="w-[14%] lg:w-[14%]  md:mt-4 md:pl-0 flex justify-between pl-3 md:hidden">
                      <div className="flex items-center justify-center w-auto">
                        <Button
                          type="button"
                          className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                        >
                          <DelectPopUpIcon />
                        </Button>
                      </div>
                      <div className="relative">
                        <Button
                          variant={"outline"}
                          type="button"
                          className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                        >
                          <PluseBtnIcon />
                        </Button>
                      </div>
                    </div>
                    <div
                      className="md:flex items-center justify-center w-auto hidden absolute top-[50%]
                    right-0"
                    >
                      <Button
                        type="button"
                        className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                      >
                        <DelectPopUpIcon />
                      </Button>
                    </div>
                  </div>
                  <div className="relative flex flex-wrap w-full mt-4 md:pr-[25px]">
                    <div className="w-[20%] md:w-full"></div>
                    <div className="w-[22%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          From
                        </label>
                        <Select>
                          <SelectTrigger
                            icon={<ChevronDown color="#70707B" />}
                            className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                          >
                            <SelectValue
                              placeholder="10:30 AM"
                              className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                            />
                          </SelectTrigger>
                          <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                            <SelectGroup className="p-0">
                              <SelectItem
                                value="1"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                10:30 AM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                10:45 AM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                11:00 AM
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-[22%] lg:w-[22%] md:w-[50%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          To
                        </label>
                        <Select>
                          <SelectTrigger
                            icon={<ChevronDown color="#70707B" />}
                            className="w-full border-0 p-0 h-auto text-left  text-[16px] text-gray-900 font-satoshi_medium "
                          >
                            <SelectValue
                              placeholder="1:00 PM"
                              className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                            />
                          </SelectTrigger>
                          <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                            <SelectGroup className="p-0">
                              <SelectItem
                                value="1"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:00 PM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:15 PM
                              </SelectItem>
                              <SelectItem
                                value="2"
                                className="text-[16px] text-gray-900 font-satoshi_medium"
                              >
                                1:30 PM
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-[22%] lg:w-[22%] md:w-[100%] md:mb-3 pr-3">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          Max revervations
                        </label>
                        <Input
                          type="text"
                          placeholder="1"
                          className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                        />
                        <div className="absolute right-2 top-[50%] translate-y-[-50%]">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="border-0 p-0 w-auto h-auto bg-transparent"
                                >
                                  <NotificationToolTipIcon />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white">
                                <p>Lorem Ipsum is simply dummy text.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>
                    <div className="w-[14%] lg:w-[14%] md:mt-2 md:pl-0 flex justify-between pl-3">
                      <div className="flex items-center justify-center w-auto md:hidden">
                        <Button
                          type="button"
                          className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                        >
                          <DelectPopUpIcon />
                        </Button>
                      </div>
                      <div className="relative hidden md:block">
                        <Button
                          variant={"outline"}
                          type="button"
                          className="w-[36px] h-[36px] rounded-full border-gray-200 p-0  hover:opacity-75"
                        >
                          <PluseBtnIcon />
                        </Button>
                      </div>
                    </div>
                    <div
                      className="md:flex items-center justify-center w-auto hidden absolute top-[30%]
                    right-0"
                    >
                      <Button
                        type="button"
                        className="p-0 w-auto h-auto bg-transparent hover:opacity-75"
                      >
                        <DelectPopUpIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-10 w-full pt-6 pb-2 sm:px-5 bg-white border-gray-100 border-t border-solid flex sm:flex-wrap justify-between items-center">
            <div className="sm:w-full sm:mb-4">
              <Badge className="py-[10px] sm:w-full sm:justify-center px-[18px] rounded-[100px] border-red-50 bg-[#FEF2F2] text-[#EF4444] font-satoshi_medium">
                Block-off
              </Badge>
            </div>
            <ul className="flex items-center sm:w-full sm:flex-wrap">
              <li className="mr-4 sm:mr-0 sm:mb-4 sm:w-full">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="rounded-[50px] border-gray-200 px-[16px] py-[6px] hover:bg-black hover:text-white sm:w-full"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </li>
              <li className="sm:w-full">
                <Button variant="default" className="sm:w-full">
                  Save
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
  );
}
