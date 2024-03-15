import Container from "@/components/Container";
import VendorListingCard from "@/components/VendorLisitngCard/VendorListingCard";
import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";

const Vendorlisting = () => {
  return (
    <div className="relative pb-10 md:pb-6">
      <Container>
        <div className="flex justify-between w-full mb-8 pt-10 md:pt-6">
          <h2 className="md:text-[30px]">Listings</h2>
          <Button
            variant="outline"
            className="flex items-center hover:bg-secondary outline-hover"
          >
            <i className="pr-1">
              <PluseBtnIcon />
            </i>
            Create listing
          </Button>
        </div>

        <div className="mb-4">
          <p className="text-sm uppercase font-satoshi_medium text-textgray">
            Drafts
          </p>
          <VendorListingCard draft />
          <VendorListingCard draftCompleted />
        </div>
        <div className="mb-4">
          <p className="text-sm uppercase font-satoshi_medium text-textgray">
            Listed
          </p>
          <VendorListingCard listed />
          <VendorListingCard listed />
          <VendorListingCard listed />
        </div>
        <div className="mb-4">
          <p className="text-sm uppercase font-satoshi_medium text-textgray">
            Inactive
          </p>
          <VendorListingCard inactive />
          <VendorListingCard inactive />
        </div>
      </Container>
    </div>
  );
};

export default Vendorlisting;
