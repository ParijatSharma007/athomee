import Image from "next/image";

export interface serviceInfoProps {
  serviceInfoImage: string;
  serviceinfotext: string;
  clientImg: string;
  userName: string;
  rattingScore: string;
  numberofPerson: string;
  title: string;
  buttonText: string;
  children: React.ReactNode;
  showImgIcon?: boolean;
  icon?: string | any;
  serviceType?: boolean;
}

function ClientInfoComponent({
  serviceInfoImage,
  serviceinfotext,
  clientImg,
  userName,
  rattingScore,
  numberofPerson,
  title,
  serviceType,
  buttonText,
  children,
  showImgIcon,
  icon,
}: serviceInfoProps) {
  return (
    <div className="p-6 xl:p-4">
      <h4>{title}</h4>
      <div className="py-6 xlpy-4 flex items-center pb-0">
        <figure className="w-[96px] h-[96px] relative">
          {!serviceType ? (
            <Image
              src={serviceInfoImage}
              alt="serviceInfoImage"
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Image
              src={serviceInfoImage}
              alt="serviceInfoImage"
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-xl"
            />
          )}

          {showImgIcon && (
            <div className="flex items-center justify-center rounded-lg w-[32px] h-[32px] absolute left-2 top-2  ">
              <i>
                <Image src={icon} alt="icon" width={32} height={32} />
              </i>
            </div>
          )}
        </figure>
        <div className="pl-3 w-[calc(100%-96px)]">
          {!serviceType ? (
            <ul>
              <li className="mb-2">
                <p className="text-base font-medium text-gray-900">
                  {serviceinfotext}
                </p>
              </li>
              <li className="mb-2 text-[#A0A0AB] text-[14px] ">
                Avg. reply: <span className="text-[#131316]">3 hours</span>
              </li>
              <li className="mb-2 text-[#A0A0AB] text-[14px] ">
                Member since: <span className="text-[#131316]">May 2014</span>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="mb-2">
                <p className="text-base font-medium text-gray-900">
                  {serviceinfotext}
                </p>
              </li>
              <li className="mb-2 text-[#A0A0AB] text-[14px] ">
                From: <span className="text-[#131316]">$50</span>
              </li>
              <li className="mb-2 text-[#A0A0AB] text-[14px] ">
                Nearest free time:{" "}
                <span className="text-[#131316]">26 may, 11:00 AM</span>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="pb-0  ">
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
}

export default ClientInfoComponent;
