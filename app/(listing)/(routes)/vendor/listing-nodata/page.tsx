import Container from "@/components/Container";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import PluseBtnIcon2 from "@/json/icons/PluseBtnIcon2";
export default function ListingNoData() {
  return (
    <div className="relative">
      <Container>
        <div className="flex justify-between w-full mb-8 pt-10">
          <h2 className="md:text-[30px]">Listings</h2>
          <Button
            variant="outline"
            className="flex items-center hover:bg-secondary md:text-[14px] md:px-2 md:py-2"
          >
            <i className="pr-1">
              <PluseBtnIcon />
            </i>
            Create listing
          </Button>
        </div>
        <div className="relative pt-20 pb-40 md:pb-24 md:pt-14">
          <div className="relative text-center">
            <h3 className="text-[18px] text-gray-900">
              There is no services created!
            </h3>
            <p className="text-[16px] text-gray-500 mb-4">
              Once you&#39;ve create a service, it&#39;ll be right
              <br /> here for you.
            </p>
            <Button
              variant="outline"
              className=" bg-gray-900 !px-[28px] h-auto !py-[12px] md:!py-[8px] md:!px-[20px] flex items-center text-white justify-center hover:bg-secondary mx-auto"
            >
              <i className="pr-1">
                <PluseBtnIcon2 />
              </i>
              Create listing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
