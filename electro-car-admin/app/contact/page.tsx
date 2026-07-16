"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
    const [sent, setSent] = useState(false);

    const handleSend = (e: FormEvent) => {
        e.preventDefault();
        setSent(true);
        const form = e.target as HTMLFormElement;
        form.reset();
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <main className="contact-page" style={{ paddingTop: "calc(var(--header-h) + 60px)", minHeight: "100vh" }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold text-white mb-2">Կապ Մեզ Հետ</h1>
                    <p className="text-secondary max-w-600 mx-auto">Մենք միշտ պատրաստ ենք պատասխանել ձեր հարցերին։ Այցելեք մեր սրահ կամ գրեք մեզ։</p>
                </div>

                <div className="row g-4 align-items-stretch">
                    <div className="col-md-5">
                        <div className="contact-info-card d-flex flex-column justify-content-between p-4 h-100" style={{ background: "var(--bg-card)", border: "1px solid var(--border-soft)", borderRadius: "16px" }}>
                            <div>
                                <h3 className="text-white mb-4 fw-bold">Կոնտակտային տվյալներ</h3>
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div className="icon-wrap" style={{ background: "var(--green-dark)", padding: "12px", borderRadius: "12px", color: "var(--green-light)" }}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-muted small">Սրահի հասցե</div>
                                        <div className="text-white fw-bold">Երևան, Արշակունյաց 75</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div className="icon-wrap" style={{ background: "var(--green-dark)", padding: "12px", borderRadius: "12px", color: "var(--green-light)" }}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-muted small">Հեռախոս</div>
                                        <div className="text-white fw-bold">+374 10 555 000</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="icon-wrap" style={{ background: "var(--green-dark)", padding: "12px", borderRadius: "12px", color: "var(--green-light)" }}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-muted small">Էլ. Փոստ</div>
                                        <div className="text-white fw-bold">info@electro.am</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="p-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border-soft)", borderRadius: "16px" }}>
                            <h3 className="text-white mb-4 fw-bold">Ուղարկել արագ նամակ</h3>
                            <form onSubmit={handleSend}>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label className="form-label text-muted small">Ձեր Անունը</label>
                                        <input type="text" className="form-control" placeholder="Անուն" required style={{ background: "var(--bg-black)", border: "1px solid var(--border-soft)", color: "#fff" }} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label text-muted small">Էլ. հասցե</label>
                                        <input type="email" className="form-control" placeholder="Email" required style={{ background: "var(--bg-black)", border: "1px solid var(--border-soft)", color: "#fff" }} />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label className="form-label text-muted small">Ձեր Հաղորդագրությունը</label>
                                        <textarea className="form-control" rows={5} placeholder="Գրեք ձեր հարցը..." required style={{ background: "var(--bg-black)", border: "1px solid var(--border-soft)", color: "#fff" }}></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-3 mt-4" style={{ borderRadius: "12px" }}>
                                    {sent ? "✓ Հաղորդագրությունը ուղարկված է" : "Ուղարկել Նամակը"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}