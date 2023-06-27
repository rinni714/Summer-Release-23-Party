import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
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
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};

export default function ReleaseParty() {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <CTASectionCentered
        BackgroundColor="bg-white"
        heading="Heading"
        paragraph="Tagline"
        MainCTA={{ label: "Main CTA", link: "#", backgroundColor: "bg-black" }}
        showSecondaryCTA={false}
        SecondaryCTA={{
          label: "Secondary CTA",
          link: "#",
          backgroundColor: "bg-black",
        }}
      />
    </PageLayout>
  );
}
