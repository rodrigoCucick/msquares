import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marching Squares",
  description: "Marching squares algorithm visualization"
};

export default function RootLayout(
    {children}: Readonly<{children: React.ReactNode;}>): JSX.Element {
  return (
    <html lang="en">
      <body className={
        [inter.className, "bg-gradient-to-r from-black to-purple"].join(' ')}>
        {children}
      </body>
    </html>
  );
}
