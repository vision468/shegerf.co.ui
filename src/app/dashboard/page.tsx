"use client";
import BasicForm from "@/components/Basic.Form.component";
import Link from "next/link";

const pages = ["/home-page", "/about", "/contact", "/projects"];

export default function Dashboard() {
  return (
    <main className="w-full flex flex-row gap-5 p-8 bg-tremor-background">
      {pages.map((value, index) => {
        return (
          <Link
            key={value}
            href={"/dashboard" + value}
            className="flex-1 w-full aspect-square flex justify-center items-center bg-tremor-brand-muted rounded-tremor-default shadow-tremor-card"
          >
            <div className="bg-tremor-background-muted flex flex-col justify-center items-center gap-4 p-4 rounded-tremor-default">
              {/* <div className="relative">
              <Image
                src={"/hero_background.png"}
                alt=""
                fill
                className="object-contain rounded-tremor-smalls"
              />
            </div> */}
              <strong dir="ltr" className="text-tremor-content">
                {value.replace("_", " ").toUpperCase()}
              </strong>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
