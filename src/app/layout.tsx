import { Roboto, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-notojp",
});

export const metadata: Metadata = {
  title: {
    default: "Soma Takata",
    template: `%s | Soma Takata`,
  },
  description: "これは、SomaTakataのポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`relative pb-16 pt-20 lg:pb-0 lg:pt-24 ${roboto.variable} ${notoJP.variable} ${notoJP.className}`}
      >
        {children}
      </body>
    </html>
  );
}
