import Container from "@/components/Container";
import DelectProfileGeneralModal from "@/components/DelectProfileGeneralModal/DelectProfileGeneralModal";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import NotificTagServiceIcon from "@/json/icons/NotificTagServiceIcon";

export default function Index() {
  return (
    <div className="relative pt-10 pb-20 lg:pb-10 lg:pt-6 md:pt-0">
      <div className="relative hidden  md:flex px-[16px] border-b border-gray-200 border-solid py-4 md:mb-6">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
        </a>
        <p className="absolute left-[50%] translate-x-[-50%] top-[14px] text-[16px] text-gray-900 font-satoshi_medium">
          Settings
        </p>
      </div>
      <Container>
        <div className="relative flex flex-wrap">
          <div className="w-[20%] lg:w-full lg:mb-6 overflow-x-auto">
            <div className="sticky top-[40px] lg:relative lg:top-0 lg:border-b lg:border-solid lg:border-gray-200 md:min-w-[530px] lg:pb-1">
              <ul className="lg:flex items-center">
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/employee/profile-settings/general"
                    className="relative text-[16px] text-gray-900 font-satoshi_medium hover:text-gray-900 before:absolute before:contents-[] before:w-[2px] before:h-[20px] before:top-[4px] lg:before:top-[inherit] lg:before:bottom-[-4px] lg:before:left-0 lg:before:z-[9] lg:before:w-[100%] lg:before:h-[1px] lg:inline-flex lg:before:shadow-none before:bg-gray-900 before:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.85)] before:left-[-30px]"
                  >
                    General
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/employee/profile-settings/password-security"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Password & security
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/employee/profile-settings/team"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Team
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/employee/profile-settings/notifications"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Notifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[80%] lg:w-full">
            <div className="relative w-full">
              <h1 className="text-[30px] text-gray-900 font-satoshi_medium mb-12 lg:-text-[24px] md:hidden">
                General
              </h1>
              <div className="relative max-w-[660px] lg:max-w-full">
                <div className="relative">
                  <h2 className="text-[20px] text-gray-900 font-satoshi_medium mb-3">
                    Your name
                  </h2>
                  <div className="flex flex-wrap mx-[-12px] md:mx-0">
                    <div className="w-1/2 px-[12px] md:w-full md:px-0 mb-10 md:mb-4">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          First name
                        </label>
                        <Input
                          type="text"
                          placeholder="Julia"
                          className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 px-[12px] md:w-full md:px-0 mb-10 md:mb-4">
                      <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px]">
                        <label className="text-[12px] text-gray-400 m-0 leading-0">
                          Last name
                        </label>
                        <Input
                          type="text"
                          placeholder="Brown"
                          className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <h2 className="text-[20px] text-gray-900 font-satoshi_medium mb-3">
                    Email address
                  </h2>
                  <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px] mb-10 md:mb-4">
                    <label className="text-[12px] text-gray-400 m-0 leading-0">
                      Card holder
                    </label>
                    <Input
                      type="email"
                      placeholder="juliabrown@gmail.com"
                      className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                    />
                  </div>
                  <div className="relative flex justify-end pb-10 md:pb-6 border-gray-200 border-b border-solid">
                    <Button type="button">Save changes</Button>
                  </div>
                </div>
                <div className="relative mt-10 md:mt-6">
                  <h2 className="text-[20px] text-gray-900 font-satoshi_medium mb-1">
                    Company info
                  </h2>
                  <p className="text-[14px] text-gray-500 font-satoshi_regular mb-3">
                    Please choose the employee role that best fits within this
                    company.
                  </p>
                  <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px] mb-4">
                    <label className="text-[12px] text-gray-400 m-0 leading-0">
                      Company name
                    </label>
                    <Input
                      type="text"
                      placeholder="Asser Levy Recreation Center"
                      className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                    />
                  </div>
                  <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px] mb-4">
                    <label className="text-[12px] text-gray-400 m-0 leading-0">
                      Company location
                    </label>
                    <Input
                      type="text"
                      placeholder="25 Draper Street, San Francisco, CA, USA"
                      className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                    />
                  </div>
                  <div className="relative border-gray-200 border border-solid rounded-[8px] py-[4px] px-[16px] mb-10 md:mb-4">
                    <label className="text-[12px] text-gray-400 m-0 leading-0">
                      Company size
                    </label>
                    <Input
                      type="text"
                      placeholder="25"
                      className="border-0 p-0 h-auto text-[16px] leading-[1.9] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                    />
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            className="p-0 w-auto h-auto border-0 absolute right-[12px] top-[24px]"
                          >
                            <NotificTagServiceIcon />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <p>Add to library</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="relative flex justify-end pb-10 md:pb-6 border-gray-200 border-b border-solid">
                    <Button type="button">Save changes</Button>
                  </div>
                </div>
                <div className="relative pt-8">
                  <h2 className="text-[20px] text-gray-900 font-satoshi_medium mb-1">
                    Delete your account
                  </h2>
                  <p className="text-[14px] text-gray-500 font-satoshi_regular">
                    Would you like to delete your account?
                  </p>
                  <div className="mt-6">
                    <DelectProfileGeneralModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
