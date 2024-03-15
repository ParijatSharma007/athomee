import Container from "@/components/Container";
import ListCreationCard from "@/components/ListCreationCard/ListCreationCard";
import { Button } from "@/components/ui/button";
import ArrowBackIcon from "@/json/icons/ArrowBackIcon";

const CreateListing = () => {
  return (
    <div className="mt-10 lg:mt-6 md:overflow-hidden">
      <div className="relative hidden md:flex justify-between border-b border-solid border-gray-200 pb-4 px-4">
        <a
          href="#"
          className="inline-flex items-center transition-all text-base text-primary font-satoshi_medium hover:opacity-50"
        >
          <i className="pr-4">
            <ArrowBackIcon />
          </i>
          Get started
        </a>
      </div>
      <Container>
        <div className="flex justify-between mb-10 lg:mb-6 lg:flex-wrap">
          <div className="w-[30%] lg:w-full lg:mb-4 md:pt-6">
            <h1 className=" text-5xl font-satoshi_medium mb-4 text-gray-800 dark:text-white leading-[60px] lg:text-[30px] md:text-[24px] md:mb-2 md:leading-[1]">
              It&#39;s easy to get started on Casacall
            </h1>
            <p className="text-md leading-[24px] max-w-[294px]">
              Get acquainted with the steps to craft your own service!
            </p>
          </div>
          <div className="w-[65%] lg:w-full">
            <div className="grid grid-cols-2 md:grid-cols-1 content-center gap-8 lg:gap-4">
              <ListCreationCard
                step={1}
                title="Tell us about your service"
                subtitle="Provide a brief introduction to your service and its unique features."
                background="#FFF9D7"
              />
              <ListCreationCard
                step={2}
                title="Choose When You're Available"
                subtitle="Set the pricing options for your service and define when your service is available for customers."
                background="#F5EFFD"
              />
              <ListCreationCard
                step={3}
                title="Make it stand out"
                subtitle="Upload captivating photos that showcase your service and share any important information or requirements customers should be aware of."
                background="#E8FBDA"
              />
              <ListCreationCard
                step={4}
                title="Finish up and publish"
                subtitle="Take the final step to publish your service, making it visible to potential customers."
                background="#EDF6FF"
              />
            </div>
          </div>
        </div>
        <div className="flex px-20 lg:px-0 py-6 lg:py-4 justify-end sticky bottom-0 bg-white md:pb-6 md:relative">
          <Button
            variant="outline"
            className="mr-4 rounded-full font-satoshi_medium md:hidden"
          >
            Go back
          </Button>
          <Button
            variant="default"
            className=" rounded-full font-satoshi_medium md:w-full"
          >
            Get started
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CreateListing;
