"use client";

import { useState } from "react";
import Link from "next/link";

interface Car {
    id: number;
    brand: string;
    model: string;
    year: string;
    price: string;
    status: string;
}

export default function AdminPage() {
    const [tab, setTab] = useState<"dash" | "list" | "add">("dash");
    const [cars, setCars] = useState<Car[]>([
        { id: 1, brand: "Tesla", model: "Model S Plaid", year: "2024", price: "$89,900", status: "Առկա" },
        { id: 2, brand: "Porsche", model: "Taycan GTS", year: "2023", price: "$139,000", status: "Առկա" }
    ]);
    const [form, setForm] = useState({ brand: "", model: "", year: "", price: "", status: "Առկա" });

    const addCar = (e: React.FormEvent) => {
        e.preventDefault();
        setCars([...cars, { id: Date.now(), ...form }]);
        setForm({ brand: "", model: "", year: "", price: "", status: "Առկա" });
        setTab("list");
    };

    return (
        <div className="admin-wrapper" style={{ display: "flex", minHeight: "100vh" }}>
            <aside className="sidebar" style={{ width: "260px", background: "var(--bg-card)", borderRight: "1px solid var(--border-soft)", padding: "30px 20px" }}>
                <div className="logo mb-5">
                    <span className="logo-icon">
                        <svg viewBox="0 0 24 24" style={{ width: "20px" }}><path d="M13 2 4.09 12.97a1 1 0 0 0 .76 1.65H11l-1.81 7.7a.5.5 0 0 0 .89.38l8.71-11.21a1 1 0 0 0-.79-1.62H13l1.4-7.32A.5.5 0 0 0 13 2z" /></svg>
                    </span>
                    <span className="logo-text" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#fff" }}>ADMIN PANEL</span>
                </div>
                <div className="d-flex flex-column gap-2">
                    <button className={`btn text-start text-white w-100 ${tab === "dash" ? "active" : ""}`} style={{ background: tab === "dash" ? "var(--green-dark)" : "transparent", border: "none", padding: "12px" }} onClick={() => setTab("dash")}>Կառավարման վահանակ</button>
                    <button className={`btn text-start text-white w-100 ${tab === "list" ? "active" : ""}`} style={{ background: tab === "list" ? "var(--green-dark)" : "transparent", border: "none", padding: "12px" }} onClick={() => setTab("list")}>Մեքենաների ցուցակ</button>
                    <button className={`btn text-start text-white w-100 ${tab === "add" ? "active" : ""}`} style={{ background: tab === "add" ? "var(--green-dark)" : "transparent", border: "none", padding: "12px" }} onClick={() => setTab("add")}>Ավելացնել նոր մեքենա</button>
                    <Link href="/" className="btn btn-outline-danger mt-5 w-100" style={{ borderRadius: "8px" }}>Դեպի կայք</Link>
                </div>
            </aside>

            <main style={{ flex: 1, padding: "50px", background: "var(--bg-black)", color: "var(--text-primary)" }}>
                {tab === "dash" && (
                    <div>
                        <h2 className="fw-bold mb-4">Dashboard</h2>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="p-4 rounded-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border-soft)" }}>
                                    <h5 className="text-secondary">Ընդհանուր մեքենաներ</h5>
                                    <h2 className="text-white fw-bold mt-2">{cars.length}</h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="p-4 rounded-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border-soft)" }}>
                                    <h5 className="text-secondary">Ակտիվ հայտեր</h5>
                                    <h2 className="text-white fw-bold mt-2">12</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {tab === "list" && (
                    <div>
                        <h2 className="fw-bold mb-4">Մեքենաներ</h2>
                        <div className="table-responsive" style={{ background: "var(--bg-card)", borderRadius: "12px", border: "1px solid var(--border-soft)", padding: "20px" }}>
                            <table className="table table-dark table-striped mb-0">
                                <thead>
                                <tr style={{ borderBottom: "1px solid var(--border-soft)" }}>
                                    <th>Մակնիշ</th>
                                    <th>Մոդել</th>
                                    <th>Տարեթիվ</th>
                                    <th>Գին</th>
                                    <th>Կարգավիճակ</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cars.map(c => (
                                    <tr key={c.id}>
                                        <td style={{ color: "var(--green-light)", fontWeight: "600" }}>{c.brand}</td>
                                        <td>{c.model}</td>
                                        <td>{c.year}</td>
                                        <td className="text-success fw-bold">{c.price}</td>
                                        <td><span className="badge bg-success">{c.status}</span></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {tab === "add" && (
                    <div>
                        <h2 className="fw-bold mb-4">Ավելացնել նոր մեքենա</h2>
                        <div className="p-4 rounded-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border-soft)", maxWidth: "600px" }}>
                            <form onSubmit={addCar}>
                                <div className="mb-3">
                                    <label className="form-label text-secondary small">Մակնիշ</label>
                                    <input type="text" placeholder="Օր.՝ Tesla" className="form-control bg-dark text-white" value={form.brand} onChange={e => setForm({...form, brand: e.target.value})} required style={{ border: "1px solid var(--border-soft)" }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-secondary small">Մոդել</label>
                                    <input type="text" placeholder="Օր.՝ Model X" className="form-control bg-dark text-white" value={form.model} onChange={e => setForm({...form, model: e.target.value})} required style={{ border: "1px solid var(--border-soft)" }} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-secondary small">Տարեթիվ</label>
                                        <input type="number" placeholder="2024" className="form-control bg-dark text-white" value={form.year} onChange={e => setForm({...form, year: e.target.value})} required style={{ border: "1px solid var(--border-soft)" }} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-secondary small">Գին</label>
                                        <input type="text" placeholder="$85,000" className="form-control bg-dark text-white" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required style={{ border: "1px solid var(--border-soft)" }} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-3 mt-3">Ավելացնել Կատալոգում</button>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}