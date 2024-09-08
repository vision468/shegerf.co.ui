import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shegerf Company",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex justify-center items-center">{children}</section>
  );
}
