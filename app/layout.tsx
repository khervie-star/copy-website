import type { Metadata } from "next";
import {
  Inter,
  Libre_Baskerville,
  Montserrat,
  Lato,
  Cardo,
  Nunito_Sans,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["400", "700"],
});

const cardo = Cardo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cardo",
  weight: ["400", "700"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${libre.className} ${montserrat.className} ${lato.className} ${cardo.className} ${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}
