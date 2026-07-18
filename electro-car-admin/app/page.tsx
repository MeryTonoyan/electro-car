"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 350;
    const timer = setInterval(() => {
      start += 5;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 15);
    return () => clearInterval(timer);
  }, []);

  return (
      <>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="badge">
                <span className="badge-dot"></span>
                Ապագան Էլեկտրական է
              </div>
              <h1 className="hero-title">
                Բարձրակարգ <span className="text-gradient">Էլեկտրական</span> Ավտոմեքենաներ
              </h1>
              <p className="hero-subtitle">
                Հայաստանի առաջատար էլեկտրական ավտոմեքենաների սրահ։ Գտեք ձեր երազանքի մեքենան ամենաձեռնտու պայմաններով։
              </p>
              <div className="hero-actions">
                <Link href="/cars" className="btn btn-primary btn-lg">
                  Դիտել Կատալոգը
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/custom-order" className="btn btn-secondary btn-lg">
                  Անհատական Պատվեր
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat-card">
                  <div className="stat-num">{count}+</div>
                  <div className="stat-label">Առաքված մեքենաներ</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">5/5</div>
                  <div className="stat-label">Հաճախորդների գնահատական</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Երաշխավորված որակ</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img
                    src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1000"
                    alt="Premium Electric SUV"
                    className="hero-image"
                />
                <div className="hero-overlay-gradient"></div>
              </div>

              {/* Floating Card 1 */}
              <div className="hero-floating-card card-1">
                <div className="float-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 4.09 12.97a1 1 0 0 0 .76 1.65H11l-1.81 7.7a.5.5 0 0 0 .89.38l8.71-11.21a1 1 0 0 0-.79-1.62H13l1.4-7.32A.5.5 0 0 0 13 2z" />
                  </svg>
                </div>
                <div>
                  <div className="float-title">Գերարագ Լիցքավորում</div>
                  <div className="float-desc">0-80% ընդամենը 18 րոպեում</div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="hero-floating-card card-2">
                <div className="float-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div className="float-title">100% Ապահովություն</div>
                  <div className="float-desc">Երաշխիքային սպասարկում</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}