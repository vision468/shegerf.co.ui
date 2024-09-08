import Image from "next/image";
import { HTMLAttributes } from "react";
import CompanyLogo from "./CompanyLogo.component";
import AnchoredMenu from "./Anchored.Menu.component";
import { Divider } from "@tremor/react";
type FooterProps = {} & HTMLAttributes<HTMLDivElement>;

const Footer = ({ children, className, ...props }: FooterProps) => {
  return (
    <footer {...props} className={`${className}`}>
      <div className="w-full min-h-[128px] flex justify-center items-center gap-2">
        <CompanyLogo />

        <aside>
          <h1 className="text-tremor-metric font-bold text-tremor-brand">
            Shegerf
          </h1>
        </aside>
      </div>
      <div className="flex justify-center items-center border-b-2 pb-2 mb-2">
        <AnchoredMenu />
      </div>
      <div>
        <p className="text-center md:text-right text-tremor-content-emphasis m-2">
          © 2024 Shegerf. All rights reserved.
        </p>
      </div>
      {children}
    </footer>
  );
};

export default Footer;
