import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ProviderChakra } from "@/providers/ChakraProvider";

export const metadata:Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ProviderChakra>
          {children}
        </ProviderChakra>
      </body>
    </html>
  )
}
