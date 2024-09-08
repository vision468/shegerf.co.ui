import { HTMLAttributes } from "react";
type LoadingCalloutProps = {} & HTMLAttributes<HTMLDivElement>;

const LoadingCallout = ({
  children,
  className,
  ...props
}: LoadingCalloutProps) => {
  return (
    <div className=" relative flex justify-center items-center z-50 w-64 h-64 bg-tremor-background rounded-tremor-default shadow-tremor-card">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-none font-semibold">
        {"Loading..."}
      </div>
      <div className="relative w-32 h-32 border-l-4 border-l-tremor-brand animate-spin bg-transparent rounded-full"></div>
    </div>
  );
};

export default LoadingCallout;
