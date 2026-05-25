"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/library", label: "Library" },
  { href: "/students", label: "Students" },
  { href: "/jobs", label: "Jobs" },
  { href: "/staff", label: "Staff" },
  { href: "/gallery", label: "Photos" },
  { href: "/documents", label: "Documents" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image src="/assets/img/logo.png" alt="Sharda T.T. College logo" width={84} height={84} priority />
          <span>
            <strong>Sharda T.T. College</strong>
            <small>Affiliated by NCTE and University of Rajasthan, Jaipur</small>
          </span>
        </Link>
        <a className="phone-chip" href="tel:+919887089584">
          <Phone size={18} aria-hidden="true" />
          <span>+91 9887089584</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {links.map((link) => {
          const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              className={active ? "active" : ""}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
