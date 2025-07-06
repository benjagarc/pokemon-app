import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/Providers/ReactQueryProvider";
import Navbar from "@/components/molecules/Navbar";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Pokédex App",
  description: "Explora los Pokémon con estilo retro y moderno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelFont.className} relative bg-gradient-to-br from-pokemon-red from-25% via-white/10 via-60% to-pokemon-blue to-80% min-h-screen`}
      >
        <Navbar />
        <main className="max-w-7xl mx-auto p-6 mt-6 pt-20 max-sm:pt-17">
          <div className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 min-h-[80vh]">
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
