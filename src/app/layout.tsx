import { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import GAProvider from "@/providers/GAProvider";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "DivideProject - Building custom web solutions that drive results",
  description:
    "Unlock the potential of your digital presence with DivideProject. We specialize in crafting high-performance websites, mobile apps, and web apps using NextJS, React, and Tailwind CSS. Elevate your online impact with our cutting-edge solutions.",
  applicationName: "DivideProject website",
  authors: [{ name: "DivideProject", url: "https://www.divideproject.com" }],
  metadataBase: new URL("https://www.divideproject.com"),
  openGraph: {
    title: "DivideProject - Building custom web solutions that drive results",
    description:
      "Unlock the potential of your digital presence with DivideProject. We specialize in crafting high-performance websites, mobile apps, and web apps using NextJS, React, and Tailwind CSS. Elevate your online impact with our cutting-edge solutions.",
    url: "https://www.divideproject.com",
  },
  twitter: {
    title: "DivideProject - Building custom web solutions that drive results",
    description:
      "Unlock the potential of your digital presence with DivideProject. We specialize in crafting high-performance websites, mobile apps, and web apps using NextJS, React, and Tailwind CSS. Elevate your online impact with our cutting-edge solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextTopLoader color="rgb(108,101,131,0.6)" height={2} />
        <GAProvider>
          <Toaster
            toastOptions={{
              style: {
                background:
                  "linear-gradient(335.78deg, #110F1C -75.02%, #0E0C16 85.58%), linear-gradient(344.57deg, rgba(21, 18, 37, 0.15) -19.24%, rgba(30, 26, 50, 0.15) 90.97%)",
                color: "#C4BAD3",
                borderWidth: 1,
                borderColor: "rgba(108,101,131,0.32)",
              },
            }}
          />
          {children}
        </GAProvider>
        <Analytics />
      </body>
    </html>
  );
}
