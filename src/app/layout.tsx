import { Roboto, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","300","400","500","700", "900"], 
  variable: "--font-roboto",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"], 
  weight: ["100","300","400","500","700", "900"], 
  variable: "--font-notojp",
});

export const metadata: Metadata = {
  title: "Soma Takata",
  description: "Hi there! I'm Soma Takata, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`relative pt-20 pb-16 lg:pt-24 lg:pb-0 ${roboto.variable} ${notoJP.variable} ${notoJP.className}`}
      >
        {children}
      </body>
    </html>
  );
}
