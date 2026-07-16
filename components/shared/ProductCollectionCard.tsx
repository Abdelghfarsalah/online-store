"use client";

import usePrimaryColor from "@/hooks/usePrimaryColor";
import { Mobiles, MobilesCollectionCardProps } from "@/types/home";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCollectionCard({
  title,
  products = [],
  sectionPath = "mobiles",
  tagLabel,
}: MobilesCollectionCardProps) {
  const t = useTranslations("HomePage");
  const locale = useLocale?.() ?? "en";
  const preview: Mobiles[] = Array.isArray(products) ? products : [];
  const { PrimaryColor } = usePrimaryColor();
  const [selectedProduct, setSelectedProduct] = useState<Mobiles | null>(null);
  return (
    <div
      style={{
        width: "100%",
        padding: "30px",
        background: "#fff",
        borderRadius: "18px",
      }}
    >
      {/* Title + See All */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18, flexWrap: "wrap", gap: 12 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1F2937", margin: 0 }}>{title}</h2>
        <Link href={`/${locale}/Home/${sectionPath}`} style={{ textDecoration: "none" }}>
          <motion.button  whileHover={{ scale: 1.1,
            textDecoration: "underline",
            }} style={{ color: PrimaryColor, padding: "10px 16px",fontSize:"20px",
            borderRadius: 12, border: "none", cursor: "pointer", minWidth: 120 }}>
            {t("seeAllButton")}
          </motion.button>
        </Link>
      </div>

      {/* Products */}
      <div className="productsGrid">
        {preview.slice(0, 6).map((product, idx: number) => {
          const imageSrc = product.Image ?? product.image ?? "/assets/images/image-removebg-preview (21) 1.png";
          const titleText = product.Description ?? product.description ?? product.Tag ?? product.tag ?? t("productTagFallback");
          const tagText = product.Tag ?? product.tag ?? t("productTagFallback");
          const priceText = product.Price ?? product.price ?? "";
          const keyValue = product.Id ?? product.id ?? `${tagText}-${idx}`;
          const labelText = tagLabel ?? t("productTagLabel");

          return (
            <div key={keyValue} className="productCard" onClick={() => setSelectedProduct(product)}>
              <div className="productImage">
                <Image
                  src={imageSrc}
                  alt={titleText}
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="cardBody">
                <div className="cardHeader">
                  <div>
                    <div className="productLabel">{labelText}</div>
                    <div style={{
                      height: "40px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }} className="productTitle">{titleText}</div>
                  </div>
                  <span className="priceBadge">{priceText}</span>
                </div>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedProduct(product);
                  }}
                  style={{
                    backgroundColor: PrimaryColor,
                  }}
                  className="buyButton"
                >
                  {t("buyNowButton")}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <div className="modalOverlay" onClick={() => setSelectedProduct(null)}>
          <div className="modalCard" onClick={(event) => event.stopPropagation()}>
            <button className="modalClose" onClick={() => setSelectedProduct(null)}>
              {t("closeButton")}
            </button>
            <div className="modalImage">
              <Image
                src={selectedProduct.Image ?? selectedProduct.image ?? "/assets/images/image-removebg-preview (21) 1.png"}
                alt={selectedProduct.Description ?? selectedProduct.description ?? selectedProduct.Tag ?? selectedProduct.tag ?? t("productTagFallback")}
                fill
                sizes="(max-width: 640px) 100vw, 480px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="modalBody">
              <div className="modalHeader">
                <span className="productLabel">{tagLabel ?? t("productTagLabel")}</span>
                <h2>{selectedProduct.Tag ?? selectedProduct.tag ?? selectedProduct.Brand ?? selectedProduct.brand ?? selectedProduct.Description ?? selectedProduct.description ?? t("productTagFallback")}</h2>
              </div>
              <p className="modalDescription">
                {selectedProduct.Description && (selectedProduct.Tag || selectedProduct.Brand)
                  ? selectedProduct.Description
                  : selectedProduct.description ?? selectedProduct.Tag ?? selectedProduct.tag ?? ""}
              </p>
              <div className="modalFooter">
                <strong>{selectedProduct.Price ?? selectedProduct.price ?? ""}</strong>
                <button className="buyButton" onClick={() => setSelectedProduct(null)}>{t("buyNowButton")}</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .productsGrid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(6, minmax(0, 1fr));
        }

        .productCard {
          background: #f8fafc;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
          display: grid;
          grid-template-rows: auto 1fr;
          min-height: 360px;
          border: 1px solid #e2e8f0;
        }

        .productCard:hover {
          transform: translateY(-4px);
          background: #f1f5f9;
        }

        .productImage {
          position: relative;
          min-height: 180px;
          overflow: hidden;
        }

        .productBadge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(17, 24, 39, 0.9);
          color: #fff;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }

        .cardBody {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cardHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .productLabel {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .productTitle {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          line-height: 1.25;
        }

        .priceBadge {
          color: #111827;
          font-weight: 700;
          padding: 6px 12px;
          background: #e2e8f0;
          border-radius: 999px;
          font-size: 14px;
          white-space: nowrap;
        }

        .buyButton {
          margin-top: auto;
          width: 100%;
          border: none;
          border-radius: 14px;
          padding: 12px 14px;
          background: #111827;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .productsGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .productsGrid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }

        .modalOverlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modalCard {
          width: min(30%, 900px);
          max-width: 900px;
          max-height: 90vh;
          overflow: auto;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 35px 80px rgba(15, 23, 42, 0.18);
          position: relative;
        }

        .modalClose {
          position: absolute;
          top: 20px;
          right: 20px;
          border: none;
          background: #111827;
          color: #fff;
          border-radius: 999px;
          padding: 10px 14px;
          cursor: pointer;
          font-weight: 700;
        }

        .modalImage {
          position: relative;
          min-height: 320px;
          overflow: hidden;
        }

        .modalBody {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modalHeader {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modalHeader h2 {
          margin: 0;
          font-size: 28px;
          color: #111827;
          line-height: 1.15;
        }

        .modalDescription {
          color: #475569;
          line-height: 1.8;
          font-size: 15px;
        }

        .modalFooter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}