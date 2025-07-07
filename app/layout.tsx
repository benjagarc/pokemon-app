import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/Providers/ReactQueryProvider";
import Navbar from "@/components/molecules/Navbar";
import Head from "next/head";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Pokémon Explorer | Discover Your Favorite Pokémon",
  description:
    "Explore the Pokémon world with a stunning Pokémon interface. View Pokémon details, filter by name, mark your favorites, and check game essentials. Powered by PokéAPI.",
  keywords: [
    "Pokémon",
    "Pokedex",
    "Pokémon API",
    "Pokémon Explorer",
    "Next.js Pokémon",
    "React Pokémon",
    "Framer Motion",
    "Tailwind CSS Pokémon",
  ],
  metadataBase: new URL("https://pokefronted.netlify.app/"), // cambia esto a tu dominio real
  openGraph: {
    title: "Pokémon Explorer",
    description:
      "Dive into a stylish Pokémon powered by Next.js and PokéAPI. Explore characters, games, and favorites!",
    url: "https://pokefronted.netlify.app",
    siteName: "Pokémon App",
    images: [
      {
        url: "/pokemon-logo.png",
        width: 500,
        height: 180,
        alt: "Pokémon Explorer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokémon Explorer",
    description:
      "A beautifully animated Pokémon app built with Next.js, Tailwind, and PokéAPI.",
    images: ["/pokemon-logo.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://pokeapi.co" />
        <link rel="dns-prefetch" href="https://pokeapi.co" />
      </Head>
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
