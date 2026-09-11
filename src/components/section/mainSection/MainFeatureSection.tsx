"use client";

import { FeatureTabItems, solutionFeatureDetails } from "@/src/data/feature";
import Image from "next/image";
import { useState } from "react";

export default function MainFeatureSection() {
  const [activeTab, setActiveTab] = useState(
    () => FeatureTabItems[0]?.id ?? "",
  );
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  return (
    <div className="sect-main flat-animate-tab">
      <div className="s-img_item wow bounceInScale">
        <Image
          src="/assets/images/section/smoke-blue.webp"
          alt=""
          width={1296}
          height={606}
        />
      </div>
      <div className="container">
        {/* <div className="sect-title wow fadeInUp">
          <h2 className="s-title font-3">Бид хэрхэн ажилладаг вэ</h2>
        </div> */}
        <div className="position-relative">
          <ul className="tab-can_do position-relative mx-1" role="tablist">
            {FeatureTabItems.map((item) => (
              <li
                key={item.id}
                className={`nav-tab-item ${activeTab === item.id ? "active" : ""}`}
                role="presentation"
              >
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    setExpandedFeature(null);
                  }}
                  className={`btn_tab tf-btn style-transparent text-body-3 animate-btn ${activeTab === item.id ? "active" : ""}`}
                  role="tab"
                  aria-selected={activeTab === item.id}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content solution-showcase-content">
          {FeatureTabItems.map((item, tabIndex) => (
            <div
              key={item.id}
              className={`tab-pane ${activeTab === item.id ? "active show" : ""}`}
              role="tabpanel"
            >
              <div className="solution-showcase">
                <div className="solution-showcase__intro">
                  <span className="solution-showcase__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-caption font-2 text-main-5">
                      TST SOLUTIONS
                    </p>
                    <h3 className="font-3 h3">{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </div>
                <div className="solution-showcase__features">
                  {item.features.map((feature, index) => {
                    const featureKey = `${item.id}-${index}`;
                    const isExpanded = expandedFeature === featureKey;
                    const detail = solutionFeatureDetails[tabIndex]?.[index];
                    return (
                      <article
                        key={feature.title}
                        className={isExpanded ? "is-expanded" : ""}
                        onMouseEnter={() => setExpandedFeature(featureKey)}
                        onMouseLeave={() => setExpandedFeature(null)}
                      >
                        <button
                          type="button"
                          className="solution-feature__trigger"
                          onClick={() =>
                            setExpandedFeature(isExpanded ? null : featureKey)
                          }
                          aria-expanded={isExpanded}
                          aria-controls={`solution-detail-${featureKey}`}
                        >
                          <span>0{index + 1}</span>
                          <h4 className="font-3 h6">{feature.title}</h4>
                          <span
                            className="solution-feature__toggle"
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </button>
                        <div
                          id={`solution-detail-${featureKey}`}
                          className="solution-feature__detail"
                          aria-hidden={!isExpanded}
                        >
                          <div>
                            <p>{detail?.description ?? feature.text}</p>
                            <ul className="solution-feature__services">
                              {detail?.services.map((service) => (
                                <li key={service}>{service}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
                <div className="solution-showcase__tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>● {tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="br-line" />
    </div>
  );
}
