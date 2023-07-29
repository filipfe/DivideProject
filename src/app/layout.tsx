import { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import GAProvider from "@/providers/GAProvider";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DivideProject - Building custom web solutions that drive results",
  description:
    "Our team offers a range of services to help you create the digital experience you want.",
  applicationName: "DivideProject website",
  authors: [{ name: "DivideProject", url: "https://www.divideproject.com" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <GAProvider>
          <AuthProvider>
            <Toaster />
            <>{children}</>
          </AuthProvider>
        </GAProvider>
      </body>
    </html>
  );
}
