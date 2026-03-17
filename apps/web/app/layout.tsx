import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avis Journey Platform",
  description: "Mini interview demo for post-booking journey orchestration",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
