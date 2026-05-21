"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaStream,
  FaChartPie,
  FaUsers,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Timeline",
      path: "/timeline",
      icon: <FaStream />,
    },
    {
      name: "Stats",
      path: "/stats",
      icon: <FaChartPie />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md text-black shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FaUsers className="text-2xl text-[#244d3f]" />
          <span className="text-2xl font-bold">
            KeenKeeper
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-3">
          {navLinks.map((link) => {
            const active = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                  
                  ${
  active
    ? "bg-[#244d3f] text-white font-semibold"
    : "hover:bg-gray-100 text-gray-700"
}
                `}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}