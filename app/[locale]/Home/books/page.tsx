"use client";

import usePrimaryColor from "@/hooks/usePrimaryColor";
import { useGetProductsQuery } from "@/redux/app/Api/getProducts";
import type { Mobiles } from "@/types/home";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function BooksAllPage() {
  const locale = useLocale?.() ?? "en";
  const t = useTranslations("HomePage");
  const { data } = useGetProductsQuery("books");
  const products = Array.isArray(data) ? (data as Mobiles[]) : [];
const {PrimaryColor}=usePrimaryColor();
  return (
    <div style={{ padding: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>{t("allBooksTitle")}</h1>
          <p style={{ margin: "8px 0 0", color: "#6B7280" }}>{t("booksSectionTitle")}</p>
        </div>
        <Link href={`/${locale}/Home`}>
          <button style={{ padding: "10px 14px", borderRadius: 10, background: PrimaryColor, color: "#fff", border: "none", cursor: "pointer" }}>{t("backButton")}</button>
        </Link>
      </div>

      {!products.length ? (
        <div style={{ padding: 28, borderRadius: 18, background: "#F3F4F6", textAlign: "center", color: "#6B7280" }}>
          {t("noBooksMessage")}
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
          {products.map((p: Mobiles, idx: number) => {
            const title = p.Description ?? p.description ?? p.Tag ?? p.tag ?? t("productTagFallback");
            const description = p.Description ?? p.description ?? "";
            const price = p.Price ?? p.price ?? "";
            const imageSrc = p.Image ?? p.image ?? "/assets/images/image-removebg-preview (21) 1.png";
            const keyValue = p.Id ?? p.id ?? `${title}-${idx}`;

            return (
              <div key={keyValue} style={{ borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.06)", padding: 12, display: "flex", flexDirection: "column", minHeight: 340 }}>
                <div style={{ position: "relative", minHeight: 180, overflow: "hidden", borderRadius: 8 }}>
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 220px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 12, flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{title}</h3>
                  <p style={{ margin: "8px 0 0", color: "#6B7280", flex: 1 }}>{description}</p>
                  <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <strong style={{ color: "#111827", fontSize: 16 }}>{price}</strong>
                    <button style={{ background: PrimaryColor, color: "#fff", border: "none", padding: "10px 14px", borderRadius: 10, cursor: "pointer" }}>{t("buyNowButton")}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
