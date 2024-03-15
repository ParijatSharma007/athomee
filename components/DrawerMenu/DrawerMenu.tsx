"use client";
import assets from "@/json/assets";
import HambergurIcon from "@/json/icons/HambergurIcon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import SideMenuLanguageCurrency from "../SideMenuLanguageCurrency/SideMenuLanguageCurrency";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useQuery } from "react-query";
import { FetchClientProfile } from "@/hooks/react-qurey/query-hooks/ClientProfile.hook";

interface DrawerMenuProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

export default function DrawerMenu({ isLoggedIn, isAdmin }: DrawerMenuProps) {
  const router = useRouter();
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
      route: "#",
    },
  ];

  const navItems2 = [
    {
      name: "Discover",
      route: "/client/listing",
    },
    {
      name: "Reservations",
      route: "#",
    },
    {
      name: "Messages",
      route: "#",
    },
    {
      name: "Saved",
      route: "#",
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
      route: "/admin/dashboard/reservations",
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
  const navItemsProfile = [
    {
      name: "Profile",
      route: "/profile/admin/profile",
    },
    {
      name: "Settings",
      route: "#",
    },
    {
      name: "Help Center",
      route: "#",
    },
    {
      name: "Switch to vendor",
      route: "#",
    },
    {
      name: "Log out",
      route: "#",
    },
  ];

  const [drawerOpen, setdrawerOpen] = useState<boolean>(false);

  const handleDrawer = useCallback(() => {
    setdrawerOpen((data) => !data);
    const bodyElement = document.querySelector("body");
    const htmlElement = document.querySelector("html");
    bodyElement?.classList.remove("hide_scroll");
    htmlElement?.classList.remove("hide_scroll");
  }, []);

  const handleOpenDrawer = useCallback(() => {
    setdrawerOpen(true);
  }, []);

  //image Update
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

  return (
    <Sheet key="left" open={drawerOpen} onOpenChange={setdrawerOpen}>
      <SheetTrigger asChild>
        <Button
          type="button"
          className="bg-[none] p-0 leading-0 height-[auto] hover:bg-[transparent]"
          onClick={handleOpenDrawer}
        >
          <HambergurIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[282px] bg-white p-0 pt-[50px] pb-[10px] h-[100vh]"
        onInteractOutside={handleDrawer}
      >
        <SheetTitle onClick={handleDrawer} />
        {!isLoggedIn && !isAdmin && (
          <div className="py-[14px] px-[16px] flex items-center">
            <Button
              variant="outline"
              className="mr-4 "
              onClick={() => router.push("/auth/admin/login")}
            >
              Log in
            </Button>
            <Button
              variant="default"
              onClick={() => router.push("/auth/client/sign-up")}
            >
              Sign up
            </Button>
          </div>
        )}

        <div
          className={`${
            isLoggedIn ? "h-full" : "h-[calc(100%-68px)]"
          } custom-scrollbar overflow-y-auto overflow-x-hidden`}
        >
          {isLoggedIn ? (
            <div className=" px-4 border-0 pb-2 border-gray-200">
              <div className="flex items-center">
                <i className="mr-2">
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
                </i>
                <div className="leading-[1]">
                  <p className="inline-block text-[14px] font-satoshi_medium leading-[1]">
                  {clientprofile?.data?.firstName}
                  </p>
                  <p className="inline-block text-[14px] font-satoshi_regular text-[#A0A0AB] leading-[1]">
                  {clientprofile?.data?.email}
                  </p>
                </div>
              </div>

              {/* <i>
                <ChervonDown />
              </i> */}
            </div>
          ) : isAdmin ? (
            <div className=" px-4 border-0 pb-2 border-gray-200">
              <div className="flex items-center">
                <i className="mr-2">
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
                </i>
                <div className="leading-[1]">
                  <p className="inline-block text-[14px] font-satoshi_medium leading-[1]">
                  {clientprofile?.data?.firstName}
                  </p>
                  <p className="inline-block text-[14px] font-satoshi_regular text-[#A0A0AB] leading-[1]">
                  {clientprofile?.data?.email}
                  </p>
                </div>
              </div>

              {/* <i>
                <ChervonDown />
              </i> */}
            </div>
          ) : null}
          {isLoggedIn ? (
            <ul className="border-b border-gray-200 pb-4">
              {navItems2?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.route}
                    className={`font-satoshi_medium text-[16px] text-gray-500 hover:text-primary py-3 px-4 block`}
                    onClick={() => handleDrawer()}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : isAdmin ? (
            <ul className="border-b border-gray-200 pb-4">
              {navItemsAdmin?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.route}
                    className={`font-satoshi_medium text-[16px] text-gray-500 hover:text-primary py-3 px-4 block`}
                    onClick={() => handleDrawer()}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="border-b border-gray-200 pb-4">
              {navItems?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.route}
                    className={`font-satoshi_medium text-[16px] text-gray-500 hover:text-primary py-3 px-4 block`}
                    onClick={() => handleDrawer()}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {isLoggedIn ? (
            <ul className="border-b border-gray-200 pb-4">
              <li className="font-satoshi_medium text-[16px] text-gray-900 hover:text-primary py-3 px-4 block">
                Account
              </li>
              {navItemsProfile?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.route}
                    className={`font-satoshi_medium text-[16px] text-gray-500 hover:text-primary py-3 px-4 block`}
                    onClick={() => handleDrawer()}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : isAdmin ? (
            <ul className="border-b border-gray-200 pb-4">
              <li className="font-satoshi_medium text-[16px] text-gray-900 hover:text-primary py-3 px-4 block">
                Account
              </li>
              {navItemsProfile?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.route}
                    className={`font-satoshi_medium text-[16px] text-gray-500 hover:text-primary py-3 px-4 block`}
                    onClick={() => handleDrawer()}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="py-5 px-4">
            <SideMenuLanguageCurrency />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
