import { Lekton } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const lekton = Lekton({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lekton",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(lekton.className, "bg-[#080B16] relative m-0")}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
