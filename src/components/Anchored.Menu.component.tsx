"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes, useEffect, useState } from "react";
type AnchoredMenuProps = {} & HTMLAttributes<HTMLMenuElement>;

const AnchoredMenu = ({ children, className, ...props }: AnchoredMenuProps) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  return (
    <>
      <nav className={`${className} ${loading && "blur transition-all"}`}>
        <menu
          {...props}
          className="w-full flex flex-row justify-end items-center content-center gap-3 md:gap-6 text-tremor-brand-subtle"
        >
          <li>
            <Link
              href={"/"}
              className="text-tremor-title"
              onClick={() =>
                pathname !== "/" && setLoading((prevState) => !prevState)
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="text-tremor-title"
              onClick={() =>
                pathname !== "/about" && setLoading((prevState) => !prevState)
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="text-tremor-title"
              onClick={() =>
                pathname !== "/contact" && setLoading((prevState) => !prevState)
              }
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className="text-tremor-title"
              onClick={() =>
                pathname !== "/projects" &&
                setLoading((prevState) => !prevState)
              }
            >
              Mission
            </Link>
          </li>
        </menu>
      </nav>
    </>
  );
};

export default AnchoredMenu;
