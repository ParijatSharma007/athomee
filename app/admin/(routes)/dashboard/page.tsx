/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CommonHeader from "@/components/CommonHeader/CommonHeader";
import Container from "@/components/Container";
import ComissionGraph from "@/components/DashboardGraph/ComissionGraph";
import ReservationGraph from "@/components/DashboardGraph/ReservationGraph";
import RevenueListGraph from "@/components/DashboardGraph/RevenueGraph";
import ListingGraph from "@/components/DashboardGraph/TotalLisitinggraph";
import Trafficgraph from "@/components/DashboardGraph/Trafficgraph";
import UserGraph from "@/components/DashboardGraph/UserGraph";
import VendorsGraph from "@/components/DashboardGraph/VendorsGraph";
import Loading from "@/components/Loading/Loading";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CommissionGraphAPILists,
  FetchReservationGraph,
  FetchReservationLists,
  FetchServiceGraphLists,
  FetchServicesLsisting,
  FetchUserListsbyGraph,
  FetchVendorsListsbyGraph,
  FetchrevenueGraphLists,
  FetchtrafficGraphLists,
  TopcategoryAPIFunc,
  userListbytype,
} from "@/hooks/react-qurey/query-hooks/adminDashboard.hooks";
import assets from "@/json/assets";
import IncrementIcon from "@/json/icons/IncrementIcon";
import { TopCategoryData } from "@/typescript/Interfaces/admindashboard.interfaces";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function page() {
  // Initial States
  const [userlistSelector, setUserlistsselector] = useState<string>("day");
  const [servicestype, setServicesType] = useState<string>("day");
  const [reservationtype, setReservationtype] = useState<string>("day");
  const [GraphUsertype, setGraphUsertype] = useState<string>("today");
  const [GraphServicetype, setGraphServicetype] = useState<string>("today");
  const [Graphrevenuetype, setGraphRevenuetype] = useState<string>("today");
  const [Graphtraffictype, setGraphTraffictype] = useState<string>("30min");
  const [GraphCommisionype, setGraphCommisionype] = useState<string>("today");
  const [GraphVendorype, setGraphVendorype] = useState<string>("today");
  const [GraphReservationype, setGraphreservationype] =
    useState<string>("today");

  // API Handle States
  const [userListsbytype, setUserlistbytype] = useState<any>({});
  const [Listingservices, setListingservices] = useState<any>({});
  const [reservations, setReservations] = useState<any>({});
  const [userListbyGraphs, setUserListsbyGraph] = useState<any>([]);
  const [serviceListGraph, setServiceListGraph] = useState<any>([]);
  const [revenueListGraph, setRevenueListGraph] = useState<any>([]);
  const [trafficListGraph, setTrafficListGraph] = useState<any>([]);
  const [CommisionListGraph, setCommisionListGraph] = useState<any>([]);
  const [vendorsListGraph, setVendrorsListGraph] = useState<any>([]);
  const [ReservationListGraph, setReservationListGraph] = useState<any>([]);

  const { mutate: userlistbytype, isLoading: userlistbytypeloading } =
    userListbytype();
  const { mutate: serviceslists, isLoading: serviceslistsloading } =
    FetchServicesLsisting();
  const { mutate: reservationlists, isLoading: reservationloading } =
    FetchReservationLists();
  const { mutate: Totaluserlists, isLoading: Totaluserlistsloading } =
    FetchUserListsbyGraph();
  const { mutate: totalservicelists, isLoading: totalservicelistsloading } =
    FetchServiceGraphLists();
  const { mutate: totalrevenuelists, isLoading: totalrevenuelistloading } =
    FetchrevenueGraphLists();
  const { mutate: totaltrafficlists, isLoading: totaltrafficlistsloading } =
    FetchtrafficGraphLists();
  const { mutate: totalcommisionlists, isLoading: totalcommisionlistsloading } =
    CommissionGraphAPILists();
  const { mutate: totalvendorslists, isLoading: totalvendorlistsloading } =
    FetchVendorsListsbyGraph();
  const {
    mutate: totalreservationgraphlists,
    isLoading: totalreservationgraphlistsloading,
  } = FetchReservationGraph();

  const {
    data: topcategory,
    isLoading: topcategoryLoading,
    isError: topcategoryError,
  } = useQuery({
    queryKey: ["top-category"],
    queryFn: () => TopcategoryAPIFunc(),
  });

  // User Lists API calling Function
  const Fetchuserlistbytype = async () => {
    userlistbytype(userlistSelector, {
      onSuccess: (response: any) => {
        setUserlistbytype(response?.data?.data);
      },
      onError: () => {},
    });
  };

  const FethcservicelistsingFunc = async () => {
    serviceslists(servicestype, {
      onSuccess: (response: any) => {
        setListingservices(response?.data?.data);
      },
      onError: () => {},
    });
  };

  const Fetchreservationlists = async () => {
    reservationlists(reservationtype, {
      onSuccess: (response: any) => {
        setReservations(response?.data?.data);
      },
      onError: () => {},
    });
  };

  const FetchTotalUserLists = async () => {
    Totaluserlists(GraphUsertype, {
      onSuccess: (response: any) => {
        setUserListsbyGraph(response?.data);
      },
      onError: () => {},
    });
  };
  const FetchTotalVendorsLists = async () => {
    totalvendorslists(GraphVendorype, {
      onSuccess: (response: any) => {
        setVendrorsListGraph(response?.data);
      },
      onError: () => {},
    });
  };

  const FetchTotalServicesLists = async () => {
    totalservicelists(GraphServicetype, {
      onSuccess: (response: any) => {
        setServiceListGraph(response?.data);
      },
      onError: () => {},
    });
  };

  const FetchTotalRevenueLists = async () => {
    totalrevenuelists(Graphrevenuetype, {
      onSuccess: (response: any) => {
        setRevenueListGraph(response?.data);
      },
      onError: () => {},
    });
  };

  const FetchTotalTrafficLists = async () => {
    totaltrafficlists(Graphtraffictype, {
      onSuccess: (response: any) => {
        setTrafficListGraph(response?.data);
      },
      onError: () => {},
    });
  };

  const FetchTotalCommisionLists = async () => {
    totalcommisionlists(GraphCommisionype, {
      onSuccess: (response: any) => {
        setCommisionListGraph(response?.data);
      },
      onError: () => {},
    });
  };

  const FetchReservationGraphLists = async () => {
    totalreservationgraphlists(GraphReservationype, {
      onSuccess: (response: any) => {
        setReservationListGraph(response?.data);
      },
      onError: () => {},
    });
  };
  // Custom Functions
  const handlelistType = async (type: string) => {
    setServicesType(type);
    // FethcservicelistsingFunc();
  };

  const handleUserListtype = async (type: string) => {
    setUserlistsselector(type);
    // Fetchuserlistbytype();
  };

  const handleReservationType = async (type: string) => {
    setReservationtype(type);
    // Fetchreservationlists();
  };

  const handleRevenueGraphType = async (type: string) => {
    setGraphRevenuetype(type);
    // FetchTotalRevenueLists();
  };
  const handleTrafficType = async (type: string) => {
    setGraphTraffictype(type);
    // FetchTotalTrafficLists();
  };

  const handleTotalServicesType = async (type: string) => {
    setGraphServicetype(type);
    // FetchTotalServicesLists();
  };

  const handleGraphuserType = async (type: string) => {
    setGraphUsertype(type);
    // FetchTotalUserLists();
  };

  const handleCommisionGraphtype = async (type: string) => {
    setGraphCommisionype(type);
  };

  const handleVendorGraphtype = async (type: string) => {
    setGraphVendorype(type);
  };
  const handleReservatipnGraphType = async (type: string) => {
    setGraphreservationype(type);
  };

  useEffect(() => {
    Fetchuserlistbytype();
  }, [userlistSelector]);

  useEffect(() => {
    FethcservicelistsingFunc();
  }, [servicestype]);

  useEffect(() => {
    Fetchreservationlists();
  }, [reservationtype]);

  useEffect(() => {
    FetchTotalServicesLists();
  }, [GraphServicetype]);

  useEffect(() => {
    FetchTotalRevenueLists();
  }, [Graphrevenuetype]);

  useEffect(() => {
    FetchTotalTrafficLists();
  }, [Graphtraffictype]);

  useEffect(() => {
    FetchTotalUserLists();
  }, [GraphUsertype]);

  useEffect(() => {
    FetchTotalCommisionLists();
  }, [GraphCommisionype]);

  useEffect(() => {
    FetchTotalVendorsLists();
  }, [GraphVendorype]);

  useEffect(() => {
    FetchReservationGraphLists();
  }, [GraphReservationype]);

  // Filter Graph data For Total Users
  const categories = userListbyGraphs?.data?.map((item: any) => item.name);
  const seriesData = userListbyGraphs?.data?.map(
    (item: any) => item.total_count
  );

  // Filter Graph data For Total Vendors Graph Data
  const vendorcategories = vendorsListGraph?.data?.map(
    (item: any) => item.name
  );
  const vendorseriesData = vendorsListGraph?.data?.map(
    (item: any) => item.total_count
  );

  // Filter Graph data For Total Listing
  const listingcategories = serviceListGraph?.data?.map(
    (item: any) => item.name
  );
  const listingseriesData = serviceListGraph?.data?.map(
    (item: any) => item.total_count
  );

  // Filter Graph data For Total Revenue Graph data
  const revenuecategories = revenueListGraph?.data?.map(
    (item: any) => item.name
  );
  const revenueseriesData = revenueListGraph?.data?.map(
    (item: any) => item.amount
  );

  // Filter Graph data For Total Traffic Graph data
  const trafficcategories = trafficListGraph?.data?.map(
    (item: any) => item.date_time
  );
  const trafficseriesData = trafficListGraph?.data?.map(
    (item: any) => item.totalUsers
  );

  // Filter Graph data For Total Comission Graph data
  const comssioncategories = CommisionListGraph?.data?.map(
    (item: any) => item.name
  );
  const comssionseriesData = CommisionListGraph?.data?.map(
    (item: any) => item.amount
  );
  // Filter Graph data For Total Comission Graph data
  const reservationcategories = ReservationListGraph?.data?.map(
    (item: any) => item.name
  );
  const reservationseriesData = ReservationListGraph?.data?.map(
    (item: any) => item.total_count
  );

  return (
    <div className="py-10">
      <Container>
        <CommonHeader title="Dashboard" className="text-[30px] mb-8" />
        <div className="flex flex-wrap -m-4 pb-8">
          <div className="w-1/3 p-4 lg:w-full">
            {/* New Listing */}
            <div className="p-6 rounded-xl mb-8 cmn_box xs:p-4 min-h-[155px]">
              <h3 className="text-lg -mb-[26px] xs:mb-2">New listings</h3>
              <Tabs defaultValue="day" className="w-full mb-5">
                <TabsList className="flex w-full flex-wrap justify-end mb-4">
                  <TabsTrigger
                    value="day"
                    onClick={() => {
                      handlelistType("day");
                    }}
                    className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                  >
                    Day
                  </TabsTrigger>
                  <TabsTrigger
                    value="month"
                    onClick={() => {
                      handlelistType("month");
                    }}
                    className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                  >
                    Month
                  </TabsTrigger>
                </TabsList>
                <div>
                  <div className="flex items-center flex-wrap my-2">
                    {serviceslistsloading ? (
                      <>
                        <Loading size="small" />
                      </>
                    ) : (
                      <>
                        <h2 className="text-4xl">
                          {Listingservices?.total_count}
                        </h2>
                        <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                          {Listingservices?.growth_percentage}%
                          <i className="inline-flex items-center justify-center ml-1">
                            {" "}
                            <IncrementIcon />
                          </i>
                        </Badge>
                      </>
                    )}
                  </div>
                </div>
                {/* <TabsContent value="month">
                  <div className="flex items-center flex-wrap my-2">
                    <h2 className="text-4xl">564</h2>
                    <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                      20%
                      <i className="inline-flex items-center justify-center ml-1">
                        {" "}
                        <IncrementIcon />
                      </i>
                    </Badge>
                  </div>
                </TabsContent> */}
              </Tabs>
            </div>
            {/* New users */}
            <div className="p-6 rounded-xl cmn_box xs:p-4 min-h-[155px]">
              <h3 className="text-lg -mb-[26px] xs:mb-2">New user</h3>
              <Tabs defaultValue="day" className="w-full mb-5">
                <TabsList className="flex w-full flex-wrap justify-end mb-4">
                  <TabsTrigger
                    value="day"
                    onClick={() => {
                      handleUserListtype("day");
                    }}
                    className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                  >
                    Day
                  </TabsTrigger>
                  <TabsTrigger
                    value="month"
                    onClick={() => {
                      handleUserListtype("month");
                    }}
                    className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                  >
                    Month
                  </TabsTrigger>
                </TabsList>
                <div>
                  <div className="flex items-center flex-wrap my-2">
                    {userlistbytypeloading ? (
                      <>
                        <Loading size="small" />
                      </>
                    ) : (
                      <>
                        <h2 className="text-4xl">
                          {userListsbytype?.total_count}
                        </h2>
                        <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                          {userListsbytype?.growth_percentage}%
                          <i className="inline-flex items-center justify-center ml-1">
                            {" "}
                            <IncrementIcon />
                          </i>
                        </Badge>
                      </>
                    )}
                  </div>
                </div>
                {/* <TabsContent value="month">
                  <div className="flex items-center flex-wrap my-2">
                    <h2 className="text-4xl">146</h2>
                    <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                      30%
                      <i className="inline-flex items-center justify-center ml-1">
                        {" "}
                        <IncrementIcon />
                      </i>
                    </Badge>
                  </div>
                </TabsContent> */}
              </Tabs>
            </div>
          </div>
          {/* Total Users */}
          <div className="w-1/3 p-4 lg:w-1/2 sm:w-full">
            <div className="p-6 rounded-xl cmn_box xs:p-4 min-h-[342px]">
              <div className="-mb-[72px] xs:mb-2">
                <h4 className="text-[18px] mb-2 ">Total Users</h4>
                {Totaluserlistsloading ? (
                  <>
                    <h3 className="text-[36px]">0</h3>
                  </>
                ) : (
                  <>
                    <h3 className="text-[36px]">
                      {userListbyGraphs?.total_users || 0}
                    </h3>
                  </>
                )}
              </div>
              <Tabs defaultValue="today" className="w-full">
                <TabsList className="flex w-full flex-wrap justify-end mb-[50px]">
                  <TabsTrigger
                    value="today"
                    onClick={() => {
                      handleGraphuserType("today");
                    }}
                    className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                  >
                    Today
                  </TabsTrigger>
                  <TabsTrigger
                    value="day"
                    onClick={() => {
                      handleGraphuserType("day");
                    }}
                    className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                  >
                    Day
                  </TabsTrigger>
                  <TabsTrigger
                    value="month"
                    onClick={() => {
                      handleGraphuserType("month");
                    }}
                    className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                  >
                    Month
                  </TabsTrigger>

                  <TabsTrigger
                    value="year"
                    onClick={() => {
                      handleGraphuserType("year");
                    }}
                    className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                  >
                    Year
                  </TabsTrigger>
                </TabsList>
                {Totaluserlistsloading ? (
                  <div>
                    <Loading size="small" />
                  </div>
                ) : (
                  <>
                    {userListbyGraphs?.data?.length > 0 ? (
                      <>
                        <UserGraph
                          categories={categories}
                          seriesData={seriesData}
                          GraphUsertype={GraphUsertype}
                        />
                      </>
                    ) : (
                      <>
                        <div>
                          <h6 className="text-[18px] mb-4 font-satoshi_medium">
                            No results...
                          </h6>
                          <p className=" text-gray-500 text-base">
                            There are currently no results for your request.
                          </p>
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* Three tabcontents from here */}
                {/* <TabsContent value="day" className="min-h-[342px] h-full">
                  <figure>
                    <Image
                      src={assets?.graph_image}
                      alt="graph image"
                      width={400}
                      height={250}
                      className="w-full"
                    />
                  </figure>
                </TabsContent>
                <TabsContent value="month" >
                  <figure>
                    <Image
                      src={assets?.graph_image}
                      alt="graph image"
                      width={400}
                      height={250}
                      className="w-full"
                    />
                  </figure>
                </TabsContent>
                <TabsContent value="year" className="min-h-[342px]">
                  <figure>
                    <Image
                      src={assets?.graph_image}
                      alt="graph image"
                      width={400}
                      height={250}
                      className="w-full"
                    />
                  </figure>
                </TabsContent> */}
                {/* Three tabcontents from here */}
              </Tabs>
            </div>
          </div>
          {/* Total Listing */}
          <div className="w-1/3 p-4 lg:w-1/2 sm:w-full">
            <div className="p-6 rounded-xl cmn_box xs:p-4 min-h-[342px]">
              <div className="-mb-[72px] xs:mb-2">
                <h4 className="text-[18px] mb-2">Total listings</h4>
                {totalservicelistsloading ? (
                  <>
                    <h3 className="text-[36px]">0</h3>
                  </>
                ) : (
                  <>
                    <h3 className="text-[36px]">
                      {serviceListGraph?.total_services || 0}
                    </h3>
                  </>
                )}
              </div>
              <Tabs defaultValue="today" className="w-full">
                <TabsList className="flex w-full flex-wrap justify-end mb-[50px]">
                  <TabsTrigger
                    value="today"
                    onClick={() => {
                      handleTotalServicesType("today");
                    }}
                    className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                  >
                    Today
                  </TabsTrigger>
                  <TabsTrigger
                    value="day"
                    onClick={() => {
                      handleTotalServicesType("day");
                    }}
                    className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                  >
                    Day
                  </TabsTrigger>
                  <TabsTrigger
                    value="month"
                    onClick={() => {
                      handleTotalServicesType("month");
                    }}
                    className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                  >
                    Month
                  </TabsTrigger>

                  <TabsTrigger
                    value="year"
                    onClick={() => {
                      handleTotalServicesType("year");
                    }}
                    className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                  >
                    Year
                  </TabsTrigger>
                </TabsList>
                {totalservicelistsloading ? (
                  <div>
                    <Loading size="small" />
                  </div>
                ) : (
                  <>
                    {serviceListGraph?.data?.length > 0 ? (
                      <>
                        <ListingGraph
                          categories={listingcategories}
                          seriesData={listingseriesData}
                          GraphUsertype={GraphServicetype}
                        />
                      </>
                    ) : (
                      <>
                        <div>
                          <h6 className="text-[18px] mb-4 font-satoshi_medium">
                            No results...
                          </h6>
                          <p className=" text-gray-500 text-base">
                            There are currently no results for your request.
                          </p>
                        </div>
                      </>
                    )}
                  </>
                )}
                {/* <TabsContent value="day">
                  <figure>
                    <Image
                      src={assets?.graph_image}
                      alt="graph image"
                      width={400}
                      height={250}
                      className="w-full"
                    />
                  </figure>
                </TabsContent>
                <TabsContent value="month">
                  <figure>
                    <Image
                      src={assets?.graph_image}
                      alt="graph image"
                      width={400}
                      height={250}
                      className="w-full"
                    />
                  </figure>
                </TabsContent>
                <TabsContent value="year">
                  <figure>
                    <Image
                      src={assets?.graph_image}
                      alt="graph image"
                      width={400}
                      height={250}
                      className="w-full"
                    />
                  </figure>
                </TabsContent> */}
              </Tabs>
            </div>
          </div>
        </div>
        {/* Reservation */}
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4 lg:w-full">
            <div className="flex flex-wrap -m-4">
              <div className="w-1/3 p-4 lg:w-full ">
                <div className="p-6 rounded-xl mb-8 cmn_box xs:p-4 md:mb-0  min-h-[342px]">
                  <h3 className="text-lg -mb-[26px] xs:mb-2">Reservations</h3>
                  <Tabs defaultValue="today" className="w-full">
                    <TabsList className="flex w-full flex-wrap justify-end mb-4">
                      <TabsTrigger
                        value="today"
                        onClick={() => {
                          handleReservationType("day");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Today
                      </TabsTrigger>
                      <TabsTrigger
                        value="month"
                        onClick={() => {
                          handleReservationType("month");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Month
                      </TabsTrigger>
                      <TabsTrigger
                        value="year"
                        onClick={() => {
                          handleReservationType("year");
                        }}
                        className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                      >
                        Year
                      </TabsTrigger>
                    </TabsList>
                    <div>
                      <div className="flex items-center flex-wrap mt-2 mb-4">
                        {reservationloading ? (
                          <>
                            <Loading size="small" />
                          </>
                        ) : (
                          <>
                            <h2 className="text-4xl">
                              {reservations?.total_count}
                            </h2>
                            <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                              {reservations?.growth_percentage}%
                              <i className="inline-flex items-center justify-center ml-1">
                                {" "}
                                <IncrementIcon />
                              </i>
                            </Badge>
                          </>
                        )}
                      </div>
                      <div className="p-4 rounded-xl border-gray-200 border ">
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200 text-sm text-gray-400">
                          <p>Top category</p>
                          <p className="text-end">Revenue</p>
                        </div>
                        {topcategoryLoading ? (
                          <>
                            <Loading size="small" />
                          </>
                        ) : (
                          <>
                            {topcategory?.data?.length > 0 ? (
                              <>
                                {topcategory?.data?.map(
                                  (item: TopCategoryData, index: number) => {
                                    return (
                                      <>
                                        <div
                                          key={index}
                                          className="flex items-center justify-between py-2 border-b border-gray-200 text-sm"
                                        >
                                          <p>{item?.category_name}</p>
                                          <p className="text-end">
                                            ${item?.amount}
                                          </p>
                                        </div>
                                      </>
                                    );
                                  }
                                )}
                              </>
                            ) : (
                              <>
                                <div>
                                  <h6 className="text-[18px] mb-4 font-satoshi_medium">
                                    No results...
                                  </h6>
                                  <p className=" text-gray-500 text-base">
                                    There are currently no results for your
                                    request.
                                  </p>
                                </div>
                              </>
                            )}
                          </>
                        )}
                        {/* <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm">
                      <p>Hair Styling and Cutting</p>
                      <p className="text-end">$7498.38</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm">
                      <p>Hair Styling and Cutting</p>
                      <p className="text-end">$6898.38</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 text-sm">
                      <p>Cleaning Services</p>
                      <p className="text-end">$5648.25</p>
                    </div> */}
                      </div>
                    </div>
                    {/* <TabsContent value="day">
                  <div className="flex items-center flex-wrap mt-2 mb-4">
                    <h2 className="text-4xl">65</h2>
                    <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                      10%
                      <i className="inline-flex items-center justify-center ml-1">
                        {" "}
                        <IncrementIcon />
                      </i>
                    </Badge>
                  </div>
                  <div className="p-4 rounded-xl border-gray-200 border">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200 text-sm text-gray-400">
                      <p>Top category</p>
                      <p className="text-end">Revenue</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm">
                      <p>Spa and Massage Therapy</p>
                      <p className="text-end">$10348.35</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm">
                      <p>Hair Styling and Cutting</p>
                      <p className="text-end">$7498.38</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm">
                      <p>Hair Styling and Cutting</p>
                      <p className="text-end">$6898.38</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 text-sm">
                      <p>Cleaning Services</p>
                      <p className="text-end">$5648.25</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="month">
                  <div className="flex items-center flex-wrap mt-2 mb-4">
                    <h2 className="text-4xl">65</h2>
                    <Badge className="bg-green-50 ml-3 text-green-500 border-[0.5px] border-green-100 py-1 px-2 font-satoshi_medium text-sm">
                      10%
                      <i className="inline-flex items-center justify-center ml-1">
                        {" "}
                        <IncrementIcon />
                      </i>
                    </Badge>
                  </div>
                  <div className="p-4 rounded-xl border-gray-200 border">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200 text-sm text-gray-400">
                      <p>Top category</p>
                      <p className="text-end">Revenue</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm">
                      <p>Spa and Massage Therapy</p>
                      <p className="text-end">$10348.35</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm">
                      <p>Hair Styling and Cutting</p>
                      <p className="text-end">$7498.38</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm">
                      <p>Hair Styling and Cutting</p>
                      <p className="text-end">$6898.38</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 text-sm">
                      <p>Cleaning Services</p>
                      <p className="text-end">$5648.25</p>
                    </div>
                  </div>
                </TabsContent> */}
                  </Tabs>
                </div>
              </div>
              <div className="w-1/3 p-4 lg:w-1/2 sm:w-full">
                <div className="p-6 rounded-xl cmn_box xs:p-4 min-h-[342px]">
                  <div className="-mb-[72px] xs:mb-2">
                    <h4 className="text-[18px] mb-2">Total Vendors</h4>
                    <h3 className="text-[36px]">
                      {totalvendorlistsloading ? (
                        <>0</>
                      ) : (
                        <>{vendorsListGraph?.total_users || 0}</>
                      )}
                    </h3>
                  </div>
                  <Tabs defaultValue="today" className="w-full">
                    <TabsList className="flex w-full flex-wrap justify-end mb-[50px]">
                      <TabsTrigger
                        value="today"
                        onClick={() => {
                          handleVendorGraphtype("today");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Today
                      </TabsTrigger>
                      <TabsTrigger
                        value="day"
                        onClick={() => {
                          handleVendorGraphtype("day");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Day
                      </TabsTrigger>
                      <TabsTrigger
                        value="month"
                        onClick={() => {
                          handleVendorGraphtype("month");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Month
                      </TabsTrigger>

                      <TabsTrigger
                        value="year"
                        onClick={() => {
                          handleVendorGraphtype("year");
                        }}
                        className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                      >
                        Year
                      </TabsTrigger>
                    </TabsList>
                    {totalvendorlistsloading ? (
                      <div>
                        <Loading size="small" />
                      </div>
                    ) : (
                      <>
                        {vendorsListGraph?.data?.length > 0 ? (
                          <>
                            <VendorsGraph
                              categories={vendorcategories}
                              seriesData={vendorseriesData}
                              GraphUsertype={GraphVendorype}
                            />
                          </>
                        ) : (
                          <>
                            <div>
                              <h6 className="text-[18px] mb-4 font-satoshi_medium">
                                No results...
                              </h6>
                              <p className=" text-gray-500 text-base">
                                There are currently no results for your request.
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {/* <TabsContent value="day">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="month">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="year">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent> */}
                  </Tabs>
                </div>
              </div>
              <div className="w-1/3 p-4 lg:w-1/2 sm:w-full">
                <div className="p-6 rounded-xl cmn_box xs:p-4 min-h-[342px]">
                  <div className="-mb-[72px] xs:mb-2">
                    <h4 className="text-[17px] mb-2 ">Total Reservations</h4>
                    <h3 className="text-[36px]">
                      {totalreservationgraphlistsloading ? (
                        <> 0</>
                      ) : (
                        <>{ReservationListGraph?.total_reservations || 0}</>
                      )}
                    </h3>
                  </div>
                  <Tabs defaultValue="today" className="w-full">
                    <TabsList className="flex w-full flex-wrap justify-end mb-[50px]">
                      <TabsTrigger
                        value="today"
                        onClick={() => {
                          handleReservatipnGraphType("today");
                        }}
                        className="text-sm font-satoshi_medium mr-[13px] text-gray-400 pb-2 rounded-none"
                      >
                        Today
                      </TabsTrigger>
                      <TabsTrigger
                        value="day"
                        onClick={() => {
                          handleReservatipnGraphType("day");
                        }}
                        className="text-sm font-satoshi_medium mr-[13px] text-gray-400 pb-2 rounded-none"
                      >
                        Day
                      </TabsTrigger>
                      <TabsTrigger
                        value="month"
                        onClick={() => {
                          handleReservatipnGraphType("month");
                        }}
                        className="text-sm font-satoshi_medium mr-[13px] text-gray-400 pb-2 rounded-none"
                      >
                        Month
                      </TabsTrigger>
                      <TabsTrigger
                        value="year"
                        onClick={() => {
                          handleReservatipnGraphType("year");
                        }}
                        className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                      >
                        Year
                      </TabsTrigger>
                    </TabsList>
                    {totalreservationgraphlistsloading ? (
                      <div>
                        <Loading size="small" />
                      </div>
                    ) : (
                      <>
                        {ReservationListGraph?.data?.length > 0 ? (
                          <>
                            <ReservationGraph
                              categories={reservationcategories}
                              seriesData={reservationseriesData}
                              GraphUsertype={GraphReservationype}
                            />
                          </>
                        ) : (
                          <>
                            <div>
                              <h6 className="text-[18px] mb-4 font-satoshi_medium">
                                No results...
                              </h6>
                              <p className=" text-gray-500 text-base">
                                There are currently no results for your request.
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {/* <TabsContent value="day">
                      <figure>
                        <Image
                          src={assets?.graph2}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="month">
                      <figure>
                        <Image
                          src={assets?.graph2}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="year">
                      <figure>
                        <Image
                          src={assets?.graph2}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent> */}
                  </Tabs>
                </div>
              </div>

              {/* Revenue */}
              <div className="w-1/3 p-4 lg:w-1/2 sm:w-full">
                <div className="p-6 rounded-xl cmn_box xs:p-4  min-h-[342px]">
                  <div className="-mb-[72px] xs:mb-2">
                    <h4 className="text-[18px] mb-2">Revenue</h4>
                    <h3 className="text-[36px]">
                      {totalrevenuelistloading ? (
                        <>0</>
                      ) : (
                        <>{revenueListGraph?.total_revenues || 0}</>
                      )}
                    </h3>
                  </div>
                  <Tabs defaultValue="today" className="w-full">
                    <TabsList className="flex w-full flex-wrap justify-end mb-[50px]">
                      <TabsTrigger
                        value="today"
                        onClick={() => {
                          handleRevenueGraphType("today");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Today
                      </TabsTrigger>
                      <TabsTrigger
                        value="day"
                        onClick={() => {
                          handleRevenueGraphType("day");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Day
                      </TabsTrigger>
                      <TabsTrigger
                        value="month"
                        onClick={() => {
                          handleRevenueGraphType("month");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Month
                      </TabsTrigger>

                      <TabsTrigger
                        value="year"
                        onClick={() => {
                          handleRevenueGraphType("year");
                        }}
                        className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                      >
                        Year
                      </TabsTrigger>
                    </TabsList>
                    {totalrevenuelistloading ? (
                      <>
                        <div>
                          <Loading size="small" />
                        </div>
                      </>
                    ) : (
                      <>
                        {revenueListGraph?.data?.length > 0 ? (
                          <>
                            <div>
                              <RevenueListGraph
                                categories={revenuecategories}
                                seriesData={revenueseriesData}
                                GraphUsertype={Graphrevenuetype}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <h6 className="text-[18px] mb-4 font-satoshi_medium">
                                No results...
                              </h6>
                              <p className=" text-gray-500 text-base">
                                There are currently no results for your request.
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {/* <TabsContent value="day">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="month">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="year">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent> */}
                  </Tabs>
                </div>
              </div>
              {/* <div className="w-1/2 p-4 lg:w-1/2 sm:w-full">
                <div className="p-6 rounded-xl cmn_box xs:p-4 ">
                  <div className="-mb-[72px] xs:mb-2">
                    <h4 className="text-[18px] mb-2">Total Revenue</h4>
                    <h3 className="text-[36px]">8034</h3>
                  </div>
                  <Tabs defaultValue="today" className="w-full">
                    <TabsList className="flex w-full flex-wrap justify-end mb-[50px]">
                      <TabsTrigger
                        value="today"
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Today
                      </TabsTrigger>
                      <TabsTrigger
                        value="day"
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Day
                      </TabsTrigger>
                      <TabsTrigger
                        value="month"
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Month
                      </TabsTrigger>

                      <TabsTrigger
                        value="year"
                        className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                      >
                        Year
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="today">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="day">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="month">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="year">
                      <figure>
                        <Image
                          src={assets?.graph_image}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                  </Tabs>
                </div>
              </div> */}

              {/* Traffic */}
              <div className="w-1/3 p-4 lg:w-1/2 sm:w-full">
                <div className="p-6 rounded-xl cmn_box xs:p-4  min-h-[342px]">
                  <div className="-mb-[72px] xs:mb-2">
                    <h4 className="text-[18px] mb-2">Traffic</h4>
                    <h3 className="text-[36px]">
                      {totaltrafficlistsloading ? (
                        <>0</>
                      ) : (
                        <>{trafficListGraph?.total_traffic || 0}</>
                      )}
                    </h3>
                  </div>
                  <Tabs defaultValue="today" className="w-full">
                    <TabsList className="flex w-full flex-wrap justify-end mb-[50px]">
                      <TabsTrigger
                        value="today"
                        onClick={() => {
                          handleTrafficType("30min");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        30 Min
                      </TabsTrigger>
                      {/* <TabsTrigger
                        value="day"
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Day
                      </TabsTrigger> */}
                      <TabsTrigger
                        value="month"
                        onClick={() => {
                          handleTrafficType("month");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Month
                      </TabsTrigger>
                      {/* <TabsTrigger
                        value="year"
                        className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                      >
                        Year
                      </TabsTrigger> */}
                    </TabsList>
                    {totaltrafficlistsloading ? (
                      <>
                        <div>
                          <Loading size="small" />
                        </div>
                      </>
                    ) : (
                      <>
                        {trafficListGraph?.data?.length > 0 ? (
                          <>
                            <div>
                              <Trafficgraph
                                categories={trafficcategories}
                                seriesData={trafficseriesData}
                                GraphUsertype={Graphtraffictype}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <h6 className="text-[18px] mb-4 font-satoshi_medium">
                                No results...
                              </h6>
                              <p className=" text-gray-500 text-base">
                                There are currently no results for your request.
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {/* <TabsContent value="day">
                      <figure>
                        <Image
                          src={assets?.graph2}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="month">
                      <figure>
                        <Image
                          src={assets?.graph2}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="year">
                      <figure>
                        <Image
                          src={assets?.graph2}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent> */}
                  </Tabs>
                </div>
              </div>
              <div className="w-1/3 p-4 lg:w-1/2 sm:w-full">
                <div className="p-6 rounded-xl cmn_box xs:p-4 min-h-[342px]">
                  <div className="-mb-[72px] xs:mb-2">
                    <h4 className="text-[18px] mb-2">Total Comission</h4>
                    <h3 className="text-[36px]">
                      {totalcommisionlistsloading ? (
                        <>0</>
                      ) : (
                        <>{CommisionListGraph?.total_revenues || 0}</>
                      )}
                    </h3>
                  </div>
                  <Tabs defaultValue="today" className="w-full">
                    <TabsList className="flex w-full flex-wrap justify-end mb-[50px]">
                      <TabsTrigger
                        value="today"
                        onClick={() => {
                          handleCommisionGraphtype("today");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Today
                      </TabsTrigger>
                      <TabsTrigger
                        value="day"
                        onClick={() => {
                          handleCommisionGraphtype("day");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Day
                      </TabsTrigger>
                      <TabsTrigger
                        value="month"
                        onClick={() => {
                          handleCommisionGraphtype("month");
                        }}
                        className="text-sm font-satoshi_medium mr-[15px] text-gray-400 pb-2 rounded-none"
                      >
                        Month
                      </TabsTrigger>
                      <TabsTrigger
                        value="year"
                        onClick={() => {
                          handleCommisionGraphtype("year");
                        }}
                        className="text-sm font-satoshi_medium text-gray-400 pb-2 rounded-none"
                      >
                        Year
                      </TabsTrigger>
                    </TabsList>
                    {totalcommisionlistsloading ? (
                      <>
                        <div>
                          <Loading size="small" />
                        </div>
                      </>
                    ) : (
                      <>
                        {CommisionListGraph?.data?.length > 0 ? (
                          <>
                            <div>
                              <ComissionGraph
                                categories={comssioncategories}
                                seriesData={comssionseriesData}
                                GraphUsertype={GraphCommisionype}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <h6 className="text-[18px] mb-4 font-satoshi_medium">
                                No results...
                              </h6>
                              <p className=" text-gray-500 text-base">
                                There are currently no results for your request.
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {/* <TabsContent value="day">
                      <figure>
                        <Image
                          src={assets?.graph2}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="month">
                      <figure>
                        <Image
                          src={assets?.graph2}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent>
                    <TabsContent value="year">
                      <figure>
                        <Image
                          src={assets?.graph2}
                          alt="graph image"
                          width={400}
                          height={250}
                          className="w-full"
                        />
                      </figure>
                    </TabsContent> */}
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
