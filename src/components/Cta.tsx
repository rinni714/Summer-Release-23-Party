import { twMerge } from "tailwind-merge";

export interface CtaProps {
  buttonText?: string;
  url?: string;
  style?: string;
}

export

  const Cta = ({ buttonText = "Add Button Text", url, style }: CtaProps) => {

    return (
      <a
        href={url}
        className={twMerge(
          " py-4 px-6 text-base font-bold text-white rounded-lg",
          style
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    );
  };

export default Cta;
