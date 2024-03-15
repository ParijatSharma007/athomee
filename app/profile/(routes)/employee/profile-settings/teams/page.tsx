import Container from "@/components/Container";
import ProfileSelectDropItemCommon from "@/components/ProfileSelectDropItemCommon/ProfileSelectDropItemCommon";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import DelectPopUpIcon from "@/json/icons/DelectPopUpIcon";
import Image from "next/image";

export default function Index() {
  const invoices = [
    {
      Name: "Simona Roberts",
      Owner: "(You)",
      Role: "Owner",
      email: "simonroberts@gmail.com",
      imgPath: `${assets.clientProfileImgmain1}`,
      IconPath: "",
    },
    {
      Name: "Simona Roberts",
      Owner: "",
      Role: "Admin",
      email: "simonroberts@gmail.com",
      imgPath: `${assets.clientProfileImgmain1}`,
      IconPath: <DelectPopUpIcon />,
    },
    {
      Name: "Simona Roberts",
      Owner: "",
      Role: "Member",
      email: "simonroberts@gmail.com",
      imgPath: `${assets.clientProfileImgmain1}`,
      IconPath: <DelectPopUpIcon />,
    },
    {
      Name: "Simona Roberts",
      Owner: "",
      Role: "Member",
      email: "simonroberts@gmail.com",
      imgPath: `${assets.clientProfileImgmain1}`,
      IconPath: <DelectPopUpIcon />,
    },
    {
      Name: "Simona Roberts",
      Owner: "",
      Role: "Member",
      email: "simonroberts@gmail.com",
      imgPath: `${assets.clientProfileImgmain1}`,
      IconPath: <DelectPopUpIcon />,
    },
    {
      Name: "Simona Roberts",
      Owner: "",
      Role: "Member",
      email: "simonroberts@gmail.com",
      imgPath: `${assets.clientProfileImgmain1}`,
      IconPath: <DelectPopUpIcon />,
    },
    {
      Name: "Simona Roberts",
      Owner: "",
      Role: "Member",
      email: "simonroberts@gmail.com",
      imgPath: `${assets.clientProfileImgmain1}`,
      IconPath: <DelectPopUpIcon />,
    },
  ];

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
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
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
                    href="/profile/employee/profile-settings/teams"
                    className="relative text-[16px] text-gray-900 font-satoshi_medium hover:text-gray-900 before:absolute before:contents-[] before:w-[2px] before:h-[20px] before:top-[4px] lg:before:top-[inherit] lg:before:bottom-[-4px] lg:before:left-0 lg:before:z-[9] lg:before:w-[100%] lg:before:h-[1px] lg:inline-flex lg:before:shadow-none before:bg-gray-900 before:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.85)] before:left-[-30px]"
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
              <h1 className="text-[30px] text-gray-900 font-satoshi_medium mb-12 lg:text-[24px] md:hidden">
                Team
              </h1>
              <div className="relative max-w-[660px]">
                <div className="relative">
                  <div className="flex item-center justify-between mb-12 md:mb-6">
                    <div className="relative">
                      <h2 className="text-[20px] text-gray-900 md:text-[18px]">
                        Your team
                      </h2>
                      <p className="text-gray-500 md:text-[14px]">
                        All your colleagues in one place.
                      </p>
                    </div>
                  </div>
                  <div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-gray-400">Name</TableHead>
                          <TableHead className="md:hidden text-gray-400">
                            Role
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoices.map((invoice, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <figure>
                                  <Image
                                    className="w-[48px] h-[48px] rounded-full object-cover"
                                    src={invoice.imgPath}
                                    width={48}
                                    height={48}
                                    alt=""
                                  />
                                </figure>
                                <div className="pl-4">
                                  <p className="text-gray-900 font-satoshi_medium">
                                    {invoice.Name}
                                    <span className="text-gray-400 pl-1">
                                      {invoice.Owner}
                                    </span>
                                  </p>
                                  <p className="text-gray-400 font-satoshi_regular">
                                    {invoice.email}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-900 font-satoshi_medium md:hidden">
                              <div className="flex items-center justify-between">
                                {invoice.Role === "Owner" ? (
                                  invoice?.Role
                                ) : (
                                  <ProfileSelectDropItemCommon
                                    defaultText={invoice.Role}
                                  />
                                )}
                                <Button
                                  type="button"
                                  className="bg-transparent p-0 w-auto h-auto hover:bg-transparent hover:opacity-75"
                                >
                                  {invoice.IconPath}
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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
