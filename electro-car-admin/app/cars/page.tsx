"use client";

import { useState } from "react";
import Link from "next/link";

interface Car {
    id: number;
    brand: string;
    name: string;
    price: string;
    year: string;
    image: string;
    range: string;
    acceleration: string;
}

const CARS_DATA: Car[] = [
    { id: 1, brand: "tesla", name: "Tesla Model S Plaid", price: "$89,900", year: "2024", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=500", range: "637 կմ", acceleration: "2.1 վրկ" },
    { id: 2, brand: "porsche", name: "Porsche Taycan GTS", price: "$139,000", year: "2023", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=500", range: "504 կմ", acceleration: "3.7 վրկ" },
    { id: 3, brand: "byd", name: "BYD Seal EV", price: "$42,500", year: "2024", image: "https://images.unsplash.com/photo-1709403211516-e3d8fbf9ee5f?w=500", range: "570 կմ", acceleration: "3.8 վրկ" }
];

export default function CarsPage() {
    const [filter, setFilter] = useState("all");

    const filteredCars = filter === "all"
        ? CARS_DATA
        : CARS_DATA.filter(car => car.brand === filter);

    return (
        <main className="cars-page" style={{ paddingTop: "calc(var(--header-h) + 50px)", minHeight: "100vh" }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold text-white mb-3">Էլեկտրական Մեքենաների Կատալոգ</h1>
                    <p className="text-secondary max-w-600 mx-auto">Ընտրեք լավագույն էլեկտրոմոբիլները՝ երաշխավորված որակով և արագ առաքմամբ։</p>
                </div>

                {/* Filters */}
                <div className="filter-wrapper mb-5">
                    <div className="filter-buttons">
                        {["all", "tesla", "porsche", "byd"].map((b) => (
                            <button
                                key={b}
                                className={`filter-btn ${filter === b ? "active" : ""}`}
                                onClick={() => setFilter(b)}
                            >
                                {b === "all" ? "Բոլորը" : b.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cars Grid */}
                <div className="cars-grid">
                    {filteredCars.map((car) => (
                        <div key={car.id} className="car-card">
                            <div className="car-image-container">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="car-image"
                                />
                                <span className="car-year-badge">{car.year}</span>
                            </div>
                            <div className="car-info">
                                <div className="car-header">
                                    <h3 className="car-title">{car.name}</h3>
                                </div>
                                <div className="car-specs-grid">
                                    <div className="spec-item">
                                        <div className="spec-val">{car.range}</div>
                                        <div className="spec-lbl">Մարտկոց</div>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-val">{car.acceleration}</div>
                                        <div className="spec-lbl">0-100 կմ/ժ</div>
                                    </div>
                                </div>
                                <div className="car-footer">
                                    <div className="car-price-wrapper">
                                        <span className="car-price-label">Գինը սկսած</span>
                                        <span className="car-price">{car.price}</span>
                                    </div>
                                    <Link href="/custom-order" className="btn btn-primary btn-sm">
                                        Պատվիրել
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}