"use client";
import { RiHome3Fill, RiTriangleFill } from "@remixicon/react";
import { Icon } from "@tremor/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
type BreadcrumbProps = {} & HTMLAttributes<HTMLDivElement>;

const Breadcrumb = ({ children, className, ...props }: BreadcrumbProps) => {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname === "/") return <> </>;
  return (
    <nav className="flex flex-row items-center py-2 px-8 list-none text-tremor-content bg-tremor-background">
      <li>
        <Link href={"/"}>
          <Icon icon={() => <RiHome3Fill />} className="w-8 h-8" />
        </Link>
      </li>
      {pathname.split("/").map(
        (value, index) =>
          value && (
            <Link
              className="group flex items-stretch hover:text-tremor-brand-subtle focus:text-tremor-brand-subtle hover:underline focus:underline transition-colors"
              key={`breadcrumb item #${index}`}
              href={""}
            >
              <Icon
                icon={() => (
                  <RiTriangleFill className="fill-tremor-content group-hover:fill-tremor-brand-subtle group-focus:fill-tremor-brand-subtle" />
                )}
                className="-rotate-90 w-6 h-6"
              />
              <span>{value}</span>
            </Link>
          )
      )}
    </nav>
  );
};

export default Breadcrumb;
