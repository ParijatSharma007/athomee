import Container from "@/components/Container";
import SavedHeader from "@/components/SavedHeader/SavedHeader";
import { Button } from "@/components/ui/button";
import assets from "@/json/assets";
import Image from "next/image";

export default function Index() {
  return (
    <div className="py-24 lg:py-10 md:py-6">
      {/* <SavedHeader /> */}
      <Container>
        <div className="flex items-center justify-center py-32 lg:py-12">
          <div className="text-center">
            <Image
              alt=""
              width={64}
              height={64}
              src={assets.mainLogo}
              className="inline-block"
            />
            <h4 className="pt-6 pb-4">There is nothing here yet...</h4>
            <p className="pb-8">
              Get acquainted with various services from professionals and create
              your first collection.
            </p>
            <Button variant="default" className="rounded-[100px]">
              Start discovering
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
