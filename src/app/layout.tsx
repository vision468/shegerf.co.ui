import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header.component";
import Footer from "@/components/Footer.component";
import Breadcrumb from "@/components/Breadcrumb.component";

export const metadata: Metadata = {
  title: "Shegerf Company",
  description: "Description Text",
  icons: {
    icon: [
      { url: "/logo.png" },
      // new URL("/icon.png", "https://example.com"),
      // { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    // shortcut: ["/shortcut-icon.png"],
    // apple: [
    //   { url: "/apple-icon.png" },
    //   { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    // ],
    // other: [
    //   {
    //     rel: "apple-touch-icon-precomposed",
    //     url: "/apple-touch-icon-precomposed.png",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="rtl"
      className=" bg-tremor-background-muted antialiased"
    >
      <body>
        <Header />
        <Breadcrumb />

        {children}
        <Footer />
      </body>
    </html>
  );
}
