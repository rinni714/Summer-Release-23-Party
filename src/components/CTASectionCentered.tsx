
export interface CTASectionCenteredProps {
  BackgroundColor?: string;
  heading?: string;
  paragraph?: string;
  MainCTA?: CTA;
  showSecondaryCTA?: boolean;
  SecondaryCTA?: CTA;
}

export interface CTA {
  label: string;
  link: string;
  backgroundColor: string;
}

const CTASectionCentered = (props: CTASectionCenteredProps) => {
  const { heading, paragraph, MainCTA, SecondaryCTA, BackgroundColor, showSecondaryCTA } =
    props;

  const backgroundStyling = {
    backgroundColor: `${BackgroundColor}`,
  };

  const cta1Styling = {
    backgroundColor: `${MainCTA?.backgroundColor}`,
  };

  const cta2Styling = {
    backgroundColor: `${SecondaryCTA?.backgroundColor}`,
  };

  return (
    <>
      <div style={backgroundStyling}>
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              {heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              {paragraph}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={MainCTA?.link}
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={cta1Styling}
              >
                {MainCTA?.label}
              </a>
              {showSecondaryCTA && (
                <a
                  href={SecondaryCTA?.link}
                  className="text-base font-semibold leading-7 text-gray-900"
                  style={cta2Styling}
                >
                  {SecondaryCTA?.label} <span aria-hidden="true">→</span>
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
