import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ProviderChakra } from "@/providers/Chakra/ChakraProvider";
import SideBar from "@/features/ui/sideBar/sideBar";
import { Headers } from "@/features/ui";
import UnderBard from "@/features/ui/underBar/underBar";
import NextAuthProviders from "@/providers/SessionProvider/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reminders",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProviders>
          <ProviderChakra>
            <div className="flex flex-col flex-grow w-full h-screen overflow-y-auto  bg-gradient-to-br from-purple-400 to-indigo-600">
              <div className="flex flex-grow h-full items-center overflow-y-auto ">
                <SideBar />
                <main className="flex w-full h-full  flex-col items-center justify-start overflow-y-auto ">
                  <Headers />
                  <div className="flex items-center w-full pb-4 h-full justify-center overflow-y-auto ">
                    {children}
                  </div>
                </main>
              </div>
              <UnderBard />
            </div>
          </ProviderChakra>
        </NextAuthProviders>
      </body>
    </html>
  );
}
