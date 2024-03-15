// import React, { useState } from 'react'
// import DeleteServiceModal from '../DeleteServiceModal/DeleteServiceModal';
// import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
//   } from "@/components/ui/popover";
//   import {
//     capitalizeFirstLetter,
//     cn,
//     covertISOFormateToReadableFormat,
//   } from "@/lib/utils";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import SerachInputComponent from '../SerachInputComponent/SerachInputComponent';
// import { Checkbox } from "@/components/ui/checkbox";
// import CheckboxTickIcon from "@/json/icons/CheckboxTickIcon";
// import CaklendarIcon from "@/json/icons/CaklendarIcon";
// import TableComponent from '../TableComponent/TableComponent';

// interface popoverProps {
//     label: string;
//     children: React.ReactNode;
//     className?: string;
//     classNamePopoverContent?: string;
//   }
// const PopOverComponent = ({
//     label,
//     children,
//     className,
//     classNamePopoverContent,
//   }: popoverProps) => {
//     const [open, setOpen] = useState<boolean>(false);
//     return (
//       <Popover>
//         <PopoverTrigger asChild className={cn("w-auto", className)}>
//           <Button
//             variant="outline"
//             onClick={() => setOpen(true)}
//             disabled={open}
//             className=" bg-gray-100 border-0 min-w-[120px]"
//           >
//             {label}
//             <i className="inline-flex items-center justify-center ml-2">
//               {open ? (
//                 <ChevronUp height={16} width={16} />
//               ) : (
//                 <ChevronDown height={16} width={16} />
//               )}
//             </i>
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent
//           className={cn(
//             "w-full max-w-[384px] sm:!max-w-[95vw] sm:!min-w-[95vw] bg-white rounded-xl border-none shadow-[1px_1px_30px_10px_rgba(0,0,0,0.07)]",
//             classNamePopoverContent
//           )}
//           align={"start"}
//           onInteractOutside={() => setOpen(false)}
//         >
//           <div>{children}</div>
//         </PopoverContent>
//       </Popover>
//     );
//   };

//   const select1 = [
//     {
//       mainText: "Beauty and Wellness Services",
//       subList: [
//         {
//           eachSubListItem: "Hair Styling and Cutting",
//         },
//         {
//           eachSubListItem: "Makeup and Cosmetics",
//         },
//         {
//           eachSubListItem: "Nail Care and Manicure/Pedicure",
//         },
//         {
//           eachSubListItem: "Spa and Massage Therapy",
//         },
//         {
//           eachSubListItem: "Skincare and Facials",
//         },
//       ],
//     },
//     {
//       mainText: "Home Cleaning and Maintenance",
//       subList: [
//         {
//           eachSubListItem: "General House Cleaning",
//         },
//         {
//           eachSubListItem: "Deep Cleaning Services",
//         },
//       ],
//     },
//   ];

// const AllServicesTable = () => {
//   return (
//     <div>
//     <div className="flex items-center flex-wrap mb-8">
//       <PopOverComponent 

//         label="Category"
//         className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
//       >
//         <div className="pb-[60px]">
//           <div>
//             <SerachInputComponent className="mb-6" />
//           </div>
//           <div className="h-[300px] overflow-y-auto">
//             {select1?.map((item, index) => (
//               <div key={index}>
//                 <div className="flex items-center space-x-2 px-4 py-1">
//                   <Checkbox
//                     id={`${item.mainText}`}
//                     className="checkBox border-gray-200 rounded-[4px]"
//                     icon={<CheckboxTickIcon />}
//                   />
//                   <label
//                     htmlFor={`${item.mainText}`}
//                     className="text-base font-satoshi_medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                   >
//                     {item?.mainText}
//                   </label>
//                 </div>

//                 <ul className="pl-4 py-1">
//                   {item?.subList?.map((item, index) => (
//                     <li key={index} className="py-2 pl-4">
//                       <div
//                         className="flex items-center space-x-2"
//                         key={index}
//                       >
//                         <Checkbox
//                           id={`${item.eachSubListItem}`}
//                           className="checkBox border-gray-200 rounded-[4px]"
//                           icon={<CheckboxTickIcon />}
//                         />
//                         <label
//                           htmlFor={`${item.eachSubListItem}`}
//                           className="text-base font-satoshi_medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                         >
//                           {item?.eachSubListItem}
//                         </label>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
//             <ul className="flex items-center">
//               <li className="mr-2">
//                 <Button
//                   type="button"
//                   variant={"outline"}
//                   className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
//                 >
//                   Cancel
//                 </Button>
//               </li>
//               <li>
//                 <Button
//                   type="button"
//                   className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
//                 >
//                   Apply
//                 </Button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </PopOverComponent>
//       <PopOverComponent
//         label="Publication date"
//         className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
//       >
//         <div>
//           <div className="border-b border-solid pb-[24px] border-[#E4E4E7]">
//             <p className="text-primary text-base font-satoshi_medium mb-2.5">
//               By period
//             </p>
//             <div className="flex items-center justify-between space-x-[16px]">
//               <div className="flex items-center justify-between space-x-[8px]">
//                 <p className="text-[var(--cmn-grey2)] text-[14px]">
//                   From
//                 </p>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant={"outline"}
//                       className={cn(
//                         "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
//                         !date && "text-muted-foreground"
//                       )}
//                     >
//                       <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)] ">
//                         {date ? (
//                           format(date, "MM/dd/yyyy")
//                         ) : (
//                           <>Pick a date</>
//                         )}
//                       </span>

//                       <i>
//                         <CaklendarIcon />
//                       </i>
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0">
//                     <Calendar
//                       mode="single"
//                       selected={date}
//                       onSelect={setDate}
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>
//               <div className="flex items-center justify-between space-x-[8px]">
//                 <p className="text-[var(--cmn-grey2)] text-[14px]">
//                   To
//                 </p>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant={"outline"}
//                       className={cn(
//                         "w-[128px] h-[34px] px-[12px] py-[8px] rounded-[8px] border border-solid border-[var(--colorF2F4F7)] justify-between items-center font-normal hover:bg-transparent",
//                         !date && "text-muted-foreground"
//                       )}
//                     >
//                       <span className="text-[12px] font-satoshi_medium text-[var(--color2C323A)]">
//                         {date1 ? (
//                           format(date1, "MM/dd/yyyy")
//                         ) : (
//                           <>Pick a date</>
//                         )}
//                       </span>

//                       <i>
//                         <CaklendarIcon />
//                       </i>
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0">
//                     <Calendar
//                       mode="single"
//                       selected={date}
//                       onSelect={setDate1}
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-end items-center pt-6 pb-4">
//             <Button
//               type="button"
//               className="bg-transparent text-[#26272B] font-satoshi_medium mr-2 hover:bg-[#131316] hover:text-[#fff]"
//             >
//               Clear All
//             </Button>
//             <Button type="button">Show results</Button>
//           </div>
//         </div>
//       </PopOverComponent>
//       <PopOverComponent
//         label="Location"
//         className="mr-4 sm:w-full sm:mb-2 sm:mr-0 sm:justify-between"
//         classNamePopoverContent="min-w-[350px]"
//       >
//         <div className="pb-[60px]">
//           <div>
//             <SerachInputComponent className="mb-6" />
//           </div>
//           <div className="h-[300px] overflow-y-auto">
//             <ul>
//               {select2?.map((item, index) => (
//                 <li key={index} className="mb-[20px] last:mb-0">
//                   <div className="flex items-center py-0.5">
//                     <i className="mr-2">
//                       <LocationIcon />
//                     </i>
//                     <p className="text-gray-400 text-base">
//                       <span className="text-gray-900 text-base inline-flex pr-1 font-satoshi_medium">
//                         {item?.itemBold}
//                       </span>
//                       {item?.itemPara}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-gray-100 border border-solid flex justify-end items-center">
//             <ul className="flex items-center">
//               <li className="mr-2">
//                 <Button
//                   type="button"
//                   variant={"outline"}
//                   className="rounded-[50px] px-[16px] py-[6px] hover:bg-black hover:text-white"
//                 >
//                   Clear all
//                 </Button>
//               </li>
//               <li>
//                 <Button
//                   type="button"
//                   className="rounded-[50px] px-[20px] py-[6px] hover:bg-secondary hover:text-white"
//                 >
//                   Show results
//                 </Button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </PopOverComponent>
//     </div>
//     <TableComponent
//       theadList={tableHeadListForServices}
//       tableHeadClassName="text-gray-500 text-sm font-satoshi_regular px-[20px] py-3 bg-gray-50 border-b border-gray-100"
//       className="border-gray-100 rounded-xl border border-separate border-spacing-0 overflow_table"
//     >
//       {isServiceListLoading ? (
//         <> Loading</>
//       ) : (
//         <>
//           {showableList?.length ? (
//             <>
//               {showableList?.map((invoice, index) => {
//                 return (
//                   <TableRow key={index}>
//                     <TableCell
//                       className={`border-b border-gray-100 py-4 px-[20px] text-base ${
//                         showableList?.length - 1 === index &&
//                         "border-0"
//                       }`}
//                     >
//                       {capitalizeFirstLetter(invoice?.category_title)}
//                     </TableCell>
//                     <TableCell
//                       className={`border-b border-gray-100 py-4 px-[20px] text-base ${
//                         showableList?.length - 1 === index &&
//                         "border-0"
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         <figure>
//                           <Image
//                             src={
//                               invoice?.images[0]
//                                 ? invoice?.images[0]
//                                 : assets?.decline_btn
//                             }
//                             alt="image"
//                             width={56}
//                             height={40}
//                           />
//                         </figure>
//                         <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[90px] ml-3">
//                           {invoice?.title}
//                         </p>
//                         <p className="text-gray-400 ml-3">
//                           ({invoice?.packages?.length})
//                         </p>
//                       </div>
//                     </TableCell>
//                     <TableCell
//                       className={`border-b border-gray-100 py-4 px-[20px] text-base ${
//                         invoices6?.length - 1 === index && "border-0"
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         <figure>
//                           <Image
//                             src={invoice?.vendor_data?.profilePicture}
//                             // src={invoice?.profilePicture}
//                             alt="image"
//                             width={32}
//                             height={32}
//                           />
//                         </figure>
//                         <p className="ml-3">
//                           {invoice?.vendor_data?.firstName}{" "}
//                           {invoice?.vendor_data?.lastName
//                             .charAt(0)
//                             ?.toUpperCase()}
//                           .
//                         </p>
//                       </div>
//                     </TableCell>
//                     <TableCell
//                       className={`border-b border-gray-100 py-4 px-[20px] text-base ${
//                         invoices6?.length - 1 === index && "border-0"
//                       }`}
//                     >
//                       {covertISOFormateToReadableFormat(
//                         invoice?.createdAt,
//                         "MMM DD, YYYY"
//                       )}
//                       <p className="text-sm text-gray-500">
//                         {covertISOFormateToReadableFormat(
//                           invoice?.createdAt,
//                           "HH:MM A"
//                         )}
//                       </p>
//                     </TableCell>
//                     <TableCell
//                       className={`border-b border-gray-100 py-4 px-[20px] text-base ${
//                         invoices6?.length - 1 === index && "border-0"
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         {invoice.packages_data?.map((item, index) => (
//                           <p key={index}>
//                             {index !==
//                             invoice?.packages_data?.length - 1
//                               ? `$${item.rate},`
//                               : `$${item.rate}`}
//                           </p>
//                         ))}
//                       </div>
//                     </TableCell>
//                     <TableCell
//                       className={`border-b border-gray-100 py-4 px-[20px] text-base  ${
//                         invoices6?.length - 1 === index && "border-0"
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         <Button { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";

//                           variant="outline"
//                           className="mr-2 border-gray-200"
//                         >
//                           Edit
//                         </Button>
//                         <div>
//                           <DeleteServiceModal />
//                         </div>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </>
//           ) : null}
//         </>
//       )}

//       {!isServiceListLoading && !showableList?.length ? (
//         <>NO Data</>
//       ) : null}
      
//     </TableComponent>
//   </div>
//   )
// }

// export default AllServicesTable