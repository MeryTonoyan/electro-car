"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Եթե /admin էջում ենք, Header-ն ու Footer-ը չենք ցուցադրում
  const isAdmin = pathname.startsWith("/admin");

  return (
      <html lang="hy">
      <body>
      {!isAdmin && <Header />}

      {isAdmin ? (
          <div className="admin-root-container">
            {children}
          </div>
      ) : (
          children
      )}

      {!isAdmin && <Footer />}
      </body>
      </html>
  );
}
