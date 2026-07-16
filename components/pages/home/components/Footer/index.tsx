"use client"

import usePrimaryColor from "@/hooks/usePrimaryColor";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function HomeFooter() {
  const { PrimaryColor } = usePrimaryColor();
  const locale = useLocale() ?? "en";
  const t = useTranslations("HomePage");
  const h = useTranslations("Header");

  const navItems = [
    { key: "home", href: `/${locale}/Home` },
    { key: "shop", href: `/${locale}/Shop` },
    { key: "about", href: `/${locale}/About` },
    { key: "contact", href: `/${locale}/Contact` },
  ];

  return (
    <footer style={{ background: "#111827", color: "#F8FAFC", padding: "60px 24px", marginTop: 40 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 32, gridTemplateColumns: "1.5fr 1fr 1fr 1fr" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "0.04em" }}>{t("footerBrand")}</div>
          <p style={{ color: "#CBD5E1", lineHeight: 1.8, maxWidth: 360 }}>
            {t("footerDescription")}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {navItems.map((item) => (
              <Link key={item.key} href={item.href} style={{ color: "#F8FAFC", textDecoration: "none", fontSize: 14 }}>
                {h(item.key)}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{t("footerFeatured")}</div>
          <Link href={`/${locale}/Home/mobiles`} style={{ color: "#CBD5E1", textDecoration: "none" }}>{t("mobilesSectionTitle")}</Link>
          <Link href={`/${locale}/Home/books`} style={{ color: "#CBD5E1", textDecoration: "none" }}>{t("booksSectionTitle")}</Link>
          <Link href={`/${locale}/Home/malefootwear`} style={{ color: "#CBD5E1", textDecoration: "none" }}>{t("maleFootwearSectionTitle")}</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{t("footerSupport")}</div>
          <Link href={`/${locale}/ForgetPassword`} style={{ color: "#CBD5E1", textDecoration: "none" }}>{t("helpCenter")}</Link>
          <Link href={`/${locale}/ForgetPassword`} style={{ color: "#CBD5E1", textDecoration: "none" }}>{t("privacyPolicy")}</Link>
          <Link href={`/${locale}/ForgetPassword`} style={{ color: "#CBD5E1", textDecoration: "none" }}>{t("terms")}</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{t("footerStayConnected")}</div>
          <p style={{ color: "#CBD5E1", lineHeight: 1.8 }}>
            {t("footerStayConnectedText")}
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <input
              type="email"
              placeholder={t("footerEmailPlaceholder")}
              style={{ flex: 1, borderRadius: 999, border: "1px solid #334155", padding: "12px 16px", background: "#0F172A", color: "#F8FAFC" }}
            />
            <button style={{ borderRadius: 999, border: "none", padding: "12px 18px", background: PrimaryColor, color: "#fff", cursor: "pointer" }}>
              {t("footerSubscribe")}
            </button>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(148, 163, 184, 0.25)", marginTop: 40, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, color: "#94A3B8", fontSize: 14 }}>
        <span>{t("footerCopyrightLeft")}</span>
        <span>{t("footerCopyrightRight")}</span>
      </div>
    </footer>
  );
}
