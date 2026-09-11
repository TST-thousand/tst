import { companyFacts } from "@/src/data/companyFacts";
import CobeGlobe from "@components/common/CobeGlobe";
import Image from "next/image";

export default function CompanyFactsSection() {
  return (
    <div className="sect-main">
      <div className="s-img_item wow bounceInScale">
        <div className="globe-cont">
          <CobeGlobe />
        </div>
        <Image
          width={1078}
          height={620}
          className="img-2"
          src="/assets/images/section/color-bg.webp"
          alt="Image"
        />
      </div>
      <div className="container">
        <div className="sect-title wow fadeInUp">
          <h2 className="s-title font-3 m-0">
            Бидний тухай <br />
            тоо баримт
          </h2>
        </div>
        <div className="company-facts-grid">
          {companyFacts.map((fact) => (
            <div className="wg-company-fact" key={fact.label}>
              <span className="company-fact__label text-body-3">
                {fact.label}
              </span>
              <p className="company-fact__value">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
