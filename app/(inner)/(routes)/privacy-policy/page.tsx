import Container from "@/components/Container";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="pb-24 w-full lg:pb-[60px]">
      <InnerBanner
        bannerTitle="Privacy Policy"
        subTitle="Current as of 20 Jan 2022"
      >
        <p className=" max-w-[630px] text-lg mb-6 mx-auto">
          Your privacy is important to us at Untitled. We respect your privacy
          regarding any information we may collect from you across our website.
        </p>
      </InnerBanner>
      <Container>
        <div className="flex flex-wrap">
          <div className="w-1/4 pr-20 lg:w-full lg:pr-0 lg:order-2 lg:hidden">
            <ul>
              <li className="text-[var(--foreground)]  text-xl font-satoshi_medium">
                Table of content
              </li>
              <li className="text-[var(--grey70707B)]  text-lg hover:text-[var(--foreground)] hover:font-satoshi_medium mt-4">
                <Link href="/">Tab name is here</Link>
              </li>
              <li className="text-[var(--grey70707B)]  text-lg hover:text-[var(--foreground)] hover:font-satoshi_medium mt-4">
                <Link href="/">Tab name is here</Link>
              </li>
              <li className="text-[var(--grey70707B)]  text-lg hover:text-[var(--foreground)] hover:font-satoshi_medium mt-4">
                <Link href="/">Tab name is here</Link>
              </li>
              <li className="text-[var(--grey70707B)]  text-lg hover:text-[var(--foreground)] hover:font-satoshi_medium mt-4">
                <Link href="/">Tab name is here</Link>
              </li>
            </ul>
          </div>
          <div className="w-3/4 lg:w-full lg:order-1 ">
            <p className="text-[var(--text-color2)]  text-lg mb-7">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.
            </p>
            <p className="text-[var(--text-color2)] mb-8 text-lg">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.{" "}
            </p>
            <h3 className="text-3xl mb-4">What information do we collect?</h3>
            <p className="text-[var(--text-color2)] mb-7 text-lg">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </p>
            <p className="text-[var(--text-color2)] mb-7 text-lg">
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </p>
            <p className="text-[var(--text-color2)] mb-8 text-lg">
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
            <h3 className="text-3xl mb-4">How do we use your information?</h3>
            <p className="text-[var(--text-color2)] mb-7 text-lg">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </p>
            <p className="text-[var(--text-color2)] mb-7 text-lg">
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </p>
            <p className="text-[var(--text-color2)] mb-8 text-lg">
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
            <h3 className="text-2xl mb-4">
              Do we use cookies and other tracking technologies?
            </h3>
            <p className="text-[var(--text-color2)] mb-8 text-lg">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis
              felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
              dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
              ac pellentesque ac.
            </p>
            <h3 className="text-2xl mb-4">
              How long do we keep your information?
            </h3>
            <p className="text-[var(--text-color2)] mb-8 text-lg">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis
              felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
              dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
              ac pellentesque ac.
            </p>
            <h3 className="text-2xl mb-4">
              How do we keep your information safe?
            </h3>
            <p className="text-[var(--text-color2)] mb-8 text-lg">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis
              felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
              dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
              ac pellentesque ac.
            </p>
            <h3 className="text-3xl mb-4">What are your privacy rights?</h3>
            <p className="text-[var(--text-color2)] mb-8 text-lg">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis
              felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
              dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
              ac pellentesque ac.
            </p>
            <h3 className="text-2xl mb-4">
              How can you contact us about this policy?
            </h3>
            <p className="text-[var(--text-color2)] mb-6 text-lg">
              Sagittis et eu at elementum, quis in. Proin praesent volutpat
              egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
              Auctor rutrum lacus malesuada massa ornare et. Vulputate
              consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu
              sit dignissim massa erat cursus vulputate gravida id. Sed quis
              auctor vulputate hac elementum gravida cursus dis.
            </p>
            <ul>
              <li className="text-[var(--text-color2)]  text-lg">
                1. Lectus id duis vitae porttitor enim gravida morbi.
              </li>
              <li className="text-[var(--text-color2)]  text-lg">
                2. Eu turpis posuere semper feugiat volutpat elit, ultrices
                suspendisse. Auctor vel in vitae placerat.
              </li>
              <li className="text-[var(--text-color2)]  text-lg">
                3. Suspendisse maecenas ac donec scelerisque diam sed est duis
                purus.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
