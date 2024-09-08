"use client";
import { useParams, usePathname } from "next/navigation";

export default function DashboardSubPage() {
  const pathname = usePathname();
  const { dashSlag } = useParams();
  return (
    <main>
      Page path is: {pathname}
      page params is: {dashSlag}
    </main>
  );
}
