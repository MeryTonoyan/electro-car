"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="container header-inner">
                <Link href="/" className="logo">
          <span className="logo-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M13 2 4.09 12.97a1 1 0 0 0 .76 1.65H11l-1.81 7.7a.5.5 0 0 0 .89.38l8.71-11.21a1 1 0 0 0-.79-1.62H13l1.4-7.32A.5.5 0 0 0 13 2z" />
            </svg>
          </span>
                    <span className="logo-text">ELECTRO</span>
                </Link>

                <nav className={`nav ${isOpen ? "mobile-open" : ""}`}>
                    <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                        Գլխավոր
                    </Link>
                    <Link href="/cars" className={`nav-link ${pathname === "/cars" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                        Մեքենաներ
                    </Link>
                    <Link href="/custom-order" className={`nav-link ${pathname === "/custom-order" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                        Անհատական Պատվեր
                    </Link>
                    <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                        Կապ
                    </Link>
                </nav>

                <div className="header-cta">
                    <a href="tel:+37410555000" className="phone-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        +374 10 555 000
                    </a>
                    <Link href="/cars" className="btn btn-primary btn-sm d-none d-md-flex">
                        Կատալոգ
                    </Link>
                    <button className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)} aria-label="Մենյու">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}