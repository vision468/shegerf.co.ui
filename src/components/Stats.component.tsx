"use client";
import { RiUser3Fill } from "@remixicon/react";
import { Icon } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

type StatsProps = {} & HTMLAttributes<HTMLDivElement>;
const companyList = ["benz", "bmw", "dell", "telecom"];
const Stats = ({ children, className, ...props }: StatsProps) => {
  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-8  ">
      {companyList.map((value, index) => (
        <div className="" key={`company #${index}`}>
          <div className="relative w-24 h-24 rounded-tremor-full bg-tremor-background overflow-hidden">
            <Image
              src={"/logo.png"}
              alt={`company ${value} logo`}
              fill
              className="object-contain w-24 h-24"
            />
          </div>
          <div className="my-2">
            <p className="text-center text-lg font-semibold text-tremor-content-emphasis">
              {value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
