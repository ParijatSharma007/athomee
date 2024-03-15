/* eslint-disable react/jsx-key */
"use client";
import MessagePopUpIconBtnModal from "@/components/MessagePopUpIconBtnModal/MessagePopUpIconBtnModal";
import MessagePopUpModal from "@/components/MessagePopUpModal/MessagePopUpModal";
import ReadMoreTextCancelationModal from "@/components/ReadMoreTextCancelationModal/ReadMoreTextCancelationModal";
import ReadMoreTextServiceDetailsModal from "@/components/ReadMoreTextServiceDetailsModal/ReadMoreTextServiceDetailsModal";
import ReserveServiceCard from "@/components/ReserveServiceCard/ReserveServiceCard";
import ServiceDetailsListSlider from "@/components/ServiceDetailsListSlider/ServiceDetailsListSlider";
import ServiceDetailsProgress from "@/components/ServiceDetailsProgress/ServiceDetailsProgress";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import assets from "@/json/assets";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";
import DotIconBtnShow from "@/json/icons/DotIconBtnShow";
import HeartIconSave from "@/json/icons/HeartIconSave";
import HeartIconSave2 from "@/json/icons/HeartIconSave2";
import PaginationArrow1 from "@/json/icons/PaginationArrow1";
import PaginationArrow2 from "@/json/icons/PaginationArrow2";
import TableTickIcon from "@/json/icons/TableTickIcon";
import TableUnderlineIcon from "@/json/icons/TableUnderlineIcon";
import TranslateLanguageIcon from "@/json/icons/TranslateLanguageIcon";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "../../../../../../components/Container";
import StarRating from "../../../../../../components/Ratting/Ratting";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { getClientServiceDetails, getServiceDetails, getServiceList, getServiceReview, getSeviceList } from "@/api/functions/admin.api";
import Loading from "@/app/(landing)/loading";
import SmallLoading from "@/components/Loading/Loading";
import dayjs from "dayjs";
import Link from "next/link";
import { BasicPagination } from "@/components/pagination comp/PaginationServiceDetails";
import AddTosaveCollectionModalTwo from "@/components/AddTosaveCollectionModalTwo/AddTosaveCollectionModalTwo";
// import { useSearchParams } from "next/navigation";

const durationHandler = (str: string) => {

  console.log(str, "hour");

  const [h, m] = str.split(":");
  if (h === "00") {
    return `${m}-Minute`;
  }
  if(h !== "00" && m === "00"){
    return `${h}-Hour`
  }
  return `${h}-Hour ${m}-Minute`;
};

export default function Index() {
  const router = useRouter();

  const [listDataList, setListDataList] = useState<
    { topTetxt: string; BtmText: any; widthMobileFull?: boolean }[] | []
  >([]);
  // const [disableConditions, setDisableConditions] = useState<any[]>([]);

  const [saveBtnUpdate, setSaveBtnUpdate] = useState(false);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
  };
  const [reviewPayload, setReviewPaylod] = useState< {
    page: number,
    limit: number,
    vendor_id?: string,
    service_id: string
  }>({
    page: 1,
    limit: 1,
    service_id: ""
  })
  const [mobileimgSlider, setMobileimgSlider] = useState<
    { imgpath: string }[] | []
  >([]);
  const packageColors = useMemo(() => {
    return ["#FFF9D7", "#E8FBDA", "#F5EFFD"];
  }, []);
  const slider = useRef<Slider | null>(null);
  const [packageField, setPackageField] = useState<string[] | []>([]);
  const [radioList, setRadioList] = useState<
    | Array<{
        label: string;
        value: string;
        bgColor: string;
        rate: number;
        // pages : number
        // selected : boolean
      }>
    | []
  >([]);
  const [pages, setPages] = useState<number>(0)
  const { serviceId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`service-details-${serviceId}`],
    queryFn: () => {
      if (typeof serviceId === "string") return getClientServiceDetails(serviceId);
    },
    enabled: Boolean(serviceId),
  });

  const {data : review, isLoading : reviewLoading, isError : reviewError} = useQuery({
    queryKey : [`${reviewPayload.page}-${reviewPayload.limit}-${reviewPayload.service_id}-${reviewPayload.vendor_id}`],
    queryFn : () => getServiceReview(reviewPayload),
    enabled : reviewPayload.service_id ? true : false
  })

  const {data : subCategoryList, isLoading : categoryLoading} = useQuery({
    queryKey : [`${data?.data.sub_category}`],
    queryFn : () => getServiceList({
      limit : 100,
      sub_category_id: [String(data?.data.sub_category)]
    }),
    enabled : Boolean(data?.data.sub_category)
  })

  useEffect(() => {

    if (data) {
      const fields = data?.data.packages_data[0].features.map((item) => {
        return item.name;
      });
      const durations = data?.data.packages_data.map((item, idx) => {
        return {
          label: durationHandler(item.duration),
          value: item._id,
          bgColor: packageColors[idx % packageColors.length],
          rate: item.rate,
          // selected : false
        };
      });

      // console.log(data.data, "unavailabledates");

      // A matcher function to disable specified dates

      // A matcher function to disable specified weekdays (0 is Sunday, 6 is Saturday)

      setRadioList(durations);
      setPackageField(fields);
      // setDisableConditions([disableDates, disableWeekdays]);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setListDataList([
        {
          topTetxt: "Form",
          BtmText: data.data.city,
        },
        {
          topTetxt: "Avg. Reply",
          BtmText: data.data.vendor_data.replyTime,
        },
        {
          topTetxt: "Languages",
          BtmText: data.data.vendor_data.languages
            ? JSON.stringify(data.data.vendor_data.languages).slice(1, -2).replaceAll('"', " ")
            : "Mute",
        },
        {
          topTetxt: "Member Since",
          BtmText: dayjs(data.data.createdAt).format("DD MMM YYYY"),
        },
        {
          topTetxt: "Last Delivery",
          BtmText: data.data.vendor_data.lastDelivery
            ? dayjs(data.data.vendor_data.lastDelivery).format("DD MMM YYYY")
            : "NA",
        },
      ]);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const tempoMobileSlider = [{ imgpath: data.data.cover_image }];
      data.data.images.map((i) => {
        tempoMobileSlider.push({
          imgpath: i,
        });
      });
      // console.log(tempoMobileSlider, "Slider");
      setMobileimgSlider(tempoMobileSlider);
    }
  }, [data]);

  useEffect(() => {
    if(data){
      setReviewPaylod({
        ...reviewPayload,
        service_id : data?.data._id,
        // vendor_id :data?.data.user_id
      })
    }
  }, [data])

  useEffect(() => {
    if(review && pages === 0){
      setPages(review.data.pages)
    }
  }, [review])

  const handelSaveBtn = () => {
    setSaveBtnUpdate(!saveBtnUpdate);
  };

  if (isError) {
    router.push("/404");
  }
  useEffect(() => {
    if(data){
      // console.log(data.ratings_data, "test");
      console.log(((data.ratings_data.ratings[0].count/data.ratings_data.totalCount)*100).toFixed(0),"%");
    }
  }, [data])

  return (
    <div className="relative py-10 md:py-[22px] border-t border-newborder border-solid lg:overflow-hidden">
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <div className="">
            <Link
              href="/client/listing"
              className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50 md:hidden"
            >
              <i className="pr-4">
                <ArrowBackIcon/>
              </i>
              Back
            </Link>
            <div className="relative hidden md:flex justify-between">
              <a
                href="#"
                className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
              >
                <i className="pr-4">
                  <ArrowBackIcon />
                </i>
                Service details
              </a>
              <ul className="flex items-start">
                <li className="mr-2">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="bg-transparent outline-hover transition-all text-base text-primary border-newborder border-solid border px-1 py-1 w-[36px] h-[36px] rounded-full flex item-center items-center justify-center "
                    onClick={handelSaveBtn}
                  >
                    <i className="mr-0">
                      {saveBtnUpdate === true ? (
                        <HeartIconSave2 />
                      ) : (
                        <HeartIconSave />
                      )}
                    </i>
                  </Button>
                </li>
                <li>
                  <MessagePopUpIconBtnModal />
                </li>
              </ul>
            </div>
            <div className="relative hidden sm:block pt-[20px] mx-[-15px]">
              <Slider {...settings} className="request_slider" ref={slider}>
                {mobileimgSlider?.map((item, index) => (
                  <div className="mb-0 relative" key={index}>
                    <figure className="m-0 leading-0 w-full h-full max-h-[200px] overflow-hidden">
                      <Image
                        className="rounded-0 w-full h-[200px] object-cover "
                        src={item.imgpath}
                        alt="image"
                        width={600}
                        height={200}
                      />
                    </figure>
                    <p className="absolute right-[10px] bottom-[10px] z-[9] text-white bg-[rgba(19,19,22,0.40)] py-[2px] rounded-[32px] px-3">
                      {index + 1}/{mobileimgSlider.length}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="relative flex items-center justify-between mt-8 sm:mt-2">
              <div className="relative">
                <h1 className="inline-flex items-center transition-all text-4xl lg:text-[30px] md:text-[24px] md:mb-[4px] text-primary font-satoshi_medium mb-4">
                  {data?.data.title}
                </h1>
                <div className="flex items-center">
                  <div className="flex items-center ">
                    <i className="relative w-6 h-6 rounded-full mr-[7px]  ">
                      <Image
                        src={data?.data.vendor_data.profilePicture || assets.noprofileimage}
                        alt="clientimg"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover rounded-full"
                      />
                      <span className="bg-green-500 border-2 border-white p-1 absolute -bottom-1 -right-1 z-10 rounded-full "></span>
                    </i>
                    <h4 className="text-sm ">
                      {data?.data.vendor_data.firstName}{" "}
                      {data?.data.vendor_data.lastName}
                    </h4>
                  </div>
                  <ul className="flex items-center">
                    <li className="mr-2">
                      <p className="text-xs">
                        {` ${(data?.data.rating_data.avg_rating)?.toFixed(1)}`}
                      </p>
                    </li>
                    <li className="mr-2">
                      <StarRating
                        disablePointer={true}
                        prevRating={data && data?.data.rating_data.avg_rating-1}
                        totalStars={5}
                        key={data?.data?._id}
                      />
                    </li>
                    <li>
                      <p className="text-xs text-textgray">
                        ({data?.data.rating_data.total_count})
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative  md:hidden">
                <ul className="flex items-start">
                  <li className="mr-4">
                    {/* <Button
                      type="button"
                      variant={"outline"}
                      className="bg-transparent outline-hover transition-all text-base text-primary border-newborder border-solid border px-4 py-2 flex item-center h-auto "
                      onClick={handelSaveBtn}
                    >
                      <i className="mr-2">
                        {saveBtnUpdate === true ? (
                          <HeartIconSave2 />
                        ) : (
                          <HeartIconSave />
                        )}
                      </i>
                      Save
                    </Button> */}
                    <AddTosaveCollectionModalTwo />
                  </li>
                  <li>
                    <MessagePopUpModal />
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative py-8 flex flex-wrap mx-[-4px] sm:hidden">
              <div className="relative w-2/3 lg:w-full px-1">
                <figure className="m-0 leading-0 w-full h-full">
                    <Image
                      className="rounded-xl w-full h-full"
                      src={data?.data.cover_image || assets.noprofileimage}
                      alt="image"
                      width={904}
                      height={368}
                    />
                </figure>
              </div>
              <div className="relative w-1/3 lg:w-full flex flex-wrap px-1 mx-[-4px] lg:mx-0 lg:px-0 lg:mt-[8px]">
                <div className="w-1/2 px-1 mb-2">
                  <figure className="m-0 leading-0 w-full h-full">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={data?.data.images[0] || assets.noImage}
                      alt="image"
                      width={180}
                      height={180}
                    />
                  </figure>
                </div>
                <div className="w-1/2 px-1 mb-2">
                  <figure className="m-0 leading-0 w-full h-full">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={data?.data.images[1] || assets.noImage}
                      alt="image"
                      width={180}
                      height={180}
                    />
                  </figure>
                </div>
                <div className="w-1/2 px-1">
                  <figure className="m-0 leading-0 w-full h-full">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={data?.data.images[2] || assets.noImage}
                      alt="image"
                      width={180}
                      height={180}
                    />
                  </figure>
                </div>
                <div className="w-1/2 px-1 relative">
                  <figure className="m-0 leading-0 w-full h-full">
                    <Image
                      className="rounded-xl w-full h-full object-cover"
                      src={data?.data.images[3] || assets.noImage}
                      alt="image"
                      width={180}
                      height={180}
                    />
                  </figure>
                  {data?.data.images && data.data.images.length < 4 && data.data.images.length !== 0 && (
                    <Button
                      type="button"
                      className="rounded-[8px] bg-btnBorderColor absolute bottom-[11px] backdrop-blur-[52px] left-[50%] translate-x-[-50%] transition-all text-base text-primary-foreground px-2.5 py-2 flex item-center h-auto hover:bg-black xl:text-[12px] lg:hidden"
                    >
                      <i className="mr-2">
                        <DotIconBtnShow />
                      </i>
                      Show all photos
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mx-[-16px] lg:mx-0 lg:border-t lg:border-solid lg:border-gray-200 lg:pt-[16px] lg:mt-[20px]">
              <div className="relative w-2/3 px-4 lg:px-0 lg:w-full">
                <div className="relative pb-10 md:pb-6 border-b border-newborder border-solid">
                  <h2 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-2">
                    About service
                  </h2>
                  <p className="text-lg text-gray-500 mb-4 md:text-[16px]">
                    {data?.data.description}{" "}
                  </p>
                  <div className="relative flex items-center">
                    <i>
                      <TranslateLanguageIcon />
                    </i>
                    <p className="text-xs pl-1 pr-2 text-gray-400">
                      Translated
                    </p>
                    <Button
                      type="button"
                      className="p-0 bg-transparent text-gray-700 h-auto hover:bg-transparent hover:opacity-75"
                    >
                      Show original
                    </Button>
                  </div>
                </div>
                <div className="relative pt-10 md:pt-6">
                  <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-6 md:text-[20px]">
                    Types of service
                  </h3>
                  <div className="relative flex flex-wrap">
                    <div className="relative w-1/4 lg:hidden">
                      <h4 className="text-[20px] font-satoshi_medium text-gray-900 pt-8 pb-[90px] border-b border-solid border-[rgba(19,19,22,0.03)] ">
                        Package
                      </h4>
                      <ul>
                        {packageField.map((item, idx) => (
                          <li
                            key={`pachage-fields-${idx}`}
                            className="py-[24px] border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center text-[16px] font-satoshi_medium text-gray-900"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative w-3/4 lg:w-full flex flex-wrap md:shadow-none shadow-[0px_12px_29px_0px_rgba(0,0,0,0.04)] rounded-[12px] overflow-hidden">
                      {data?.data.packages_data.map((item, idx) => (
                        <div
                          key={item._id}
                          className={`relative w-1/3 md:w-full md:mb-4 md:rounded-[12px] bg-[${
                            packageColors[idx % packageColors.length]
                          }]`}
                        >
                          <div className="px-6 pt-6 pb-12 md:pb-6 border-b border-solid border-[rgba(19,19,22,0.03)]">
                            <h5 className="text-[20px] font-satoshi_medium text-gray-900 mb-2">
                              {item.name}
                            </h5>
                            <p className="text-[14px] text-gray-500 leading-normal">
                              {/* I will help you put your house in order. */}
                              {item.description}
                            </p>
                          </div>
                          <ul>
                            {item.features.map((features, idx) => (
                              <li className="p-6 border-b border-solid border-[rgba(19,19,22,0.03)] flex items-center justify-center text-[0] lg:text-[16px] lg:justify-between">
                                <p>{features.name}</p>
                                {features.is_available ? (
                                  <TableTickIcon />
                                ) : (
                                  <TableUnderlineIcon />
                                )}
                              </li>
                            ))}
                          </ul>
                          <div className="relative p-6 flex items-center flex-col">
                            <p className="text-[24px] font-satoshi_medium text-gray-900 mb-6 md:text-[20px]">
                              {item.rate}
                            </p>
                            <Button type="button">Reserve service</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {Boolean(data?.data.rules.length) && <div className="relative py-12 md:py-6 border-t border-b border-gray-200 mt-12 md:mt-8">
                  <h3 className="inline-flex items-center transition-all text-2xl md:text-[20px] text-primary font-satoshi_medium mb-6">
                    Things to know
                  </h3>
                  <div className="relative flex flex-wrap mx-[-12px]">
                    {data?.data.rules.map((item, idx) => (
                      <div
                        key={item._id}
                        className={`relative w-1/3 md:w-full ${
                          idx < 2 ?? `md:mb-6`
                        } px-[12px]`}
                      >
                        <h4 className="flex items-center transition-all text-[18px] text-gray-900 font-satoshi_medium mb-2">
                          {item.name}
                        </h4>
                        <p className="inline-flex items-center transition-all text-[18px] md:text-[16px] text-gray-900 font-satoshi_regular mb-3 md:mb-1.5">
                          {
                            item.description.length > 96 ? 
                            `${item.description.slice(0, 96)}...` : 
                            item.description
                          }
                        </p>
                        {Boolean(item.description.length > 96) && 
                        <ReadMoreTextServiceDetailsModal
                          title={item.name}
                          description={item.description}
                        />}
                      </div>
                    ))}
                  </div>
                </div>}
                <div className="relative py-12 lg:py-6 border-b border-gray-200">
                  <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-6">
                    About me
                  </h3>
                  <div className="relative flex flex-wrap items-center mb-6">
                    <figure className="text-0 leading-none mr-4 relative">
                      <Image
                        className="w-[64px] h-[64px] rounded-full"
                        src={data?.data.vendor_data.profilePicture || assets.noProfileImgFound1}
                        alt=""
                        width={64}
                        height={64}
                      />{" "}
                      <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                    </figure>
                    <div className="relative">
                      <h5 className="text-[24px] text-[#1F1F1F] font-satoshi_medium mb-1">
                        {data?.data.vendor_data.firstName +
                          " " +
                          data?.data.vendor_data.lastName}
                      </h5>
                      <p className="text-[16px] text-gray-500 font-satoshi_regular">
                        {data?.data.vendor_data.type}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex lg:flex-wrap sm:justify-between">
                    {listDataList.map((item, index) => (
                      <div
                        className={`{relative p-4 bg-gray-50 rounded-[8px] mr-4 lg:mb-4 sm:min-w-[48%] sm:mr-0 ${
                          item.widthMobileFull === true
                            ? "sm:!min-w-[100%]"
                            : ""
                        }`}
                        key={index}
                      >
                        <p className="text-[14px] text-gray-500 font-satoshi_regular mb-1">
                          {item.topTetxt}
                        </p>
                        <p className="text-[16px] text-gray-900 font-satoshi_medium mb-1">
                          {item.BtmText}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="relative my-4 lg:mt-0">
                    <p className="text-[18px] text-gray-500 font-satoshi_regular mb-4 leading-[1.6] sm:text-[16px]">
                      {data?.data.description}
                    </p>
                  </div>
                  <div className="relative flex items-center">
                    <i>
                      <TranslateLanguageIcon />
                    </i>
                    <p className="text-xs pl-1 pr-2 text-gray-400">
                      Translated
                    </p>
                    <Button
                      type="button"
                      className="p-0 bg-transparent text-gray-700 h-auto hover:bg-transparent hover:opacity-75"
                    >
                      Show original
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <ServiceDetailsListSlider
                    serviceRecomendationList={subCategoryList?.data}
                   />
                </div>
                <div className="realtive py-12 md:py-6 border-t border-b border-gray-200 md:border-0">
                  <div className="relative flex">
                    <div className="relative w-2/4 md:w-full">
                      <h3 className="text-[24px] text-gray-900 font-satoshi_medium mb-1 md:text-[20px]">
                        Average Rating
                      </h3>
                      <div className="relative flex items-center mb-2">
                        <h4 className="text-[24px] text-Black-100 font-satoshi_medium pr-3">
                          {(data?.data.rating_data.avg_rating)?.toFixed(1)}
                        </h4>
                        <i>
                          <StarRating
                            disablePointer={true}
                            prevRating={data && data?.data.rating_data.avg_rating -1}
                            totalStars={5}
                            key={data?.data?._id}
                          />
                        </i>
                      </div>
                      <p className="text-[14px] text-gray-400 font-satoshi_medium pr-3">
                        Average rate on this year{" "}
                      </p>
                    </div>
                    <div className="relative w-2/4 md:hidden">
                      <div className="relative">
                        {data?.ratings_data?.ratings?.map(({count, rating}) => <div className="flex items-center">
                          <p className="text-[12px] text-gray-900 font-satoshi_regular pr-2">
                            {rating}
                          </p>
                          <div className={`w-[${((count/data.ratings_data.totalCount)*100).toFixed(0)}%] inline-flex px-2'`}>
                            <ServiceDetailsProgress />
                          </div>
                          <p className="text-[12px] text-gray-900 font-satoshi_regular pl-2">
                            {count}
                          </p>
                        </div>)}
                      </div>
                    </div>
                  </div>
                  <div className="relative pt-12 md:pt-8">
                    <h3 className="inline-flex items-center transition-all text-2xl text-primary font-satoshi_medium mb-4 md:text-[20px] md:mb-2">
                      All Reviews
                    </h3>
                    <div className="realtive">
                      {reviewLoading && <SmallLoading size="medium"/>}
                      {review?.data.data.map((item) => (
                        <div key={item._id} className="relative p-8 md:p-4 bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] mb-4 rounded-[8px]">
                         <div className="relative flex flex-wrap items-center mb-2">
                           <figure className="text-0 leading-none mr-4 relative">
                             <Image
                               className="w-[48px] h-[48px] rounded-full"
                               src={item.client_data.profilePicture || assets.noprofileimage}
                               alt=""
                               width={48}
                               height={48}
                             />{" "}
                             <span className="right-0 bottom-0 absolute w-[14px] h-[14px] rounded-full bg-green-500 border-solid border-white border-2"></span>
                           </figure>
                           <div className="relative">
                             <h5 className="text-[16px] text-[#1F1F1F] font-satoshi_medium mb-0">
                               {`${item.client_data.fullName}`}
                             </h5>
                             <p className="text-[14px] text-gray-400 font-satoshi_regular">
                               {item.service_data.title}{" "}
                             </p>
                           </div>
                         </div>
                         <div className="relative flex items-center">
                           {/* <i> */}
                             <StarRating
                                disablePointer={true}
                                prevRating={item.rating-1} 
                                key={item?._id}
                                totalStars={5} />
                           {/* </i> */}
                           <p className="relative px-2 text-[14px] text-gray-500 font-satoshi_regular">
                             {item.rating}
                           </p>
                           <p className="relative pr-2 pl-3 text-[14px] text-gray-500 font-satoshi_regular before:absolute before:content before:w-[4px] before:h-[4px] before:rounded-full before:bg-gray-500 before:left-0 before:top-[10px]">
                             {dayjs(item.createdAt).format("MMM DD")}
                           </p>
                         </div>
                         <p className="text-[16px] text-gray-900 font-satoshi_regular my-3 leading-[1.6]">
                           {item.comment}
                         </p>
                         <div className="relative flex items-center">
                           <i>
                             <TranslateLanguageIcon />
                           </i>
                           <p className="text-xs pl-1 pr-2 text-gray-400">
                             Translated
                           </p>
                           <Button
                             type="button"
                             className="p-0 bg-transparent text-gray-700 h-auto hover:bg-transparent hover:opacity-75"
                           >
                             Show original
                           </Button>
                         </div>
                        </div>
                      ))
                      }
                    </div>
                    <div className="relative">
                      {/* {review?.data && review.data.total !== 0 ? <ul className="flex flex-wrap items-center justify-center">
                        <li className="px-1.5 md:px-[2px]">
                          <Button
                            onClick={() =>{
                              if(reviewPayload.page > 1)
                              setReviewPaylod({
                              ...reviewPayload,
                              page : reviewPayload.page - 1
                            })}}
                            type="button"
                            className="bg-transparent transition-all w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-transparent hover:opacity-75 hover:text-white"
                          >
                            <PaginationArrow1 />
                          </Button>
                        </li>
                        {pages.map((_, idx) => 
                        <li className="px-1.5 md:px-[2px]" key={`page${idx}`}>
                          <Button
                            onClick={() => setReviewPaylod({
                              ...reviewPayload,
                              page : idx+1
                            })}
                            type="button"
                            className=
                            {reviewPayload.page !== idx+ 1 ?"bg-transparent transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white":
                            "bg-gray-900 transition-all text-gray-400 w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-gray-900 hover:text-white"}
                          >
                            {idx+1}
                          </Button>
                        </li>)}
                        <li className="px-1.5 md:px-[2px]">
                          <Button
                            onClick={
                              () => {
                                if(review && review.data.pages > review.data.page)
                                setReviewPaylod({
                                ...reviewPayload,
                                page : reviewPayload.page + 1
                              })}
                            }
                            type="button"
                            className="bg-transparent transition-all w-[40px] h-[40px] sm:w-[36px] sm:h-[36px] p-0 rounded-full hover:bg-transparent hover:opacity-75 hover:text-white"
                          >
                            <PaginationArrow2 />
                          </Button>
                        </li>
                      </ul> : <p>No comments added yet</p>} */}
                      <BasicPagination
                        totalResData={{
                          page : reviewPayload.page,
                          pages : pages
                        }}
                        handleChange={(_ : any, i : number) => setReviewPaylod({
                          ...reviewPayload,
                          page : i
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-4 lg:w-full lg:px-0 lg:mt-[10px]">
                <div className="sticky top-[40px] ">
                  <ReserveServiceCard
                    radioList={radioList}
                    unavailable_weekdays={data?.data.unavailable_weekdays}
                    unavailability={data?.data.unavailability}
                    availability={data?.data.availability}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

