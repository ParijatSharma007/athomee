/* eslint-disable react/jsx-key */
"use client";
import CommonSearchComponentWithFilter from "@/components/CommonSearchWithFilter/CommonSearchWithFilter";
import Container from "@/components/Container";
import ClientServiceListingCard from "@/components/ListingCard/ClientServiceListingCard";
import ListingCard from "@/components/ListingCard/ListingCard";
import Loading from "@/components/Loading/Loading";
import ListSortByDropdown from "@/components/SortByDropdown/ListingSortByDropdown";
import SortByDropdown from "@/components/SortByDropdown/SortByDropdown";
import FilterLinesIcon from "@/components/ui/FilterLinesIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useClientServiceListings } from "@/hooks/react-qurey/query-hooks/ClientServiceListings.hook";
import assets from "@/json/assets";
import CloseButton from "@/json/icons/CloseButton";
import { serviceList } from "@/json/mock/serviceList.mock";
import { ClientserviceLists } from "@/typescript/Interfaces/clientservicelisting.interfaces";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Listing() {
  const [sidebarOpen, setSidebarOpne] = useState(false);
  const handelOpenFilter = () => {
    setSidebarOpne(true);
  };
  const handelCloseFilter = () => {
    setSidebarOpne(false);
  };
  // Client Service Listing API handle
  const [page, setPage] = useState<Number>(1);
  const [limit, setLimit] = useState<Number>(10);
  const [categoryid, setCategoryid] = useState<string[]>([]);
  const [subcategoryid, setsubCategoryid] = useState<string[]>([]);
  // console.log("Cat 1:", categoryid, "Cat 2:", subcategoryid);
  const [minprice, setMinprice] = useState<any>(null);
  const [maxprice, setMaxprice] = useState<any>(null);
  const [locatiionvalue, setLocationvalue] = useState<any>("");
  const [ratingcount, setRatingCounts] = useState<any>(0);
  const [showaviabilitystatus, setShowaviabilitystatus] =
    useState<Boolean>(false);
  const [Filterdate, setFilterdate] = useState<any>(null);
  const [Filtertime, setFiltertime] = useState<any>(null);

  const [sortedorder, setSortedorder] = useState<string | null>("desc");
  const [fieldstatus, setFieldstatus] = useState<string | null>("rating");

  const [clientservicelists, setClientservicelists] = useState<any>([]);

  const { mutate: clientservicelistingdetails, isLoading: servicelistloading } =
    useClientServiceListings();

  const handleCategoryChange = (catid: string[]) => {
    setCategoryid(catid);
  };

  const handleMinPricechange = (minpricevalue: any) => {
    setMinprice(minpricevalue);
  };

  const handleMaxPricechange = (maxpricevalue: any) => {
    setMaxprice(maxpricevalue);
  };

  const handleSubCategoryChange = (catid: string[]) => {
    setsubCategoryid(catid);
  };

  const handleLocationchange = (location: any) => {
    setLocationvalue(location);
  };

  const handleRatingcountchange = (rating: any) => {
    setRatingCounts(rating);
  };

  const handlechoosendatechange = (date: any) => {
    setFilterdate(date);
  };
  const handlechoosentimechange = (time: any) => {
    setFiltertime(time);
  };

  const handlesortedorderchange = (
    fieldstatusvalue: string,
    sortedordervalue: string
  ) => {
    setFieldstatus(fieldstatusvalue);
    setSortedorder(sortedordervalue);
  };

  const handlepricerange = () => {
    setMaxprice(null);
    setMinprice(null);
  };
  const handleratingremove = () => {
    setRatingCounts(0);
  };
  const handleshowaviablityremove = () => {
    setShowaviabilitystatus(false);
  };

  const handleAviablechangechange = (status: any) => {
    setShowaviabilitystatus(status);
  };

  const FetchClieentServiceListing = async () => {
    clientservicelistingdetails(
      {
        page: page,
        limit: limit,
        sort: {
          order: sortedorder,
          field: fieldstatus,
        },
        category_id: categoryid,
        sub_category_id: subcategoryid,
        min_price: parseInt(minprice),
        max_price: parseInt(maxprice),
        address: locatiionvalue,
        rating: ratingcount,
        date: Filterdate,
        time: Filtertime,
        show_all_professionals: showaviabilitystatus,
      },
      {
        onSuccess: (response: any) => {
          console.log("res", response?.data);
          const { data, pages } = response?.data ?? {};
          setClientservicelists(response?.data);
        },
        onError: () => {
          console.log("error Found while fetching the service lists");
        },
      }
    );
  };

  useEffect(() => {
    FetchClieentServiceListing();
  }, [
    page,
    limit,
    categoryid,
    subcategoryid,
    locatiionvalue,
    minprice,
    maxprice,
    showaviabilitystatus,
    ratingcount,
    sortedorder,
    fieldstatus,
    Filterdate,
    Filtertime,
  ]);

  console.log("clientservicelists", clientservicelists);
  console.log("location in Parent", locatiionvalue);

  return (
    <div
      className={`{ relative overflow-hidden ${
        sidebarOpen === true ? "lg:!h-[100vh] lg:!overflow-hidden" : ""
      }`}
    >
      <div className="relative lg:hidden px-4">
        <figure className="w-full h-full ">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src={assets.bgImgwraps2}
            alt="img"
            width={1920}
            height={132}
          />
        </figure>
      </div>
      <div
        className={`{ w-full h-[100vh] fixed bg-[rgba(0,0,0,0.2)] hidden left-0 top-0 z-[10]} ${
          sidebarOpen === true ? "lg:!block" : ""
        }`}
      ></div>
      <div
        className={`{ lg:fixed lg:hidden bg-white lg:w-full lg:top-0 lg:left-0 lg:z-[11] lg:h-[100vh] lg::bg-white} ${
          sidebarOpen === true
            ? "lg:translate-x-[0%] lg:!block"
            : "lg:translate-x-[-100%]"
        }`}
      >
        <CommonSearchComponentWithFilter
          category_id={handleCategoryChange}
          subcategory_id={handleSubCategoryChange}
          closeButton={handelCloseFilter}
          locationset={handleLocationchange}
          minpricechange={handleMinPricechange}
          maxpricechange={handleMaxPricechange}
          ratingChange={handleRatingcountchange}
          showAviablityStatus={handleAviablechangechange}
          datehandlechange={handlechoosendatechange}
          timehandlechange={handlechoosentimechange}
          minp={minprice}
          maxp={maxprice}
          ratingreset={ratingcount}
        />
      </div>

      <Container>
        <div className="pt-[80px] pb-[80px] lg:py-8 ">
          {/* Filter Badge Design Start Here */}
          <div className="flex overflow-auto w-full lg:mr-[-16px] ">
            <Badge
              variant="outline"
              className="bg-white border-[#F4F4F5] mr-4 py-2 px-4 font-normal text-sm break-normal lg:flex justify-between hidden"
            >
              <Button
                variant={null}
                className="p-0 h-auto mr-2"
                onClick={handelOpenFilter}
              >
                <FilterLinesIcon />
              </Button>
              Filter
            </Badge>
            {!!minprice && !!maxprice && (
              <Badge
                variant="outline"
                className="bg-[#F4F4F5] border-[#F4F4F5] mr-4 py-2 px-4 font-normal text-sm break-normal flex justify-between lg:min-w-[280px] md:min-w-[230px]"
              >
                Price range: ${minprice}-${maxprice}{" "}
                <Button
                  variant={null}
                  className="p-0 h-auto ml-2"
                  onClick={handlepricerange}
                >
                  <CloseButton />
                </Button>
              </Badge>
            )}
            {!!ratingcount && (
              <Badge
                variant="outline"
                className="bg-[#F4F4F5] border-[#F4F4F5] mr-4 font-normal text-sm flex justify-between lg:min-w-[260px] md:min-w-[180px]"
              >
                Rating: {ratingcount} start and up
                <Button
                  variant={null}
                  className="p-0 h-auto ml-2"
                  onClick={handleratingremove}
                >
                  <CloseButton />
                </Button>
              </Badge>
            )}

            {!!showaviabilitystatus && (
              <Badge
                variant="outline"
                className="bg-[#F4F4F5] border-[#F4F4F5] font-normal text-sm flex justify-between lg:min-w-[280px] md:min-w-[260px]"
              >
                Availability: show all professionals
                <Button
                  variant={null}
                  className="p-0 h-auto ml-2"
                  onClick={handleshowaviablityremove}
                >
                  <CloseButton />
                </Button>
              </Badge>
            )}
          </div>
          {/* Filter Badge Design Start Here */}

          <div className="relative pt-8">
            <div className="relative flex justify-between">
              {/* <p className="text-sm text-textgray">Result: 2,087 services</p> */}
              <p className="text-sm text-textgray">
                Result: {clientservicelists?.data?.length} services
              </p>
              <div className="flex items-center justify-start min-w-[230px] sm:hidden">
                <p className="text-textgray w-[40%]">Sort by : </p>
                <ListSortByDropdown sortby={handlesortedorderchange} />
              </div>
              <div className="hidden sm:block">
                <ListSortByDropdown
                  sortby={handlesortedorderchange}
                  hideDropdown
                />
              </div>
            </div>
          </div>
          {/* All Lists */}

          {servicelistloading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              {clientservicelists?.data?.length > 0 ? (
                <>
                  <div className="grid grid-cols-3 gap-6 mt-6 lg:grid-cols-2 md:grid-cols-1 ">
                    {clientservicelists?.data?.map(
                      (item: ClientserviceLists) => {
                        // Filter and get the lowest price
                        const lowestPrice = Math.min(...item.package_pricing);

                        return (
                          <div key={item._id}>
                            <ClientServiceListingCard
                              asPath={item._id}
                              availablenow={true}
                              showaviability={item?.current_availability}
                              listingImage={
                                item.images[0] || assets?.noprofileimage
                              }
                              ImageHeight={"197px"}
                              ImageWidth={"410px"}
                              clientImg={item?.vendor_data?.profilePicture}
                              listTitle={item.title}
                              rattedPerson={item?.rating_data?.total_count}
                              rattingvalue={item?.rating_data?.avg_rating}
                              userName={item?.vendor_data?.fullName}
                              listingText={item.description}
                              priceText={lowestPrice}
                              isFavorite={item?.is_favorite}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[32px] text-textgray font-satoshi_medium text-center w-full mt-5">
                    No Data Found
                  </p>
                </>
              )}
            </>
          )}
          {/* {clientservicelists?.data?.map(
              (item: ClientserviceLists, index: number) => (
                <div key={index}>
                  <ClientServiceListingCard
                    availablenow={true}
                    showaviability={true}
                    listingImage={item.images[0] || assets?.noprofileimage}
                    ImageHeight={"197px"}
                    ImageWidth={"410px"}
                    clientImg={item?.vendor_data?.profilePicture}
                    listTitle={item.title}
                    rattedPerson={"45"}
                    rattingvalue={"5"}
                    userName={item?.vendor_data?.fullName}
                    listingText={item.description}
                    priceText={item.package_pricing[0]}
                  />
                </div>
              )
            )} */}
          {/* {serviceList.map((item, index) => (
              <div key={index}>
                <ClientServiceListingCard
                  availablenow={item.availablenow}
                  showaviability={item.showaviability}
                  listingImage={item.listingimg}
                  ImageHeight={"197px"}
                  ImageWidth={"410px"}
                  clientImg={item.clientImg}
                  listTitle={item.listTitle}
                  rattedPerson={item.rattedPerson}
                  rattingvalue={item.rattingvalue}
                  userName={item.userName}
                  listingText={item.listingText}
                  priceText={item.priceText}
                />
              </div>
            ))} */}
        </div>
      </Container>
    </div>
  );
}
