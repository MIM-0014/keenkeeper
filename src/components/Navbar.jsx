"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";



export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
    
    },
    {
      name: "Timeline",
      href: "/timeline",
     
    },
    {
      name: "Stats",
      href: "/stats",
     
    },
  ];

  return (
    <nav className="navbar">
      {/* LEFT - LOGO */}
      <div className="logo">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* RIGHT - NAV LINKS */}
      <ul className="nav-links">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}