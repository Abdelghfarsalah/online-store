"use client"

import usePrimaryColor from "@/hooks/usePrimaryColor";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function HomeFooter() {
  const { PrimaryColor } = usePrimaryColor();
  const locale = useLocale() ?? "en";

  return (
    <footer style={{ background: "#111827", color: "#F8FAFC", padding: "60px 24px", marginTop: 40 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 32, gridTemplateColumns: "1.5fr 1fr 1fr 1fr" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "0.04em" }}>Furniro</div>
          <p style={{ color: "#CBD5E1", lineHeight: 1.8, maxWidth: 360 }}>
            Discover premium mobile, book and footwear collections made for modern shoppers. Stay updated with the best offers and hottest arrivals.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {['Home', 'Shop', 'About', 'Contact'].map((item) => {
              const href = item === 'About' ? `/${locale}/About` : item === 'Contact' ? `/${locale}/Contact` : `/${locale}/Home`;
              return (
                <Link key={item} href={href} style={{ color: "#F8FAFC", textDecoration: "none", fontSize: 14 }}>{item}</Link>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Featured</div>
          <Link href={`/${locale}/Home/mobiles`} style={{ color: "#CBD5E1", textDecoration: "none" }}>Mobiles</Link>
          <Link href={`/${locale}/Home/books`} style={{ color: "#CBD5E1", textDecoration: "none" }}>Books</Link>
          <Link href={`/${locale}/Home/malefootwear`} style={{ color: "#CBD5E1", textDecoration: "none" }}>Male Footwear</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Support</div>
          <Link href={`/${locale}/ForgetPassword`} style={{ color: "#CBD5E1", textDecoration: "none" }}>Help Center</Link>
          <Link href={`/${locale}/ForgetPassword`} style={{ color: "#CBD5E1", textDecoration: "none" }}>Privacy Policy</Link>
          <Link href={`/${locale}/ForgetPassword`} style={{ color: "#CBD5E1", textDecoration: "none" }}>Terms</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Stay Connected</div>
          <p style={{ color: "#CBD5E1", lineHeight: 1.8 }}>
            Get the latest drops, deals and news directly in your inbox.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ flex: 1, borderRadius: 999, border: "1px solid #334155", padding: "12px 16px", background: "#0F172A", color: "#F8FAFC" }}
            />
            <button style={{ borderRadius: 999, border: "none", padding: "12px 18px", background: PrimaryColor, color: "#fff", cursor: "pointer" }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(148, 163, 184, 0.25)", marginTop: 40, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, color: "#94A3B8", fontSize: 14 }}>
        <span>© 2026 Furniro. All rights reserved.</span>
        <span>Made with passion for modern ecommerce.</span>
      </div>
    </footer>
  );
}
