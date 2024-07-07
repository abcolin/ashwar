import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import PageHeader from '@/components/layout/header';
import PageFooter from '@/components/layout/footer';
// import Providers from '@/components/layout/providers';
// import { auth } from '@/auth';

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ash War",
  description: "ASH WAR is a full chain Roguelike blockchain game using Spore DOB protocol, based on Nervos.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="min-h-screen pt-[100px]">
          <PageHeader />
          {children}
          <PageFooter />
        </div>
      </body>
    </html>
  );
}
