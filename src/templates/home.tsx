import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import "../index.css";

import CTASectionCentered from "../components/CTASectionCentered";
import CenteredContainer from "../components/CenteredContainer";
import FAQCentered from "../components/FAQCentered";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import PageLayout from "../components/PageLayout";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"], primary: false },
    filter: { entityTypes: ["ce_page"] },
    fields: [
      "logo",
      "c_secondaryCTA",
      "c_mainCTA",
      "c_cTAFull",
      "c_tagline",
      "name",
      "c_featuredProducts.name",
      "c_featuredProducts.logo",
      "c_featuredProducts.c_subtitle",
      "c_relatedFAQs.question",
      "c_relatedFAQs.answer",
      "slug",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Product({ document }: TemplateProps) {
  return (
    <PageLayout backgroundColor="#fcfcfc">
      <CenteredContainer>
        <Header backgroundColor="#000000" logo={`${document.logo.image.url}`} />
        <CTASectionCentered
        />
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
