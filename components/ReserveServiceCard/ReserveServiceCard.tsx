import React, { useEffect, useState } from "react";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
// import { PopOverComponent } from "@/app/admin/(routes)/dashboard/reservation/page";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CustomCalenderTime from "../CustomCalenderTime/CustomCalenderTime";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import CaklendarIcon from "@/json/icons/CaklendarIcon";
import { useQuery } from "react-query";
import { googleSearchPlace } from "@/api/functions/admin.api";
import axios from "axios";
import LocationIcon from "@/json/icons/LocationIcon";
import SerachInputComponent from "../SerachInputComponent/SerachInputComponent";
import dayjs from "dayjs";
import Loading from "../Loading/Loading";

interface ReserveServiceCardProps {
  radioList: any;
  // disableCondition: any[];
  // setRadioList : any
  unavailability?: any;
  unavailable_weekdays?: any;
  availability: any;
}

interface Payload {
  seletedPackage: string;
  rate: number | null;
  address: string;
}

const ReserveServiceCard = ({
  radioList,
  unavailability,
  unavailable_weekdays,
  availability,
}: any) => {
  // const radioList = [
  //   {
  //     value: "1",
  //     label: "30-Minute",
  //     bgColor: "#FFF9D7",
  //   },
  //   {
  //     value: "2",
  //     label: "60-Minute",
  //     bgColor: "#E8FBDA",
  //   },
  //   {
  //     value: "3",
  //     label: "90-Minute",
  //     bgColor: "#F5EFFD",
  //   },
  // ];
  const [dateAndTime, setDateAndTime] = useState<{
    date: string;
    time: string;
  }>({
    date: String(Date()),
    time: "",
  });
  console.log(dateAndTime, "dateAndTime");
  const [input, setInput] = useState<string>("");
  const [locations, setLocations] = useState<any[] | []>([]);
  const [payload, setPayload] = useState<Payload>({
    seletedPackage: "",
    rate: null,
    address: "",
  });
  const [loader, setLoader] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  // const [valueAndRate, setValueAndRate] = useState<{value : string, rate : number} | null>(null)

  const handleSearch = async () => {
    setLoader(true);
    try {
      const response = await axios.post("/api/google/search", { input });
      if (response) {
        setLocations(response.data.data);
        setLoader(false);
      }
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    console.log(input);
    const timer = setTimeout(() => {
      if (input.length) {
        console.log("printing here");
        handleSearch();
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [input]);

  // const handelChange = (e: string) => {
  //   setPayload({
  //     ...payload,
  //     seletedPackage : e
  //   });
  // };

  const handleRateAndValue = ({
    value,
    rate,
  }: {
    value: string;
    rate: number;
  }) => {
    setPayload({
      ...payload,
      seletedPackage: value,
      rate,
    });
  };

  const handleAddress = (address: string) => {
    setPayload({
      ...payload,
      address,
    });
  };

  return (
    <div className="relative p-6 md:p-3 bg-white rounded-xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)]">
      <div className="realtive mb-6 ">
        <CustomRadioGroup
          radioList={[...radioList]}
          // onChange={handelChange}
          passingRateAndValue={handleRateAndValue}
        />
      </div>
      <div className="realative w-full border border-gray-200 border-solid rounded-[8px]">
        <div className="relative w-full px-3 py-2 border-gray-200 border-solid border-b">
          <label className=" w-full text-sm text-gray-400">Address</label>
          <Select onValueChange={handleAddress}>
            <SelectTrigger
              icon={<ChevronDown color="#E4E4E7" />}
              className="w-full border-0 p-0 h-auto text-gray-900 text-base text-left"
            >
              <SelectValue
                // placeholder="25 Draper Street, San Francisco, CA, USA"
                className="text-gray-900 text-base text-left"
              />
            </SelectTrigger>
            <SelectContent className="border-0 max-w-[100%]">
              <div className="px-2">
                <SerachInputComponent
                  onInputChange={setInput}
                  className="mb-6"
                />
              </div>
              <div className="h-[260px] overflow-y-auto">
                <SelectGroup>
                  {loader ? (
                    <Loading size="small" />
                  ) : (
                    <SelectLabel>
                      {locations.length
                        ? "Select Your Location"
                        : "Search Something"}
                    </SelectLabel>
                  )}
                  {!loader &&
                    locations.map((item) => (
                      <SelectItem value={item.description}>
                        {item.description}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </div>
            </SelectContent>
          </Select>
        </div>
        <div className="relative w-full px-3 py-2">
          <label className=" w-full text-sm text-gray-400">Date & time</label>

          <div className="dateWrap">
            <Select>
              <SelectTrigger
                icon={<CaklendarIcon IconColor="#E4E4E7" />}
                className="w-full border-0 p-0 h-auto text-gray-900 text-base"
              >
                <SelectValue
                  placeholder={`${dayjs(dateAndTime.date).format(
                    "DD MMM YYYY"
                  )},${dateAndTime.time}`}
                  className="text-gray-900 text-base"
                />
              </SelectTrigger>
              <SelectContent
                className="min-w-[690px] min-h-[480px] right-0 left-inherit"
                align="end"
              >
                <SelectGroup>
                  <CustomCalenderTime
                    availability={availability}
                    passingDateTime={({ date, time }) => {
                      setDateAndTime({
                        date,
                        time,
                      });
                    }}
                    selectedDate={dateAndTime.date}
                    unavailability={unavailability}
                    unavailable_weekdays={unavailable_weekdays}
                    onDataFromChild={undefined}
                  />
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {payload.seletedPackage && (
        <div className="relative pt-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={checked}
                onClick={() => setChecked(!checked)}
                className="rounded-[4px] border-gray-200"
              />
              <label
                htmlFor="terms"
                className="text-gray-900 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Wrap it up as a gift!
              </label>
            </div>
            <p className="text-gray-900 text-base">$10</p>
          </div>
          <div className="flex items-center justify-between py-4">
            <p className="text-gray-900 text-base">Service fee</p>
            <p className="text-gray-900 text-base">$5</p>
          </div>
          <div className="flex items-center justify-between pb-4 border-gray-200 border-solid border-b">
            <p className="text-gray-900 text-[20px] font-satoshi_medium">
              Total{" "}
            </p>
            <p className="text-gray-900 text-[20px] font-satoshi_medium">
              {payload?.rate &&
                (checked
                  ? "$" + (payload.rate + 5 + 10).toString()
                  : "$" + (payload.rate + 5).toString())}
            </p>
          </div>
          <div className="relative w-full py-2">
            <Select>
              <SelectTrigger
                icon={<ChevronDown color="#131316" />}
                className="w-full border-0 p-0 h-auto text-gray-900 text-base"
              >
                <SelectValue
                  placeholder="What's included?"
                  className="text-gray-900 text-base"
                />
              </SelectTrigger>
              <SelectContent className="border-0">
                <SelectGroup>
                  <SelectLabel>Option 1</SelectLabel>
                  <SelectItem value="1">Option 2</SelectItem>
                  <SelectItem value="2">Option 3</SelectItem>
                  <SelectItem value="3">Option 4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="py-4 w-full">
            <Button
              type="button"
              className="w-full rounded-full hover:bg-white hover:text-black border border-transparent hover:border-black"
            >
              Reserve service
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReserveServiceCard;
