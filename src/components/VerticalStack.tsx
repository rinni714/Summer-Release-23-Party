export interface VerticalStackProps {
  children: React.ReactNode;
}

const VerticalStack = ({ children }: VerticalStackProps) => {
  return <div className="lg:max-w-lg lg:self-end">{children}</div>;
};

export default VerticalStack;
