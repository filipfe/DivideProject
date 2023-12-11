import { GetStaticPaths, Metadata } from "next";
import "../globals.css";
import { Montserrat } from "next/font/google";
import GAProvider from "@/providers/GAProvider";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { Locale, getDictionary } from "@/dictionaries/dictionaries";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl" }];
}

export async function generateMetadata({
  params,
}: {
  params: Awaited<ReturnType<typeof generateStaticParams>>[0];
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Locale);
  return {
    ...dict.metadata,
    metadataBase: new URL(dict.metadata.metadataBase),
  } as Metadata;
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
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
