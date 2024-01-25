import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Example Content API",
  description: "Get some hard-coded JSON to test stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-purple-100 dark:bg-black">{children}</body>
    </html>
  );
}
