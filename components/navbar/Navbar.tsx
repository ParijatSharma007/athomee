/* eslint-disable react/no-unescaped-entities */
"use client";

import assets from "@/json/assets";
import ArrowProfileIcon from "@/json/icons/ArrowProfileIcon";
import NotificationBell from "@/json/icons/NotificationBell";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "../Container";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import Language_CurrencyModal from "../Language_CurrencyModal/Language_CurrencyModal";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { FetchClientProfile } from "@/hooks/react-qurey/query-hooks/ClientProfile.hook";
import { useQuery } from "react-query";
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { parseCookies } from "nookies";
type Checked = DropdownMenuCheckboxItemProps["checked"];

const Navbar = () => {
  const navItems = [
    {
      name: "Discover",
      route: "/client/listing",
    },
    {
      name: "Categories",
      route: "#",
    },
    {
      name: "Features",
      route: "#",
    },
    {
      name: "Customer",
      route: "/profile/client/profile",
    },
  ];

  const navItems2 = [
    {
      name: "Discover",
      route: "/client/listing",
    },
    {
      name: "Reservations",
      route: "/reservations/client",
    },
    {
      name: "Messages",
      route: "/message/client",
    },
    {
      name: "Saved",
      route: "/saved/client",
    },
  ];

  const navItemsAdmin = [
    {
      name: "Dashboard",
      route: "/admin/dashboard",
    },
    {
      name: "Categories",
      route: "/admin/dashboard/categories",
    },
    {
      name: "Users",
      route: "/admin/dashboard/user",
    },
    {
      name: "Services",
      route: "/admin/dashboard/services",
    },
    {
      name: "Reservations",
      route: "/admin/dashboard/reservation",
    },
    {
      name: "Commissions",
      route: "/admin/dashboard/commissions",
    },
    {
      name: "Transactions",
      route: "/admin/dashboard/transactions",
    },
  ];
  const [islogin, setIslogin] = useState<boolean>(false);
  const [isAdmin, setisAdmin] = useState<boolean>(false);
  const [isHeader, setisHeader] = useState<boolean>(true);

  const router = useRouter();
  // const router1 = useRouter();
  const pathname = usePathname();

  console.log("pathname", pathname);
  const cookies = parseCookies();
  const token = cookies?.atHomee_token;
  console.log("token", token);

  const {
    data: clientprofile,
    isLoading: clientprofileloading,
    isError: clientprofileerror,
    refetch,
  } = useQuery({
    queryFn: () => FetchClientProfile(),
    queryKey: ["clientprofile"],
    enabled: false,
  });

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, [token]);
  useEffect(() => {
    if (pathname.includes("auth")) {
      setisHeader(false);
    } else if (pathname.includes("admin") || pathname.includes("dashboard")) {
      setisAdmin(true);
    } else if (
      pathname.includes("client") ||
      pathname.includes("reservations") ||
      pathname.includes("profile") ||
      pathname.includes("vendor") ||
      pathname.includes("reservations") ||
      pathname.includes("saved") ||
      pathname.includes("calendar")
    ) {
      setIslogin(true);
    } else {
      setIslogin(false);
      setisAdmin(false);
      setisHeader(true);
    }
  }, [pathname]);

  const [profileDrop, setProfileDrop] = useState(false);
  const [notificDrop, setNotificDrop] = useState(false);

  const handleLogout = () => {
    // Remove the token from cookies
    document.cookie =
      "atHomee_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    if (window !== undefined) {
      window.localStorage.clear();
    }
    // Redirect to the login page
    if (isAdmin) {
      // router.push("/auth/admin/login");
      window.location.replace("/auth/admin/login");
    } else {
      window.location.replace("/auth/client/login");
      // router.push("/auth/client/login");
    }
    // router.reload();
  };

  return islogin ? (
    <div className="w-full bg-transparent py-[30px] md:py-[10px] border-b border-gray-200">
      <Container>
        <div className="flex items-center">
          <div className="hidden lg:block">
            <DrawerMenu isLoggedIn={islogin} isAdmin={isAdmin} />
          </div>
          <Link href="/" className="logo lg:mx-[auto] sm:w-[100px]">
            <Image src={assets?.logo} alt="logo" width={132} height={30} />
          </Link>
          <ul className="flex justify-between ml-auto mr-6 items-center lg:hidden">
            {navItems2?.map((item, index) => (
              <li key={index}>
                <Link
                  href={item?.route}
                  className={`font-satoshi_medium text-base text-primary hover:text-secondary ${
                    index === navItems.length - 1 ? "mr-0" : "mr-11"
                  }`}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hdr_rgt flex items-center lg:hidden">
            <ul className="flex item-center pl-6 border-l border-newborder border-solid">
              <li className="leading-none">
                <Link href="#" className="inline-block mr-6">
                  <Language_CurrencyModal />
                </Link>
              </li>
              <li className="leading-none">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      onClick={() => setNotificDrop(!notificDrop)}
                      className="bg-transparent p-0 min-h[auto] h-[auto] hover:bg-transparent  outline-none shadow-none mr-6"
                    >
                      <NotificationBell />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[400px] bg-white p-0 border-0 shadow-[1px_1px_20px_0px_rgba(0,0,0,0.05)] rounded-[8px]"
                    align="end"
                  >
                    <DropdownMenuLabel className="flex items-center justify-between p-[20px]">
                      <p className="text-[16px] font-satoshi_medium text-[#131316]">
                        My Account
                      </p>
                      <Button
                        type="button"
                        className="bg-transparent p-0 min-h[auto] h-[auto] hover:bg-transparent  outline-none shadow-none text-[14px] font-satoshi_medium text-[#70707B] hover:text-[#000]"
                      >
                        Mark all as read
                      </Button>
                    </DropdownMenuLabel>
                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                      <div className="flex items-start">
                        <i className="flex items-center w-10 h-10">
                          <Image
                            src={assets.notificUserIcons}
                            alt=""
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                          />
                        </i>
                        <div className="pl-3 pr-[20px] relative w-[calc(100%-40px)] before:absolute before:contents-[] before:w-2 before:h-2 before:bg-red-500 before:right-0 before:top-[50%] before:translate-y-[-50%] before:rounded-full">
                          <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                            You have received a new review from{" "}
                            <span className="font-satoshi_medium">
                              Ryan Brooks.
                            </span>
                          </p>
                          <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                            Oct 2, 2023
                          </p>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                      <div className="flex items-start">
                        <i className="flex items-center w-10 h-10">
                          <Image
                            src={assets.notificUserIcons}
                            alt=""
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                          />
                        </i>
                        <div className="pl-3 pr-[20px] relative w-[calc(100%-40px)] before:absolute before:contents-[] before:w-2 before:h-2 before:bg-red-500 before:right-0 before:top-[50%] before:translate-y-[-50%] before:rounded-full">
                          <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                            You have received a new request for
                            <span className="font-satoshi_medium">
                              "Deep Tissue Massage"
                            </span>
                          </p>
                          <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                            Oct 2, 2023
                          </p>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                      <div className="flex items-start">
                        <i className="flex items-center w-10 h-10">
                          <Image
                            src={assets.notificUserIcons}
                            alt=""
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                          />
                        </i>
                        <div className="pl-3 pr-[20px] w-[calc(100%-40px)]">
                          <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                            New message from
                            <span className="font-satoshi_medium">
                              Ryan Brooks.
                            </span>
                          </p>
                          <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                            Oct 2, 2023
                          </p>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                      <div className="flex items-start">
                        <i className="flex items-center w-10 h-10">
                          <Image
                            src={assets.notificUserIcons2}
                            alt=""
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                          />
                        </i>
                        <div className="pl-3 pr-[20px] w-[calc(100%-40px)]">
                          <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                            New message on
                            <span className="font-satoshi_medium">
                              "Deep Tissue Massage"
                            </span>{" "}
                            service.
                          </p>
                          <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                            Oct 2, 2023
                          </p>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                      <div className="flex items-start">
                        <i className="flex items-center w-10 h-10">
                          <Image
                            src={assets.notificUserIcons2}
                            alt=""
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                          />
                        </i>
                        <div className="pl-3 pr-[20px] w-[calc(100%-40px)]">
                          <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                            The
                            <span className="font-satoshi_medium">
                              "Deep Tissue Massage"
                            </span>{" "}
                            reservation has been cancelled.
                          </p>
                          <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                            Oct 2, 2023
                          </p>
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
            <div className="btnDropDown relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {!!clientprofile && clientprofile?.data?.profilePicture ? (
                    <Button
                      onClick={() => setProfileDrop(!profileDrop)}
                      className="bg-transparent border-newborder border-solid border px-2.5 py-2 flex item-center h-auto hover:bg-transparent  outline-none shadow-none"
                    >
                      <Image
                        className="rounded-full w-[32px] h-[32px] object-cover"
                        // src={assets.menuProfileImg1}
                        src={
                          clientprofile?.data?.profilePicture ||
                          assets.noprofileimage
                        }
                        width={32}
                        height={32}
                        alt="icon"
                      />
                      <i className="pl-2.5">
                        <ArrowProfileIcon />
                      </i>
                    </Button>
                  ):<Button
                  onClick={() => setProfileDrop(!profileDrop)}
                  className="bg-transparent border-newborder border-solid border px-2.5 py-2 flex item-center h-auto hover:bg-transparent  outline-none shadow-none"
                >
                  <Image
                    className="rounded-full w-[32px] h-[32px] object-cover"
                    // src={assets.menuProfileImg1}
                    src={
                      clientprofile?.data?.profilePicture ||
                      assets.noprofileimage
                    }
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <i className="pl-2.5">
                    <ArrowProfileIcon />
                  </i>
                </Button>}
                  {/* <Button
                    onClick={() => setProfileDrop(!profileDrop)}
                    className="bg-transparent border-newborder border-solid border px-2.5 py-2 flex item-center h-auto hover:bg-transparent  outline-none shadow-none"
                  >
                    <Image
                      // src={assets.menuProfileImg1}
                      src={
                        clientprofile?.data?.profilePicture ||
                        assets.noprofileimage
                      }
                      width={32}
                      height={32}
                      alt="icon"
                    />
                    <i className="pl-2.5">
                      <ArrowProfileIcon />
                    </i>
                  </Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[240px] bg-white p-0 border-0 shadow-[1px_1px_20px_0px_rgba(0,0,0,0.05)] rounded-[8px]"
                  align="end"
                >
                  <Link href={"/profile/client/profile"}>
                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-0 border-solid border-t-gray-100 text-[14px] text-[#131316] hover:opacity-[0.8] hover:text-[#131316]">
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/profile/client/profile-settings/general"}>
                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-t border-solid border-t-gray-100 text-[14px] text-[#131316] hover:opacity-[0.8] hover:text-[#131316]">
                      Settings
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-t border-solid border-t-gray-100 text-[14px] text-[#131316] hover:opacity-[0.8] hover:text-[#131316]">
                    Help center
                  </DropdownMenuItem>
                  <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-t border-solid border-t-gray-100 text-[14px] text-[#131316] hover:opacity-[0.8] hover:text-[#131316]">
                    Switch to vendor
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-t border-solid border-t-gray-100 text-[14px] text-red-500 hover:opacity-[0.8] hover:text-red-500"
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : isAdmin ? (
    pathname !== "/auth/client/login" ? (
      <div className="w-full bg-transparent py-[30px] md:py-[10px] border-b border-gray-200">
        <Container>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <DrawerMenu isLoggedIn={islogin} isAdmin={isAdmin} />
            </div>
            <Link href="/" className="logo lg:mx-[auto] sm:w-[100px]">
              <Image src={assets?.logo} alt="logo" width={132} height={30} />
            </Link>
            <ul className="flex justify-between ml-auto mr-6 items-center lg:hidden">
              {navItemsAdmin?.map((item, index) => (
                <li
                  key={index}
                  className={` ${
                    pathname === item?.route ? "active" : ""
                  } navLink`}
                >
                  <Link
                    href={item?.route}
                    className={`font-satoshi_medium text-base text-primary hover:text-secondary ${
                      index === navItemsAdmin.length - 1 ? "mr-0" : "mr-11"
                    } xl:mr-4 xl:text-sm`}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hdr_rgt flex items-center lg:hidden">
              <ul className="flex item-center pl-6 border-l border-newborder border-solid">
                <li className="leading-none">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        onClick={() => setNotificDrop(!notificDrop)}
                        className="bg-transparent p-0 min-h[auto] h-[auto] hover:bg-transparent  outline-none shadow-none mr-6"
                      >
                        <NotificationBell />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[400px] bg-white p-0 border-0 shadow-[1px_1px_20px_0px_rgba(0,0,0,0.05)] rounded-[8px]"
                      align="end"
                    >
                      <DropdownMenuLabel className="flex items-center justify-between p-[20px]">
                        <p className="text-[16px] font-satoshi_medium text-[#131316]">
                          My Account
                        </p>{" "}
                        <Button
                          type="button"
                          className="bg-transparent p-0 min-h[auto] h-[auto] hover:bg-transparent  outline-none shadow-none text-[14px] font-satoshi_medium text-[#70707B] hover:text-[#000]"
                        >
                          Mark all as read
                        </Button>
                      </DropdownMenuLabel>
                      <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                        <div className="flex items-start">
                          <i className="flex items-center w-10 h-10">
                            <Image
                              src={assets.notificUserIcons}
                              alt=""
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                            />
                          </i>
                          <div className="pl-3 pr-[20px] relative w-[calc(100%-40px)] before:absolute before:contents-[] before:w-2 before:h-2 before:bg-red-500 before:right-0 before:top-[50%] before:translate-y-[-50%] before:rounded-full">
                            <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                              You have received a new review from{" "}
                              <span className="font-satoshi_medium">
                                Ryan Brooks.
                              </span>
                            </p>
                            <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                              Oct 2, 2023
                            </p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                        <div className="flex items-start">
                          <i className="flex items-center w-10 h-10">
                            <Image
                              src={assets.notificUserIcons}
                              alt=""
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                            />
                          </i>
                          <div className="pl-3 pr-[20px] relative w-[calc(100%-40px)] before:absolute before:contents-[] before:w-2 before:h-2 before:bg-red-500 before:right-0 before:top-[50%] before:translate-y-[-50%] before:rounded-full">
                            <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                              You have received a new request for
                              <span className="font-satoshi_medium">
                                "Deep Tissue Massage"
                              </span>
                            </p>
                            <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                              Oct 2, 2023
                            </p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                        <div className="flex items-start">
                          <i className="flex items-center w-10 h-10">
                            <Image
                              src={assets.notificUserIcons}
                              alt=""
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                            />
                          </i>
                          <div className="pl-3 pr-[20px] w-[calc(100%-40px)]">
                            <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                              New message from
                              <span className="font-satoshi_medium">
                                Ryan Brooks.
                              </span>
                            </p>
                            <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                              Oct 2, 2023
                            </p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                        <div className="flex items-start">
                          <i className="flex items-center w-10 h-10">
                            <Image
                              src={assets.notificUserIcons2}
                              alt=""
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                            />
                          </i>
                          <div className="pl-3 pr-[20px] w-[calc(100%-40px)]">
                            <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                              New message on
                              <span className="font-satoshi_medium">
                                "Deep Tissue Massage"
                              </span>{" "}
                              service.
                            </p>
                            <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                              Oct 2, 2023
                            </p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base px-[20px] py-[12px] border-t border-solid border-t-gray-200">
                        <div className="flex items-start">
                          <i className="flex items-center w-10 h-10">
                            <Image
                              src={assets.notificUserIcons2}
                              alt=""
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                            />
                          </i>
                          <div className="pl-3 pr-[20px] w-[calc(100%-40px)]">
                            <p className="text-[14px] font-satoshi_regular text-[#131316] leading-[1.2]">
                              The
                              <span className="font-satoshi_medium">
                                "Deep Tissue Massage"
                              </span>{" "}
                              reservation has been cancelled.
                            </p>
                            <p className="text-[12px] font-satoshi_regular text-[#70707B]">
                              Oct 2, 2023
                            </p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
              <div className="btnDropDown relative">
                {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    onClick={() => setProfileDrop(!profileDrop)}
                    className="bg-transparent border-newborder border-solid border px-2.5 py-2 flex item-center h-auto hover:bg-transparent  outline-none shadow-none"
                  >
                    <Image
                      src={assets.menuProfileImg1}
                      width={32}
                      height={32}
                      alt="icon"
                    />
                    <i className="pl-2.5">
                      <ArrowProfileIcon />
                    </i>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 bg-white p-3" align="end">
                  <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base">
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      onClick={() => setProfileDrop(!profileDrop)}
                      className="bg-transparent border-newborder border-solid border px-2.5 py-2 flex item-center h-auto hover:bg-transparent  outline-none shadow-none"
                    >
                      <Image
                        className="rounded-full w-[32px] h-[32px] object-cover"
                        // src={assets.menuProfileImg1}
                        src={
                          clientprofile?.data?.profilePicture ||
                          assets.noprofileimage
                        }
                        width={32}
                        height={32}
                        alt="icon"
                      />
                      <i className="pl-2.5">
                        <ArrowProfileIcon />
                      </i>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[240px] bg-white p-0 border-0 shadow-[1px_1px_20px_0px_rgba(0,0,0,0.05)] rounded-[8px]"
                    align="end"
                  >
                    <Link href={"/profile/admin/profile"}>
                      <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-0 border-solid border-t-gray-100 text-[14px] text-[#131316] hover:opacity-[0.8] hover:text-[#131316]">
                        Profile
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-t border-solid border-t-gray-100 text-[14px] text-[#131316] hover:opacity-[0.8] hover:text-[#131316]">
                      Settings
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-t border-solid border-t-gray-100 text-[14px] text-[#131316] hover:opacity-[0.8] hover:text-[#131316]">
                      Help center
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-t border-solid border-t-gray-100 text-[14px] text-[#131316] hover:opacity-[0.8] hover:text-[#131316]">
                      Switch to vendor
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={handleLogout}
                      className=" cursor-pointer font-satoshi_medium text-base p-[12px] border-t border-solid border-t-gray-100 text-[14px] text-red-500 hover:opacity-[0.8] hover:text-red-500"
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </Container>
      </div>
    ) : (
      ""
    )
  ) : // : ""}
  isHeader ? (
    <div className="w-full bg-transparent py-[30px] absolute left-0 top-0 z-50">
      <Container>
        <div className="flex justify-between items-center ">
          <div className="hidden lg:block">
            <DrawerMenu isLoggedIn={islogin} isAdmin={isAdmin} />
          </div>
          <Link href="/" className="logo sm:w-[100px]">
            <Image src={assets?.logo} alt="logo" width={132} height={30} />
          </Link>
          {/* <ul className="flex justify-between items-center lg:hidden">
            {navItems?.map((item, index) => (
              <li key={index}>
                <Link
                  href={item?.route}
                  className={`font-satoshi_medium text-base text-primary hover:text-secondary ${
                    index === navItems.length - 1 ? "mr-0" : "mr-11"
                  }`}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul> */}
          <div className="hdr_rgt flex items-center ">
            <Link href="#" className="inline-block mr-6 lg:hidden">
              <Language_CurrencyModal />
            </Link>
            <Button
              variant="outline"
              className="mr-4 lg:hidden"
              onClick={() => router.push("/auth/client/login")}
            >
              Log in
            </Button>
            <Button
              variant="default"
              className="lg:bg-[transparent] lg:p-0 lg:height-[auto] lg:text-gray-800 lg:hover:bg-[transparent]"
              // onClick={() => router.push("/auth/client/sign-up")}
              onClick={() => router.push("/auth/sign-up")}
            >
              Sign up
            </Button>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
};

export default Navbar;
