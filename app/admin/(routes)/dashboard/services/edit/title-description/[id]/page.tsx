"use client";

import {
  getServiceDetails,
  searchCategories,
  updateServiceDetails,
} from "@/api/functions/admin.api";
import ChangeCategoryModal from "@/components/ChangeCategoryModal/ChangeCategoryModal";
import Container from "@/components/Container";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
export default function TitleDescription({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setcategory_id] = useState<string>("");
  const [sub_category, setsub_category] = useState<string>("");
updateServiceDetails
  const { data, isLoading, refetch } = useQuery(
    ["get_service_details"],
    async () => getServiceDetails(params.id),
    {
      onSuccess(data) {
        setTitle(data.data.title);
        setDescription(data.data.description);
        setsub_category(data.data.sub_category);
        setcategory_id(data.data.category);
      },
    }
  );

  const serviceData = data?.data;

  console.log("serviceData", serviceData);

  const { mutate } = useMutation(updateServiceDetails, {
    onSuccess: (data) => {
      console.log("data", data);
      refetch();
    },
  });

  const handleUpdate = () => {
    mutate({
      id: params.id,
      body: { title, description, category: category_id, sub_category },
    });
  };

  return (
    <div className="relative py-10">
      <Container>
        <div className="relative mb-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
          >
            <i className="pr-4">
              <ArrowBackIcon />
            </i>
            Back
          </button>
        </div>
        {isLoading && <Loading />}
        {/* <ChangeCategoryModal
          setcategory_id={setcategory_id}
          setsub_category={setsub_category}
        /> */}
        {serviceData ? (
          <>
            <div className="flex flex-wrap">
              <div className="w-[80%] pr-[32px] lg:w-full lg:pr-0">
                <div className="relative flex justify-between item-center mb-10 md:mb-6">
                  <h1 className="text-[36px] lg:text-[30px] md:hidden text-gray-900">
                    Title and description
                  </h1>
                  {/* <h1 className="text-[24px] text-gray-900 hidden md:block">
                    Deep Tissue Massage
                  </h1> */}
                </div>
                <div className="relative max-w-[736px] mr-auto">
                  <div className="relative border-gray-200 border-solid border-b pb-10 mb-8">
                    <h2 className="text-[18px] text-gray-900 mb-1">
                      Name the service
                    </h2>
                    <p className="text-[14px] text-gray-500">
                      Create a title that&#39;s both descriptive and
                      attention-grabbing.
                    </p>
                    <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Card holder
                      </label>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        // placeholder="Deep Tissue Massage"
                        className="border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="relative border-gray-200 border-solid border-b pb-10 mb-8">
                    <h2 className="text-[18px] text-gray-900 mb-1">Category</h2>
                    <p className="text-[14px] text-gray-500">
                      Choose sub-category most suitable for your service.
                    </p>
                    <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Sub-category
                      </label>
                      <br />
                      <ChangeCategoryModal
                        category_id={category_id}
                        sub_category={sub_category}
                        setcategory_id={setcategory_id}
                        setsub_category={setsub_category}
                        serviceData={serviceData}
                        showasText={true}
                        
                      />
                      {/* <Select>
                        <SelectTrigger
                          icon={<ChevronDown color="#70707B" />}
                          className="w-full border-0 p-0 h-auto text-[16px] text-gray-900 font-satoshi_medium "
                        >
                          <SelectValue
                            placeholder="Spa and Massage Therapy"
                            className="text-[16px] text-gray-900 font-satoshi_medium placeholder:text-gray-900 placeholder:font-satoshi_medium placeholder:text-[16px]"
                          />
                        </SelectTrigger>
                        <SelectContent className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium">
                          <SelectGroup className="p-0">
                            <SelectItem
                              value="1"
                              className="text-[16px] text-gray-900 font-satoshi_medium"
                            >
                              Spa and Massage Therapy
                            </SelectItem>
                            <SelectItem
                              value="2"
                              className="text-[16px] text-gray-900 font-satoshi_medium"
                            >
                              Option 1
                            </SelectItem>
                            <SelectItem
                              value="3"
                              className="text-[16px] text-gray-900 font-satoshi_medium"
                            >
                              Option 2
                            </SelectItem>
                            <SelectItem
                              value="4"
                              className="text-[16px] text-gray-900 font-satoshi_medium"
                            >
                              Option 3
                            </SelectItem>
                            <SelectItem
                              value="5"
                              className="text-[16px] text-gray-900 font-satoshi_medium"
                            >
                              Option 4
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select> */}
                    </div>
                  </div>
                  <div className="relative mb-8">
                    <h2 className="text-[18px] text-gray-900 mb-1">
                      Description
                    </h2>
                    <p className="text-[14px] text-gray-500">
                      Write a comprehensive description that highlights what
                      makes your service unique. Be clear and concise.
                    </p>
                    <div className="relative border-gray-200 border border-solid rounded-[8px] pt-[4px] pb-[6px] px-[16px] mt-[24px]">
                      <label className="text-[12px] text-gray-400 m-0 leading-0">
                        Description
                      </label>
                      <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-0 p-0 text-[16px] text-gray-900 font-satoshi_medium resize-none h-[470px] placeholder:text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Button
                      onClick={handleUpdate}
                      type="button"
                      className="relative rounded-[32px] px-6 hover:bg-secondary"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}
