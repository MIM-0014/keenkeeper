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
    <nav className="bg-[#244d3f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FaUsers className="text-2xl text-green-300" />
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
                      ? "bg-green-400 text-black font-semibold"
                      : "hover:bg-green-500/20"
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