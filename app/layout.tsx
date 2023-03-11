import { ReactNode } from "react";
import { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import "./globals.css";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcus Rodrigues",
  description: "Developer.",
  openGraph: {
    title: "Marcus Rodrigues",
    description: "Developer.",
    url: "https://mrodrigues.me",
    siteName: "Marcus Rodrigues",
    images: [
      {
        url: "https://mrodrigues.me/favicon.ico",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body
      className={clsx(
        "mx-auto my-32 max-w-2xl bg-orange-50/25 antialiased",
        merriweather.className
      )}
    >
      <main>{children}</main>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
