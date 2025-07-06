import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/Providers/ReactQueryProvider";

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
        <nav className="w-full px-6 py-4 bg-white/25 backdrop-blur-sm border-b border-white/20 text-white shadow-md">
          <h1 className="text-xl tracking-wide">Pokédex App</h1>
        </nav>
        <main className="max-w-7xl mx-auto p-6 mt-6">
          <div className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 min-h-[80vh]">
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
