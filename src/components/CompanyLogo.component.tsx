import Image, { ImageProps } from "next/image";

type CompanyLogoProps = {} & Partial<ImageProps>;

const CompanyLogo = ({ children, className }: CompanyLogoProps) => {
  return (
    <div className={`${className} relative w-16 h-16`}>
      <Image
        src={"/logo.png"}
        alt="text about company logo"
        fill
        className={`object-fill w-16 h-16`}
      />
    </div>
  );
};

export default CompanyLogo;
