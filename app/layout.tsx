import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products 제품 판매 사이트",
  description: "Products 제품 판매 사이트",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="flex items-center justify-between p-4">
          <a href="/">Home</a>
          <a href="/products">Products</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
