"use client";
import {
  getClientInfo,
  updateClientNotification,
} from "@/api/functions/admin.api";
import Container from "@/components/Container";
import { Switch } from "@/components/ui/switch";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Loading from "@/app/(landing)/loading";
export interface Notifications {
  notify_incoming_messages: {
    sms: boolean;
    email: boolean;
    _id?: string | undefined | null;
  };
  notify_reservation_updates: {
    sms: boolean;
    email: boolean;
    _id?: string | undefined | null;
  };
  notify_setting_changes: {
    sms: boolean;
    email: boolean;
    _id?: string | undefined | null;
  };
}

interface FunctionPayload {
  field:
    | "notify_incoming_messages"
    | "notify_reservation_updates"
    | "notify_setting_changes";
  median: "sms" | "email" | "global";
  value: boolean;
}

export default function Index() {
  const [changes, setChanges] = useState<boolean>(false);
  const [notifications, setNoticationas] = useState<Notifications>({
    notify_incoming_messages: {
      sms: false,
      email: false,
    },
    notify_reservation_updates: {
      sms: false,
      email: false,
    },
    notify_setting_changes: {
      sms: false,
      email: false,
    },
  });

  const { mutate } = useMutation({
    mutationFn: updateClientNotification,
  });

  useEffect(() => {
    if (changes) {
      mutate(notifications);
    }
  }, [notifications]);

  const { data, isLoading } = useQuery({
    queryKey: ["client-notifications"],
    queryFn: getClientInfo,
  });

  const { data: data2 } = useQuery({
    queryKey: "123",
    queryFn: getClientInfo,
  });

  useEffect(() => {
    if (data && data !== null) {
      console.log(data.data, "NotificationsInfo123");
      if (data.data.notification_settings) {
        setNoticationas(data.data.notification_settings);
      }
    }
  }, [data]);

  const switchOnChangeHandler = ({ field, median, value }: FunctionPayload) => {
    setChanges(true);
    if (median === "global") {
      setNoticationas({
        ...notifications,
        [field]: {
          email: value,
          sms: value,
        },
      });
    } else {
      setNoticationas({
        ...notifications,
        [field]: {
          ...notifications[field],
          [median]: value,
        },
      });
    }
  };

  return (
    <div className="relative pt-10 pb-20 lg:pb-10 lg:pt-6 md:pt-0">
      <div className="relative hidden  md:flex px-[16px] border-b border-gray-200 border-solid py-4 md:mb-6">
        <Link
          href="/profile/client/profile"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
        </Link>
        <p className="absolute left-[50%] translate-x-[-50%] top-[14px] text-[16px] text-gray-900 font-satoshi_medium">
          Settings
        </p>
      </div>
      <Container>
        {isLoading ?<Loading/> : <div className="relative flex flex-wrap">
          <div className="w-[20%] lg:w-full lg:mb-6 overflow-x-auto">
            <div className="sticky top-[40px] lg:relative lg:top-0 lg:border-b lg:border-solid lg:border-gray-200 md:min-w-[530px] lg:pb-1">
              <ul className="lg:flex items-center">
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/client/profile-settings/general"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    General
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/client/profile-settings/password-security"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Password & security
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/client/profile-settings/payment"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Payment
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/client/profile-settings/notifications"
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
              <div className="relative max-w-[660px] lg:max-w-full mb-12 lg:mb-6 pb-12 lg:pb-6 last:mb-0 border-[#E4E4E7] border-b last:border-0">
                <div className="mb-8 last:mb-0">
                  <h3 className="text-gray-900  text-xl mb-6">Notifications</h3>
                  <div className="flex">
                    <Switch
                      className="custom-switch"
                      onCheckedChange={(val) => {
                        switchOnChangeHandler({
                          field: "notify_incoming_messages",
                          median: "global",
                          value: val,
                        });
                      }}
                      checked={
                        notifications?.notify_incoming_messages.email ||
                        notifications?.notify_incoming_messages.sms
                      }
                    />
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
                    <Switch
                      className="custom-switch"
                      onCheckedChange={(val) => {
                        switchOnChangeHandler({
                          field: "notify_reservation_updates",
                          median: "global",
                          value: val,
                        });
                      }}
                      checked={
                        notifications?.notify_reservation_updates.email ||
                        notifications?.notify_reservation_updates.sms
                      }
                    />
                    <div className="ml-4">
                      <h4 className="text-base">Reservation updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mb-8 last:mb-0">
                  <div className="flex"> */}
                {/* <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">New requests</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div> */}
                {/* </div>
                </div> */}
                {/* <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Casacall updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch
                      className="custom-switch"
                      onCheckedChange={(val) => {
                        switchOnChangeHandler({
                          field: "notify_setting_changes",
                          median: "global",
                          value: val,
                        });
                      }}
                      checked={
                        notifications.notify_setting_changes.email ||
                        notifications.notify_setting_changes.sms
                      }
                    />
                    <div className="ml-4">
                      <h4 className="text-base">Changes</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative max-w-[660px]  mb-12 lg:mb-6 pb-12 lg:pb-6 last:mb-0 border-[#E4E4E7] border-b last:border-0">
                <div className="mb-8 last:mb-0">
                  <h3 className="text-gray-900  text-xl mb-6">
                    Email Notifications
                  </h3>
                  <div className="flex">
                    <Switch
                      className="custom-switch"
                      onCheckedChange={(val) => {
                        switchOnChangeHandler({
                          field: "notify_incoming_messages",
                          median: "email",
                          value: val,
                        });
                      }}
                      checked={notifications.notify_incoming_messages.email}
                    />
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
                    <Switch
                      className="custom-switch"
                      onCheckedChange={(val) => {
                        switchOnChangeHandler({
                          field: "notify_reservation_updates",
                          median: "email",
                          value: val,
                        });
                      }}
                      checked={notifications.notify_reservation_updates.email}
                    />
                    <div className="ml-4">
                      <h4 className="text-base">Reservation updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">New requests</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Casacall updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch
                      className="custom-switch"
                      onCheckedChange={(val) => {
                        switchOnChangeHandler({
                          field: "notify_setting_changes",
                          median: "email",
                          value: val,
                        });
                      }}
                      checked={notifications.notify_setting_changes.email}
                    />
                    <div className="ml-4">
                      <h4 className="text-base">Changes</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative max-w-[660px] last:mb-0 border-[#E4E4E7] border-b last:border-0">
                <div className="mb-8 last:mb-0">
                  <h3 className="text-gray-900  text-xl mb-6">
                    SMS Notifications
                  </h3>
                  <div className="flex">
                    <Switch
                      className="custom-switch"
                      onCheckedChange={(val) => {
                        switchOnChangeHandler({
                          field: "notify_incoming_messages",
                          median: "sms",
                          value: val,
                        });
                      }}
                      checked={notifications.notify_incoming_messages.sms}
                    />
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
                    <Switch
                      className="custom-switch"
                      onCheckedChange={(val) => {
                        switchOnChangeHandler({
                          field: "notify_reservation_updates",
                          median: "sms",
                          value: val,
                        });
                      }}
                      checked={notifications.notify_reservation_updates.sms}
                    />
                    <div className="ml-4">
                      <h4 className="text-base">Reservation updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">New requests</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch className="custom-switch" />
                    <div className="ml-4">
                      <h4 className="text-base">Casacall updates</h4>
                      <p className="text-base text-[#70707B]">
                        Notify me when I receive a message{" "}
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="mb-8 last:mb-0">
                  <div className="flex">
                    <Switch
                      className="custom-switch"
                      onCheckedChange={(val) => {
                        switchOnChangeHandler({
                          field: "notify_setting_changes",
                          median: "sms",
                          value: val,
                        });
                      }}
                      checked={notifications.notify_setting_changes.sms}
                    />
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
        </div>}
      </Container>
    </div>
  );
}
