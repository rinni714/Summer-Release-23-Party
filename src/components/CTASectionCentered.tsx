import Cta from "./Cta";

export interface CTASectionCenteredProps {
  BackgroundColor?:
  | "bg-transparent"
  | "bg-black"
  | "bg-white"
  | "bg-gray-100"
  | "bg-gray-200"
  | "bg-gray-300"
  | "bg-gray-400"
  | "bg-gray-500"
  | "bg-gray-600"
  | "bg-gray-700"
  | "bg-gray-800"
  | "bg-gray-900"
  | "bg-red-100"
  | "bg-red-200"
  | "bg-red-300"
  | "bg-red-400"
  | "bg-red-500"
  | "bg-red-600"
  | "bg-red-700"
  | "bg-red-800"
  | "bg-red-900"
  | "bg-orange-100"
  | "bg-orange-200"
  | "bg-orange-300"
  | "bg-orange-400"
  | "bg-orange-500"
  | "bg-orange-600"
  | "bg-orange-700"
  | "bg-orange-800"
  | "bg-orange-900"
  | "bg-yellow-100"
  | "bg-yellow-200"
  | "bg-yellow-300"
  | "bg-yellow-400"
  | "bg-yellow-500"
  | "bg-yellow-600"
  | "bg-yellow-700"
  | "bg-yellow-800"
  | "bg-yellow-900"
  | "bg-green-100"
  | "bg-green-200"
  | "bg-green-300"
  | "bg-green-400"
  | "bg-green-500"
  | "bg-green-600"
  | "bg-green-700"
  | "bg-green-800"
  | "bg-green-900"
  | "bg-teal-100"
  | "bg-teal-200"
  | "bg-teal-300"
  | "bg-teal-400"
  | "bg-teal-500"
  | "bg-teal-600"
  | "bg-teal-700"
  | "bg-teal-800"
  | "bg-teal-900"
  | "bg-blue-100"
  | "bg-blue-200"
  | "bg-blue-300"
  | "bg-blue-400"
  | "bg-blue-500"
  | "bg-blue-600"
  | "bg-blue-700"
  | "bg-blue-800"
  | "bg-blue-900"
  | "bg-indigo-100"
  | "bg-indigo-200"
  | "bg-indigo-300"
  | "bg-indigo-400"
  | "bg-indigo-500"
  | "bg-indigo-600"
  | "bg-indigo-700"
  | "bg-indigo-800"
  | "bg-indigo-900"
  | "bg-purple-100"
  | "bg-purple-200"
  | "bg-purple-300"
  | "bg-purple-400"
  | "bg-purple-500"
  | "bg-purple-600"
  | "bg-purple-700"
  | "bg-purple-800"
  | "bg-purple-900"
  | "bg-pink-100"
  | "bg-pink-200"
  | "bg-pink-300"
  | "bg-pink-400"
  | "bg-pink-500"
  | "bg-pink-600"
  | "bg-pink-700"
  | "bg-pink-800"
  | "bg-pink-900";
  heading?: string;
  paragraph?: string;
  MainCTA?: CTA;
  showSecondaryCTA?: boolean;
  SecondaryCTA?: CTA;
}

export const initialProps: CTASectionCenteredProps = {
  BackgroundColor: "bg-white",
  heading: "Heading",
  paragraph: "Tagline",
  MainCTA: {
    label: "Main CTA",
    link: "#",
    backgroundColor: "bg-black",
  },
  showSecondaryCTA: false,
  SecondaryCTA: {
    label: "Secondary CTA",
    link: "#",
    backgroundColor: "bg-black",
  },
};

export interface CTA {
  label: string;
  link: string;
  backgroundColor:
  | "bg-transparent"
  | "bg-black"
  | "bg-white"
  | "bg-gray-100"
  | "bg-gray-200"
  | "bg-gray-300"
  | "bg-gray-400"
  | "bg-gray-500"
  | "bg-gray-600"
  | "bg-gray-700"
  | "bg-gray-800"
  | "bg-gray-900"
  | "bg-red-100"
  | "bg-red-200"
  | "bg-red-300"
  | "bg-red-400"
  | "bg-red-500"
  | "bg-red-600"
  | "bg-red-700"
  | "bg-red-800"
  | "bg-red-900"
  | "bg-orange-100"
  | "bg-orange-200"
  | "bg-orange-300"
  | "bg-orange-400"
  | "bg-orange-500"
  | "bg-orange-600"
  | "bg-orange-700"
  | "bg-orange-800"
  | "bg-orange-900"
  | "bg-yellow-100"
  | "bg-yellow-200"
  | "bg-yellow-300"
  | "bg-yellow-400"
  | "bg-yellow-500"
  | "bg-yellow-600"
  | "bg-yellow-700"
  | "bg-yellow-800"
  | "bg-yellow-900"
  | "bg-green-100"
  | "bg-green-200"
  | "bg-green-300"
  | "bg-green-400"
  | "bg-green-500"
  | "bg-green-600"
  | "bg-green-700"
  | "bg-green-800"
  | "bg-green-900"
  | "bg-teal-100"
  | "bg-teal-200"
  | "bg-teal-300"
  | "bg-teal-400"
  | "bg-teal-500"
  | "bg-teal-600"
  | "bg-teal-700"
  | "bg-teal-800"
  | "bg-teal-900"
  | "bg-blue-100"
  | "bg-blue-200"
  | "bg-blue-300"
  | "bg-blue-400"
  | "bg-blue-500"
  | "bg-blue-600"
  | "bg-blue-700"
  | "bg-blue-800"
  | "bg-blue-900"
  | "bg-indigo-100"
  | "bg-indigo-200"
  | "bg-indigo-300"
  | "bg-indigo-400"
  | "bg-indigo-500"
  | "bg-indigo-600"
  | "bg-indigo-700"
  | "bg-indigo-800"
  | "bg-indigo-900"
  | "bg-purple-100"
  | "bg-purple-200"
  | "bg-purple-300"
  | "bg-purple-400"
  | "bg-purple-500"
  | "bg-purple-600"
  | "bg-purple-700"
  | "bg-purple-800"
  | "bg-purple-900"
  | "bg-pink-100"
  | "bg-pink-200"
  | "bg-pink-300"
  | "bg-pink-400"
  | "bg-pink-500"
  | "bg-pink-600"
  | "bg-pink-700"
  | "bg-pink-800"
  | "bg-pink-900";
}

const CTASectionCentered = (props: CTASectionCenteredProps) => {
  const { heading, paragraph, MainCTA, SecondaryCTA, BackgroundColor, showSecondaryCTA } =
    props;

  const cta2Styling = {
    backgroundColor: `${SecondaryCTA?.backgroundColor}`,
  };

  return (
    <>
      <div className={`${BackgroundColor}`}>
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              {heading ?? "Add Title Here"}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              {paragraph ?? "Add Tagline Here"}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={MainCTA?.link}
                className={`rounded-md px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${MainCTA?.backgroundColor}`}
              >
                {MainCTA?.label ?? "Add CTA Label Here"}
              </a>
              {showSecondaryCTA && (
                <a
                  href={SecondaryCTA?.link}
                  className="text-base font-semibold leading-7 text-gray-900"
                  style={cta2Styling}
                >
                  {SecondaryCTA?.label ?? "Add Secondary CTA Label"} <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASectionCentered;
