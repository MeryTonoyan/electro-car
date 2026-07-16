"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer py-5 mt-5" style={{ borderTop: "1px solid var(--border-soft)", background: "#03110b" }}>
            <div className="container">
                <div className="row g-4 text-start">
                    <div className="col-md-4">
                        <h4 className="fw-bold" style={{ color: "var(--green-light)" }}>ELECTRO</h4>
                        <p className="text-muted small mt-3">
                            Բարձրակարգ էլեկտրական մեքենաների ներկրում և վաճառք Հայաստանում: Ապագան էլեկտրական է:
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h5 className="text-white mb-3">Մենյու</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><Link href="/" className="text-muted text-decoration-none hover-green">Գլխավոր</Link></li>
                            <li><Link href="/cars" className="text-muted text-decoration-none hover-green">Մեքենաներ</Link></li>
                            <li><Link href="/custom-order" className="text-muted text-decoration-none hover-green">Անհատական Պատվեր</Link></li>
                            <li><Link href="/contact" className="text-muted text-decoration-none hover-green">Կապ</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5 className="text-white mb-3">Կապ</h5>
                        <p className="text-muted small mb-2">📍 Երևան, Արշակունյաց 75</p>
                        <p className="text-muted small mb-2">📞 +374 10 555 000</p>
                        <p className="text-muted small">📧 info@electro.am</p>
                    </div>
                </div>

                <hr style={{ borderColor: "var(--border-soft)", margin: "40px 0 20px 0" }} />

                <div className="text-center text-muted small">
                    <p>&copy; {new Date().getFullYear()} ELECTRO. Բոլոր իրավունքները պաշտպանված են:</p>
                </div>
            </div>
        </footer>
    );
}







