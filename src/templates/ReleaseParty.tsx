import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Banner from "../components/Banner";
import BigButton from "../components/BigButton";
import CTASectionCentered from "../components/CTASectionCentered";
import PageLayout from "../components/PageLayout";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["en"], primary: false },
    filter: { entityIds: ["8832319557229008364"] },
    fields: ["slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};

export default function ReleaseParty() {
  return (
    <>
      <BigButton title="Button Title" href="#" />
      <PageLayout backgroundColor="#FFFFFF">
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
        <CTASectionCentered
          BackgroundColor="bg-white"
          heading="Heading"
          paragraph="Tagline"
          MainCTA={{
            label: "Main CTA",
            link: "#",
            backgroundColor: "bg-black",
          }}
          showSecondaryCTA={false}
          SecondaryCTA={{
            label: "Secondary CTA",
            link: "#",
            backgroundColor: "bg-black",
          }}
        />
      </PageLayout>
    </>
  );
}
