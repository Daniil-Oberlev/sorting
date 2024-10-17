import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";

import Layout from "@/components/layout";

const font = Montserrat({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Сортировки",
  description: "Все сортировки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} page-layout`}>
        <div className="main-content">{children}</div>
        <Layout.Footer />
      </body>
    </html>
  );
}
