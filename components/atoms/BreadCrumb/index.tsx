"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Breadcrumb = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const pathLinks = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        key={href}
        className="flex items-center gap-1 text-sm"
      >
        <ChevronRight className="w-4 h-4 text-white/70" />
        <Link
          href={href}
          className={`capitalize hover:underline drop-shadow-lg ${
            index === segments.length - 1
              ? "text-yellow-300 font-semibold"
              : "text-white/90"
          }`}
        >
          {decodeURIComponent(segment)}
        </Link>
      </motion.div>
    );
  });

  return (
    <nav className="flex flex-wrap items-center px-4 py-2 bg-white/10 backdrop-blur rounded-md w-fit text-white text-sm shadow-sm mb-5">
      <Link href="/" className="hover:underline text-white/90 font-medium">
        Home
      </Link>
      {pathLinks}
    </nav>
  );
};

export default Breadcrumb;
