export interface HorizontalStackProps {
  children: React.ReactNode;
}

const HorizontalStack = ({ children }: HorizontalStackProps) => {
  return <div className="flex items-center">{children}</div>;
};

export default HorizontalStack;
