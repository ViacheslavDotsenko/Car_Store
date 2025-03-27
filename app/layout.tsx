import "./globals.css";

import type { Metadata } from 'next/types'
import localFont from "next/font/local";

import { Provider } from "@/components/provider";
import Header from "@/components/header/Header";
import MenuNavigation from "@/components/menu/MenuNavigation";
import Footer from "@/components/footer/Footer";

const oswald = localFont({
  src: [
    {
      path: "../public/fonts/oswald/Oswald-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/oswald/Oswald-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/oswald/Oswald-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "CarStore",
  generator: "Next.js",
  applicationName: "Kaminari",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Boilerplate",
    "Template",
    "shadcn-ui",
  ],
  authors: [{ name: "Virgil", url: "https://obedd.vercel.app" }],
  creator: "Virgil",
  publisher: "Virgil",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kaminari.vercel.app"),
  openGraph: {
    title: "CarStore",
    description: "Next.js, TailwindCSS and shadcn-ui Starter Template",
    url: "https://kaminari.vercel.app",
    siteName: "CarStore",
    images: [
      {
        url: "../public/images/psl_Logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "../public/images/psl_Logo.svg",
        width: 1800,
        height: 1600,
        alt: "Next.js, TailwindCSS and shadcn-ui Starter Template",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.className} min-h-screen flex flex-col`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={`flex flex-col min-h-screen bg-[#e0dede] dark:bg-[#393838] dark:text-zinc-400 text-zinc-700`}
          >
            <Header/>
            <MenuNavigation/>
            {children}
            <Footer/>
          </main>
        </Provider>
      </body>
    </html>
  );
}