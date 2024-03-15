import AddCardProfileModal from "@/components/AddCardProfileModal/AddCardProfileModal";
import Container from "@/components/Container";
import PayoutWithdrawModal from "@/components/PayoutWithdrawModal/PayoutWithdrawModal";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import MasterIcon from "@/json/icons/MasterIcon";
import PaypalIcon from "@/json/icons/PaypalIcon";
import VisaIcon from "@/json/icons/VisaIcon";

export default function Index() {
  const invoices = [
    {
      date: "Jun 14, 2023",
      WithdrawalType: "j*****n@gmail.com",
      paymentMethodCard: "PayPal",
      paymentMethodCardIcon: <PaypalIcon />,
      amount: "$55.00",
      transactionId: "486204945",
    },
    {
      date: "Jun 14, 2023",
      WithdrawalType: "Ending in 6375",
      paymentMethodCard: "Credit card",
      paymentMethodCardIcon: <MasterIcon />,
      amount: "$55.00",
      transactionId: "486204945",
    },
    {
      date: "Jun 14, 2023",
      WithdrawalType: "Ending in 6375",
      paymentMethodCard: "Credit card",
      paymentMethodCardIcon: <MasterIcon />,
      amount: "$55.00",
      transactionId: "486204945",
    },
    {
      date: "Jun 14, 2023",
      WithdrawalType: "Ending in 6375",
      paymentMethodCard: "Credit card",
      paymentMethodCardIcon: <MasterIcon />,
      amount: "$55.00",
      transactionId: "486204945",
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
                    className="relative text-[16px] text-gray-900 font-satoshi_medium hover:text-gray-900 before:absolute before:contents-[] before:w-[2px] before:h-[20px] before:top-[4px] lg:before:top-[inherit] lg:before:bottom-[-4px] lg:before:left-0 lg:before:z-[9] lg:before:w-[100%] lg:before:h-[1px] lg:inline-flex lg:before:shadow-none before:bg-gray-900 before:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.85)] before:left-[-30px]"
                  >
                    Payment
                  </a>
                </li>
                <li className="pb-5 lg:pb-0 lg:pr-6">
                  <a
                    href="/profile/company-owner/profile-settings/notifications"
                    className="text-[16px] text-gray-400 font-satoshi_medium hover:text-gray-900"
                  >
                    Notifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[80%] lg:w-full overflow-hidden">
            <div className="relative w-full">
              <div className="flex justify-between max-w-[660px] mb-12 lg:max-w-full lg:mb-6 md:hidden">
                <div className="relative">
                  <h1 className="text-[30px] text-gray-900 font-satoshi_medium mb-1">
                    Payouts
                  </h1>
                  <p className="text-[20px] text-gray-400">
                    Balace:{" "}
                    <span className="pl-1 font-satoshi_medium text-gray-900">
                      $640.50
                    </span>
                  </p>
                </div>
                <PayoutWithdrawModal />
              </div>
              <div className="md:flex items-center justify-between bg-[#F4F4F5] rounded-[12px] hidden p-4 mb-4">
                <p>
                  Balace: <span>$640.50</span>
                </p>
                <PayoutWithdrawModal />
              </div>

              <div className="relative max-w-[660px] lg:max-w-full">
                <div className="relative">
                  <div className="flex item-center justify-between mb-8 ">
                    <div>
                      <h2 className="text-[20px] text-gray-900">
                        Payout methods
                      </h2>
                      <p className="text-[16px] text-gray-400">
                        Manage your existing team and change roles/permissions.
                      </p>
                    </div>
                    <AddCardProfileModal />
                  </div>
                  <div className="relative radioBtnPayment_mainWrap">
                    <RadioGroup
                      defaultValue="comfortable"
                      className="flex flex-wrap mx-[-12px] gap-0"
                    >
                      <div className="px-[12px] w-1/2 mb-6 md:w-full md:mb-4">
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
                      <div className="px-[12px] w-1/2 mb-6 md:w-full md:mb-4">
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
                      <div className="px-[12px] w-1/2 mb-6 md:w-full md:mb-4">
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
                <div className="relative pb-10 border-b border-solid border-gray-200 mb-10 md:mb-6">
                  <h2 className="text-[20px] text-gray-900 mb-2">
                    Payout invoice info (optional)
                  </h2>
                  <p className="text-[16px] text-gray-900 mb-6">
                    Information added here, such as your business name, address,
                    VAT number, etc. will be included when generating a payout
                    invoice.
                  </p>
                  <div className="relative">
                    <Textarea
                      placeholder="Enter your business name, address, VAT number, etc."
                      className="border-gray-200 resize-none h-[128px] placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="relative">
                  <h2 className="text-[20px] text-gray-900 mb-8">
                    Transaction history
                  </h2>
                  <Tabs defaultValue="Payouts" className="w-full">
                    <TabsList className="flex justify-start w-full border-b border-gray-200 border-solid rounded-[0] mb-6">
                      <TabsTrigger
                        value="Payouts"
                        className="mr-8 rounded-[0] border-b border-transparent"
                      >
                        Payouts
                      </TabsTrigger>
                      <TabsTrigger
                        value="Client"
                        className="rounded-[0] border-b border-transparent"
                      >
                        Client reservations
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="Payouts">
                      <div className="relative sm:overflow-x-auto">
                        <Table className="sm:w-[630px]">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="text-left text-gray-400 px-0">
                                Date
                              </TableHead>
                              <TableHead className="text-gray-400 px-0">
                                Withdrawal type
                              </TableHead>
                              <TableHead className="text-gray-400 px-0">
                                Amount
                              </TableHead>
                              <TableHead className="text-right text-gray-400 px-0">
                                Transaction ID
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {invoices.map((invoice, index) => (
                              <TableRow key={index}>
                                <TableCell className="text-[14px] text-left text-gray-900 font-satoshi_medium px-0">
                                  {invoice.date}
                                </TableCell>
                                <TableCell className="text-[14px] text-gray-900 font-satoshi_medium px-0">
                                  {invoice.WithdrawalType}
                                  <p className="flex items-center justify-start text-[12px] font-satoshi_regular">
                                    {invoice.paymentMethodCard}
                                    <i className="pl-2">
                                      {invoice.paymentMethodCardIcon}
                                    </i>
                                  </p>
                                </TableCell>
                                <TableCell className="text-[14px] text-gray-900 font-satoshi_medium px-0">
                                  {invoice.amount}
                                </TableCell>
                                <TableCell className="text-[14px] text-right text-gray-900 font-satoshi_medium px-0">
                                  {invoice.transactionId}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                    <TabsContent value="Client">
                      <div className="relative sm:overflow-x-auto">
                        <Table className="sm:w-[630px]">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="text-left text-gray-400 px-0">
                                Date
                              </TableHead>
                              <TableHead className="text-gray-400 px-0">
                                Reservations type
                              </TableHead>
                              <TableHead className="text-gray-400 px-0">
                                Amount
                              </TableHead>
                              <TableHead className="text-right text-gray-400 px-0">
                                Transaction ID
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {invoices.map((invoice, index) => (
                              <TableRow key={index}>
                                <TableCell className="text-[14px] text-left text-gray-900 font-satoshi_medium px-0">
                                  {invoice.date}
                                </TableCell>
                                <TableCell className="text-[14px] text-gray-900 font-satoshi_medium px-0">
                                  {invoice.WithdrawalType}
                                  <p className="flex items-center justify-start text-[12px] font-satoshi_regular">
                                    {invoice.paymentMethodCard}
                                    <i className="pl-2">
                                      {invoice.paymentMethodCardIcon}
                                    </i>
                                  </p>
                                </TableCell>
                                <TableCell className="text-[14px] text-gray-900 font-satoshi_medium px-0">
                                  {invoice.amount}
                                </TableCell>
                                <TableCell className="text-[14px] text-right text-gray-900 font-satoshi_medium px-0">
                                  {invoice.transactionId}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
