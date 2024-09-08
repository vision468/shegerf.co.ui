"use client";
import { RiPhoneFill } from "@remixicon/react";
import { Button, Icon } from "@tremor/react";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import CallCTA from "./Call.CTA.component";
import MenuSandwichCTA from "./MenuSandwich.CTA.component";
import CompanyLogo from "./CompanyLogo.component";
import AnchoredMenu from "./Anchored.Menu.component";

type HeaderProps = {} & HTMLAttributes<HTMLHeadingElement>;

const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <header
      {...props}
      className={`flex flex-col md:flex-row justify-between md:justify-start min-h-[80px] px-8 items-center bg-white text-tremor-brand-subtle ${className}`}
    >
      {children}
      <div className="w-full md:w-auto flex flex-row content-center items-center gap-1 ">
        <CompanyLogo />
        <h1 className="text-tremor-brand text-tremor-metric font-bold">
          Shegerf
        </h1>
      </div>
      <AnchoredMenu className="w-full hidden md:block md:mx-6" />
      <div className="w-full md:w-auto flex flex-row justify-between py-4 md:py-0">
        <MenuSandwichCTA className="md:hidden" />
        <CallCTA />
      </div>
    </header>
  );
};

export default Header;
