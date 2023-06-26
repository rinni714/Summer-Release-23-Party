import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import "../index.css";

import CTASectionCentered from "../components/CTASectionCentered";
import CenteredContainer from "../components/CenteredContainer";
import FAQCentered from "../components/FAQCentered";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import PageLayout from "../components/PageLayout";
import "../index.css";
import SimpleGrid from "../components/SimpleGrid";
import GridBlock from "../components/GridBlock";
import GridContainer from "../components/GridContainer";
import AddressComponent from "../components/Address";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"], primary: false },
    filter: { entityTypes: ["ce_page"] },
    fields: [
      "logo",
      "c_secondaryCTA",
      "c_mainCTA",
      "c_tagline",
      "name",
      "c_featuredProducts",
      "c_relatedFAQs",
      "slug",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Product({ document }: TemplateProps) {
  const address = {
    line1: '123 Main Street',
    city: 'New York',
    region: 'NY',
    postalCode: '10001',
    countryCode: 'US',
  }
  const {
    c_featuredProducts,
    logo,
    c_tagline,
    name,
    c_mainCTA,
    c_relatedFAQs,
    c_secondaryCTA,
  } = document;
  return (
    <PageLayout backgroundColor="#fcfcfc">
      <CenteredContainer>
        <Header backgroundColor="#000000" logo={`${document.logo.image.url}`} />
        <CTASectionCentered
          MainCTA={c_mainCTA}
          SecondaryCTA={c_secondaryCTA}
          showSecondaryCTA={true}
          paragraph={`${document.c_tagline}`}
          heading={`${document.name}`}
        />
        <GridContainer> <AddressComponent address={address}></AddressComponent> </GridContainer>
        <ItemList
          title={`Featured Products`}
          backgroundColor={``}
          items={document.c_featuredProducts}
        />
        <FAQCentered
          backgroundColor={``}
          heading={`Frequently Asked Questions`}
          faqs={document.c_relatedFAQs}
        />
      </CenteredContainer>
    </PageLayout>
  );
}
