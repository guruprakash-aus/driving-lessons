import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yaara Driving Institute",
  description: "Driving Lessons for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
