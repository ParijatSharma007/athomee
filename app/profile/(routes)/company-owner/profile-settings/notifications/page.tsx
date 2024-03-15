import Container from "@/components/Container";
import { Switch } from "@/components/ui/switch";

export default function Index() {
  return (
    <div className="relative pt-10 pb-20">
      <Container>
        <div className="relative flex flex-wrap">
          <div className="w-[20%] lg:w-full lg:mb-6 overflow-x-auto">
            <div className="sticky top-[40px] lg:relative lg:top-0 lg:border-b lg:border-solid lg:border-gray-200 md:min-w-[530px] lg:pb-1">
              <ul className="lg:flex items-center">
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/company-owner/profile-settings/general"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    General
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/company-owner/profile-settings/password-security"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Password & security
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/company-owner/profile-settings/team"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Team
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/company-owner/profile-settings/payment"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Payment
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/company-owner/profile-settings/notifications"
                    className="relative text-[16px] text-gray-900 font-satoshi_medium hover:text-gray-900 before:absolute before:contents-[] before:w-[2px] before:h-[20px] before:top-[4px] lg:before:top-[inherit] lg:before:bottom-[-4px] lg:before:left-0 lg:before:z-[9] lg:before:w-[100%] lg:before:h-[1px] lg:inline-flex lg:before:shadow-none before:bg-gray-900 before:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.85)] before:left-[-30px]"
                  >
                    Notifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[80%] lg:w-full">
            <div className="relative w-full">
              <h1 className="text-[30px] text-gray-900 font-satoshi_medium mb-12 lg:text-[24px] md:hidden">
                Notifications
              </h1>
              <div className="relative max-w-[660px] lg:max-w-full md:mb-6 md:pb-6 mb-12 pb-12 last:mb-0 border-[#E4E4E7] border-b last:border-0">
                <div className="mb-8 last:mb-0">
                  <h3 className="text-gray-900  text-xl mb-6">Notifications</h3>
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">New requests</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Reservation updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">New requests</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Casacall updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Changes</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative max-w-[660px] lg:max-w-full md:mb-6 md:pb-6 mb-12 pb-12 last:mb-0 border-[#E4E4E7] border-b last:border-0">
                <div className="mb-8 last:mb-0">
                  <h3 className="text-gray-900  text-xl mb-6">
                    Email Notifications
                  </h3>
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">New requests</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Reservation updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">New requests</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Casacall updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Changes</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative max-w-[660px] lg:max-w-full last:mb-0 border-[#E4E4E7] border-b last:border-0">
                <div className="mb-8 last:mb-0">
                  <h3 className="text-gray-900  text-xl mb-6">
                    SMS Notifications
                  </h3>
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">New requests</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Reservation updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">New requests</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Casacall updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Changes</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
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
