"use client";

import { Product, products } from "@/src/data/products";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const EQUIPMENT_TABS = ["Камер", "Switch", "Рак"] as const;
type EquipmentTab = (typeof EQUIPMENT_TABS)[number];

function getEquipmentTab(category: string): EquipmentTab {
  const normalized = category.toLowerCase();
  if (normalized.includes("switch") || normalized.includes("свич")) {
    return "Switch";
  }
  if (normalized.includes("рак") || normalized.includes("rack")) {
    return "Рак";
  }
  return "Камер";
}

function matchesQuery(product: Product, query: string) {
  const searchableText = [
    product.name,
    product.category,
    product.description,
    product.details,
    ...product.features,
    ...product.specifications.flatMap((spec) => [spec.label, spec.value]),
  ]
    .join(" ")
    .toLowerCase();
  return searchableText.includes(query.toLowerCase().trim());
}

function parsePrice(price: string) {
  return Number(price.replace(/[^\d]/g, "")) || 0;
}

function formatPrice(value: number) {
  return value.toLocaleString("en-US");
}

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<EquipmentTab>("Камер");
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const tabProducts = useMemo(
    () => products.filter((product) => getEquipmentTab(product.category) === activeTab),
    [activeTab],
  );

  const availableCategories = useMemo(
    () => Array.from(new Set(tabProducts.map((product) => product.category))),
    [tabProducts],
  );

  const filteredProducts = useMemo(() => {
    const min = priceMin ? Number(priceMin) : null;
    const max = priceMax ? Number(priceMax) : null;

    return tabProducts.filter((product) => {
      if (!matchesQuery(product, query)) return false;
      if (
        selectedCategories.length &&
        !selectedCategories.includes(product.category)
      ) {
        return false;
      }
      const priceValue = parsePrice(product.price);
      if (min !== null && priceValue < min) return false;
      if (max !== null && priceValue > max) return false;
      return true;
    });
  }, [tabProducts, query, selectedCategories, priceMin, priceMax]);

  const handleTabChange = (tab: EquipmentTab) => {
    setActiveTab(tab);
    setSelectedCategories([]);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );
  };

  const clearCategoryFilter = () => {
    setSelectedCategories([]);
  };

  const clearPriceFilter = () => {
    setPriceMin("");
    setPriceMax("");
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    clearPriceFilter();
  };

  const priceRangeLabel = useMemo(() => {
    if (!priceMin && !priceMax) return "";
    if (priceMin && priceMax) {
      return `${formatPrice(Number(priceMin))}₮ - ${formatPrice(Number(priceMax))}₮`;
    }
    if (priceMin) return `${formatPrice(Number(priceMin))}₮ дээш`;
    return `${formatPrice(Number(priceMax))}₮ хүртэл`;
  }, [priceMin, priceMax]);

  const activeFilterChips = useMemo(
    () => [
      ...selectedCategories.map((category) => ({
        key: `category-${category}`,
        label: category,
        onRemove: () => toggleCategory(category),
      })),
      ...(priceRangeLabel
        ? [
            {
              key: "price-range",
              label: priceRangeLabel,
              onRemove: clearPriceFilter,
            },
          ]
        : []),
    ],
    [selectedCategories, priceRangeLabel],
  );

  useEffect(() => {
    if (!selectedProduct) return;
    const scrollY = window.scrollY;
    const previousBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setSelectedProduct(null);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      Object.assign(document.body.style, previousBodyStyles);
      window.scrollTo(0, scrollY);
    };
  }, [selectedProduct]);

  return (
    <section className="section-page-blog flat-spacing-2 product-catalog">
      <div className="container">
        <div className="content-1200">
          <div className="product-catalog__toolbar">
            <div>
              <div
                className="product-catalog__tabs"
                role="tablist"
                aria-label="Тоног төхөөрөмжийн төрөл"
              >
                {EQUIPMENT_TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    className={`tf-btn-tab${activeTab === tab ? " active" : ""}`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <h2 className="font-3 h3 text-linear">Бүтээгдэхүүний төрөл</h2>
            </div>
            <label className="product-search" htmlFor="product-search">
              <i className="icon icon-MagnifyingGlass" aria-hidden="true"></i>
              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Бүтээгдэхүүн хайх..."
              />
            </label>
          </div>

          <div className="product-filters">
            <div className="product-filter">
              <div className="product-filter__header">
                <span className="product-filter__label">Загвар</span>
                <button
                  type="button"
                  className="product-filter__clear"
                  onClick={clearCategoryFilter}
                  disabled={!selectedCategories.length}
                >
                  Арилгах
                </button>
              </div>
              <div className="product-filter__options">
                {availableCategories.length ? (
                  availableCategories.map((category) => (
                    <label className="product-filter__checkbox" key={category}>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                      />
                      <span>{category}</span>
                    </label>
                  ))
                ) : (
                  <span className="product-filter__empty">
                    Энэ ангилалд загвар алга
                  </span>
                )}
              </div>
            </div>

            <div className="product-filter">
              <div className="product-filter__header">
                <span className="product-filter__label">Үнийн дүн</span>
                <button
                  type="button"
                  className="product-filter__clear"
                  onClick={clearPriceFilter}
                  disabled={!priceMin && !priceMax}
                >
                  Арилгах
                </button>
              </div>
              <div className="product-filter__range">
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="Min"
                  value={priceMin}
                  onChange={(event) => setPriceMin(event.target.value)}
                />
                <span className="product-filter__range-sep">—</span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="Max"
                  value={priceMax}
                  onChange={(event) => setPriceMax(event.target.value)}
                />
                <span className="product-filter__range-unit">₮</span>
              </div>
            </div>
          </div>

          {activeFilterChips.length > 0 && (
            <div className="product-catalog__chips">
              {activeFilterChips.map((chip) => (
                <button
                  key={chip.key}
                  type="button"
                  className="product-chip"
                  onClick={chip.onRemove}
                >
                  {chip.label}
                  <span aria-hidden="true">×</span>
                </button>
              ))}
              {activeFilterChips.length >= 2 && (
                <button
                  type="button"
                  className="product-chip product-chip--clear"
                  onClick={clearAllFilters}
                >
                  Бүгдийг цуцлах
                </button>
              )}
            </div>
          )}

          {filteredProducts.length ? (
            <>
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <button
                    className="product-card hover-img"
                    type="button"
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`View details for ${product.name}`}
                  >
                    <span className="product-card__image img-style">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 575px) 100vw, (max-width: 767px) 50vw, (max-width: 1199px) 33vw, 20vw"
                      />
                    </span>
                    <span className="product-card__content">
                      <span className="product-card__category text-body-3">
                        {product.category}
                      </span>
                      <span className="product-card__name font-3 h5">
                        {product.name}
                      </span>
                      <span className="product-card__description">
                        {product.description}
                      </span>
                      <span className="product-card__price text-body-1">
                        {product.price}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
              {/* <div className="product-catalog__action">
                <Link
                  href="/use-case-detail"
                  className="tf-btn text-body-3 style-2 animate-btn animate-dark"
                >
                  Бүгдийг үзэх
                </Link>
              </div> */}
            </>
          ) : (
            <p className="product-empty text-body-1">Бүтээгдэхүүн олдсонгүй</p>
          )}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <div
      className="product-modal"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="product-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Close product details"
        >
          <i className="icon-close"></i>
        </button>
        <div className="product-modal__image">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        <div className="product-modal__content">
          <div className="product-modal__category-row">
            <span className="product-card__category text-body-3">
              {product.category}
            </span>
          </div>
          <h2 id="product-modal-title" className="font-3 h3 text-linear">
            {product.name}
          </h2>
          <p className="product-modal__price text-body-1">{product.price}</p>
          <p>{product.description}</p>
          <p>{product.details}</p>
          <div className="br-line has-dot"></div>
          <h5 className="font-3">Гол онцлогууд</h5>
          <ul className="product-features">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <h5 className="font-3">Үзүүлэлтүүд</h5>
          <dl className="product-specifications">
            {product.specifications.map((specification) => (
              <div key={specification.label}>
                <dt>{specification.label}</dt>
                <dd>{specification.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
