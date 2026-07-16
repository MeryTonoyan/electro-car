"use client";

import { useState, FormEvent } from "react";

export default function CustomOrderPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => {
            setStatus("success");
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setStatus("idle"), 3000);
        }, 1200);
    };

    return (
        <main className="custom-order-page" style={{ paddingTop: "calc(var(--header-h) + 60px)", minHeight: "90vh" }}>
            <div className="container">
                <div className="order-container">
                    <div className="order-card">
                        <div className="order-card-header">
                            <h2>Անհատական Պատվերի Հայտ</h2>
                            <p>Լրացրեք տվյալները, և մեր մասնագետը կկապնվի ձեզ հետ՝ լավագույն տարբերակներն առաջարկելու համար։</p>
                        </div>
                        <form onSubmit={handleSubmit} className="order-form">
                            <div className="form-group">
                                <label className="form-label">Անուն Ազգանուն</label>
                                <input type="text" className="form-control" required placeholder="Մուտքագրեք ձեր անունը" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Հեռախոսահամար</label>
                                <input type="tel" className="form-control" required placeholder="+374 (XX) XX-XX-XX" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Նախընտրելի Մոդել / Մակնիշ</label>
                                <input type="text" className="form-control" required placeholder="Օր.՝ Tesla Model Y, BYD Song" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 py-3 mt-4" disabled={status === "sending"}>
                                {status === "idle" && (
                                    <>
                                        Ուղարկել Հայտը
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: "16px", marginLeft: "8px" }}>
                                            <path d="M5 12h14M13 5l7 7-7 7" />
                                        </svg>
                                    </>
                                )}
                                {status === "sending" && "Ուղարկվում է..."}
                                {status === "success" && "✓ Հայտը հաջողությամբ ուղարկվել է"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}