"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiArrowRight, FiPhone, FiMail } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about/" },
  { name: "Destinations", href: "/destinations/" },
  { name: "Services", href: "/services/" },
  { name: "Study Abroad", href: "/study-abroad/" },
  { name: "Stories", href: "/stories/" },
  { name: "Blogs", href: "/blogs/" },
  { name: "Contact Us", href: "/contact/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
      if (event.key === "Tab") {
        const links = [...menuRef.current.querySelectorAll("a")];
        const first = toggleRef.current;
        const last = links.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth >= 1200) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);
  const active = (href) => pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  return (
    <header className="site-header">
      <div className="reference-topbar">
        <div className="reference-topbar-inner">
          <div className="reference-support">
            <FiPhone aria-hidden="true" />
            <span>Speak with us</span>
            <a className="support-phone" href={`tel:${process.env.NEXT_PUBLIC_NUMBER || ""}`}>{process.env.NEXT_PUBLIC_NUMBER || "Contact EPECC"}</a>
            <span className="reference-divider">|</span>
            <FiMail className="support-mail-icon" aria-hidden="true" />
            <a className="support-email" href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_MAIL || ""}`}>{process.env.NEXT_PUBLIC_SUPPORT_MAIL || "Email EPECC"}</a>
          </div>
          {/* <div className="reference-utility-links" aria-label="Quick links">
            <Link href="/stories/">Stories</Link>
            <Link href="/blogs/">Blogs</Link>
            <Link href="/contact/">Contact</Link>
          </div> */}
        </div>
      </div>
      <div className="site-nav-wrap">
        <Link href="/" className="site-logo" onClick={() => setOpen(false)}>EPECC<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(item => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.name}</Link>)}
        </nav>
        <Link href="/apply" className="site-button nav-apply">Apply Now <FiArrowRight /></Link>
        <button ref={toggleRef} className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle Menu" aria-expanded={open} aria-controls="mobile-navigation">{open ? <FiX size={26} /> : <FiMenu size={26} />}</button>
      </div>
      {open && <nav ref={menuRef} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={active(item.href) ? "page" : undefined}>{item.name}<FiArrowRight /></Link>)}
        <Link href="/apply" className="site-button" onClick={() => setOpen(false)}>Start Application <FiArrowRight /></Link>
      </nav>}
    </header>
  );
}
