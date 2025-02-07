import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const font = Inter({ subsets: ["latin"], display: "swap", weight: "variable" });

export const metadata: Metadata = {
  title: "Comforty",
  description: "Make your house comfortable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={`${font.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
