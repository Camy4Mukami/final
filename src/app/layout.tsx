import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["400"],

});

export const metadata: Metadata = {
  title: "Nails Nest",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${merriweather.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
