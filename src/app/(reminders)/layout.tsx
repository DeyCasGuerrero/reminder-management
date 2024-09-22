import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ProviderChakra } from "@/providers/Chakra/ChakraProvider";
import { SessionProvider } from "next-auth/react";
import NextAuthProviders from "@/providers/SessionProvider/NextAuthProvider";

export const metadata: Metadata = {
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
        <div className="flex flex-col flex-grow w-full h-screen overflow-y-auto  bg-gradient-to-br from-purple-400 to-indigo-600">
          <NextAuthProviders>
            <ProviderChakra>
              {children}
            </ProviderChakra>
          </NextAuthProviders>
        </div>
      </body>
    </html>
  )
}
