"use client";
import Container from "@/components/Container";
import ClientSavedCard from "@/components/SavedCard/ClientSavedCard";
import SavedHeader from "@/components/SavedHeader/SavedHeader";
import { FetchClientProfile } from "@/hooks/react-qurey/query-hooks/ClientProfile.hook";
import { useClientSaveLists } from "@/hooks/react-qurey/query-hooks/ClientSaved.hook";
import { ClientSavedLists } from "@/typescript/Interfaces/clientsaved.interface";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function Index() {
  const [collectionlists, setCollectionlists] = useState<any>([]);
  const router = useRouter();
  const { data, isLoading } = useClientSaveLists((res: any) => {
    setCollectionlists(res);
  });

  // useEffect(() => {
  //   refetch();
  // }, []);

  console.log("collectionlists", collectionlists);

  const NavigateToDetails = (collectionID: string, collectionName: string) => {
    // router.push(
    //   `/saved/inside-collection?collectionID=${collectionID}?collectionName=${collectionName}`
    // );
  };

  return (
    <div className="py-24 xl:py-12 lg:py-8 sm:pt-6">
      <SavedHeader />
      <Container>
        <div className="flex flex-wrap -px-4  -py-6 md:py-4 ">
          {isLoading ? (
            <>
              <CircularProgress color="inherit" />
            </>
          ) : (
            <>
              {collectionlists?.data?.length > 0 ? (
                <>
                  {collectionlists?.data?.map(
                    (item: ClientSavedLists, key: number) => {
                      const servicecounts = item?.services_data?.length;
                      return (
                        <>
                          <div
                            className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2"
                            onClick={() =>
                              NavigateToDetails(item?._id, item?.name)
                            }
                          >
                            <ClientSavedCard
                              title={item?.name}
                              collectionID={item?._id}
                              TotalServiceNumber={servicecounts}
                              collectionName={item?.name}
                              coverImage1={item?.services_data[0]?.cover_image}
                              coverImage2={item?.services_data[1]?.cover_image}
                              coverImage3={item?.services_data[2]?.cover_image}
                              coverImage4={item?.services_data[3]?.cover_image}
                            />
                          </div>
                        </>
                      );
                    }
                  )}
                </>
              ) : (
                <>
                  <p>No Collection Found</p>
                </>
              )}
            </>
          )}
          {/* <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div> 
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div> */}
        </div>
      </Container>
    </div>
  );
}
