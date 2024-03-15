import AddBankDetailsProfileModal from "@/components/AddBankDetailsProfileModal/AddBankDetailsProfileModal";
import AddCardProfileModal from "@/components/AddCardProfileModal/AddCardProfileModal";
import Container from "@/components/Container";
import ProfileSettingEditModal from "@/components/ProfileSettingEditModal/ProfileSettingEditModal";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import MasterIcon from "@/json/icons/MasterIcon";
import VisaIcon from "@/json/icons/VisaIcon";

export default function Index() {
  const invoices = [
    {
      date: "Jun 14, 2023",
      service: "Floor cleaning",
      paymentMethod: "Ending in 6375",
      paymentMethodCard: "Credit card",
      paymentMethodCardIcon: <MasterIcon />,
      amount: "$55.00",
      transactionId: "486204945",
    },
    {
      date: "Jun 14, 2023",
      service: "Floor cleaning",
      paymentMethod: "Ending in 6375",
      paymentMethodCard: "Credit card",
      paymentMethodCardIcon: <MasterIcon />,
      amount: "$55.00",
      transactionId: "486204945",
    },
    {
      date: "Jun 14, 2023",
      service: "Floor cleaning",
      paymentMethod: "Ending in 6375",
      paymentMethodCard: "Credit card",
      paymentMethodCardIcon: <MasterIcon />,
      amount: "$55.00",
      transactionId: "486204945",
    },
    {
      date: "Jun 14, 2023",
      service: "Floor cleaning",
      paymentMethod: "Ending in 6375",
      paymentMethodCard: "Credit card",
      paymentMethodCardIcon: <MasterIcon />,
      amount: "$55.00",
      transactionId: "486204945",
    },
  ];

  return (
    <div className="relative pt-10 pb-20">
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
                    className="relative text-[16px] text-gray-900 font-satoshi_medium hover:text-gray-900 before:absolute before:contents-[] before:w-[2px] before:h-[20px] before:top-[4px] lg:before:top-[inherit] lg:before:bottom-[-4px] lg:before:left-0 lg:before:z-[9] lg:before:w-[100%] lg:before:h-[1px] lg:inline-flex lg:before:shadow-none before:bg-gray-900 before:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.85)] before:left-[-30px]"
                  >
                    Payment
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/client/profile-settings/notifications"
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
                Payment
              </h1>
              <div className="relative max-w-[660px] lg:max-w-full">
                <div className="relative">
                  <div className="flex item-center justify-between mb-4">
                    <h2 className="text-[20px] text-gray-900 md:text-[16px] md:leading-[2]">
                      Payment cards
                    </h2>
                    <AddCardProfileModal />
                  </div>
                  <div className="relative radioBtnPayment_mainWrap">
                    <RadioGroup
                      defaultValue="comfortable"
                      className="flex flex-wrap mx-[-12px] gap-0 md:mx-0"
                    >
                      <div className="px-[12px] w-1/2 mb-6 md:w-full md:px-0">
                        <div className="relative w-full">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="radioBtnMain absolute w-full h-full left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-gray-100 data-[state=checked]:border-gray-900 before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[18px] before:left-[16px] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                          />
                          <div
                            id="r1"
                            className="relative border-gray-100 border-solid border rounded-[12px] p-4 w-full"
                          >
                            <div className="relative flex justify-between pl-8">
                              <div className="text-[16px] text-gray-900 font-satoshi_medium mb-0">
                                Credit card
                                <Badge className="bg-[#F5EFFD] rounded-[6px] text-[#7757BD] text-[12px] py-[0px] ml-2">
                                  Default
                                </Badge>
                              </div>
                              <div className="relative z-[9]">
                                <ProfileSettingEditModal />
                              </div>
                            </div>
                            <p className="text-[14px] text-gray-400 pl-8">
                              Expires 10/24
                            </p>
                            <div className="flex justify-between mt-4">
                              <p>Ending in 6375</p>
                              <VisaIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-[12px] w-1/2 mb-6 md:w-full md:px-0">
                        <div className="relative w-full">
                          <RadioGroupItem
                            value="default2"
                            id="r2"
                            className="radioBtnMain absolute w-full h-full left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-gray-100 data-[state=checked]:border-gray-900 before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[18px] before:left-[16px] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                          />
                          <div
                            id="r2"
                            className="relative border-gray-100 border-solid border rounded-[12px] p-4 w-full"
                          >
                            <div className="relative flex justify-between pl-8">
                              <div className="text-[16px] text-gray-900 font-satoshi_medium mb-0">
                                Credit card
                              </div>
                              <div className="relative z-[9]">
                                <ProfileSettingEditModal />
                              </div>
                            </div>
                            <p className="text-[14px] text-gray-400 pl-8">
                              Expires 10/24
                            </p>
                            <div className="flex justify-between mt-4">
                              <p>Ending in 6375</p>
                              <MasterIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-[12px] w-1/2 mb-6 md:w-full md:px-0">
                        <div className="relative w-full">
                          <RadioGroupItem
                            value="default3"
                            id="r3"
                            className="radioBtnMain absolute w-full h-full left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-gray-100 data-[state=checked]:border-gray-900 before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[18px] before:left-[16px] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                          />
                          <div
                            id="r3"
                            className="relative border-gray-100 border-solid border rounded-[12px] p-4 w-full"
                          >
                            <div className="relative flex justify-between pl-8">
                              <div className="text-[16px] text-gray-900 font-satoshi_medium mb-0">
                                Credit card
                              </div>
                              <div className="relative z-[9]">
                                <ProfileSettingEditModal />
                              </div>
                            </div>
                            <p className="text-[14px] text-gray-400 pl-8">
                              Expires 10/24
                            </p>
                            <div className="flex justify-between mt-4">
                              <p>Ending in 6375</p>
                              <MasterIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className="relative pt-6 pb-6 mb-10 border-b border-gray-200 border-solid md:py-4 md:mb-4">
                  <div className="flex item-center justify-between mb-4">
                    <h2 className="text-[20px] text-gray-900 md:text-[16px] md:leading-[2]">
                      Bank accounts
                    </h2>
                    <AddBankDetailsProfileModal />
                  </div>
                  <div className="relative radioBtnPayment_mainWrap">
                    <RadioGroup
                      defaultValue="comfortable"
                      className="flex flex-wrap mx-[-12px] gap-0 md:mx-0"
                    >
                      <div className="px-[12px] w-1/2 mb-6 md:w-full md:px-0">
                        <div className="relative w-full">
                          <RadioGroupItem
                            value="default4"
                            id="r4"
                            className="radioBtnMain absolute w-full h-full left-0 top-0 rounded-[12px] cursor-pointer z-[2] border-gray-100 data-[state=checked]:border-gray-900 before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[url('/images/customCheckIconTick2.svg')] before:top-[18px] before:left-[16px] data-[state=checked]:before:bg-[url('/images/customCheckIconTick.svg')] data-[state=checked]:before:border-transparent"
                          />
                          <div
                            id="r4"
                            className="relative border-gray-100 border-solid border rounded-[12px] p-4 w-full"
                          >
                            <div className="relative flex justify-between pl-8">
                              <div className="text-[16px] text-gray-900 font-satoshi_medium mb-0">
                                BNP Paribas
                              </div>
                              <div className="relative z-[9]">
                                <ProfileSettingEditModal />
                              </div>
                            </div>
                            <p className="text-[14px] text-gray-400 pl-8">
                              Amelia Golden
                            </p>
                            <div className="flex justify-between mt-4">
                              <p>Ending in 6375</p>
                              <VisaIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className="relative">
                  <h2 className="text-[20px] text-gray-900 mb-8">
                    Transaction history
                  </h2>
                  <div className="md:overflow-x-auto">
                    <Table className="md:w-[730px]">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-left">Date</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Payment method</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead className="text-right">
                            Transaction ID
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoices.map((invoice, index) => (
                          <TableRow key={index}>
                            <TableCell className="text-[14px] text-left text-gray-900 font-satoshi_medium">
                              {invoice.date}
                            </TableCell>
                            <TableCell className="text-[14px] text-gray-400 font-satoshi_medium">
                              {invoice.service}
                            </TableCell>
                            <TableCell className="text-[14px] text-gray-900 font-satoshi_medium">
                              {invoice.paymentMethod}
                              <p className="flex items-center justify-between text-[12px] font-satoshi_regular">
                                {invoice.paymentMethodCard}
                                <i>{invoice.paymentMethodCardIcon}</i>
                              </p>
                            </TableCell>
                            <TableCell className="text-[14px] text-gray-900 font-satoshi_medium">
                              {invoice.amount}
                            </TableCell>
                            <TableCell className="text-[14px] text-right text-gray-900 font-satoshi_medium">
                              {invoice.transactionId}
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
