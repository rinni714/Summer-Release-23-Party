import { GetPath, TemplateProps } from "@yext/pages";
import Banner from "../components/Banner";
import BigButton from "../components/BigButton";
import CTASectionCentered from "../components/CTASectionCentered";
import HorizontalStack from "../components/HorizontalStack";
import Item from "../components/Item";
import PageLayout from "../components/PageLayout";
import VerticalStack from "../components/VerticalStack";

export const getPath: GetPath<TemplateProps> = () => {
  return "release-2023-masquerade";
};

export default function ReleasePartyStatic() {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <CTASectionCentered
        BackgroundColor="bg-red-100"
        heading={`Release Party`}
        paragraph={`Description`}
        MainCTA={{ label: `RSVP`, link: ``, backgroundColor: "bg-black" }}
        showSecondaryCTA={false}
        SecondaryCTA={{
          label: "Secondary CTA",
          link: "#",
          backgroundColor: "bg-black",
        }}
      />
      <VerticalStack>
        <BigButton title="Button Title" href="#" />
        <BigButton title="Button Title" href="#" />
        <BigButton title="Button Title" href="#" />
        <HorizontalStack>
          <Item
            name="Product Name"
            price={0}
            subtitle="Product Subtitle"
            image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          />
          <Item
            name="Product Name"
            price={0}
            subtitle="Product Subtitle"
            image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          />
          <Item
            name="Product Name"
            price={0}
            subtitle="Product Subtitle"
            image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          />
          <Item
            name="Product Name"
            price={0}
            subtitle="Product Subtitle"
            image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          />
        </HorizontalStack>
        <Banner
          address={{
            countryCode: ``,
            postalCode: ``,
            region: ``,
            city: ``,
            line1: ``,
          }}
          name={``}
        />
      </VerticalStack>
    </PageLayout>
  );
}
