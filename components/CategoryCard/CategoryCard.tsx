import Image from "next/image";
import Link from "next/link";

interface cardProps {
  image: string;
  title: string;
  description: string;
}

export default function CategoryCard({ description, image, title }: cardProps) {
  return (
    <div className="category_card">
      <Link
        href="#javascript:void(0)"
        className="flex items-center justify-center rounded-[12px] overflow-hidden "
      >
        <figure className="h-84 w-full">
          <Image
            src={image}
            alt="image"
            width={302}
            height={336}
            className="w-full h-full object-cover"
          />
        </figure>
      </Link>

      <div className="pt-7">
        <h3 className="mb-1 hover:text-secondary">
          <Link
            href="#javascript:void(0)"
            className="inline-block transition-all"
          >
            {title}
          </Link>
        </h3>
        <p className="text-[18px]">{description}</p>
      </div>
    </div>
  );
}
