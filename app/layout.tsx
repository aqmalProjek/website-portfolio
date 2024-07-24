import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavabarComponent from "@/components/Navbar";
import FooterCustom from "@/components/Home/FooterCustom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Aqmal Code",
  description: "Hi, I'm Muchamad Aqmal Hidayat, a Full Stack Developer with a degree in Information Systems from Ma'soem University. My journey in tech began in 2021, and since then, I've worked on numerous projects, honing my skills in both front-end and back-end development.",
  creator: "Muchamad Aqmal Hidayat",
  authors: [{name: "Muchamad Aqmal Hidayat", url: "https://www.linkedin.com/in/muchamad-aqmal-7840332b5/"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <NavabarComponent />
        <main className="pt-12">{children}</main>
        <FooterCustom />
      </body>
    </html>
  );
}
