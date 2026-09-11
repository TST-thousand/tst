import Layout from "@/src/components/layout/Layout";
import BenefitSectionV2 from "@/src/components/section/BenefitSectionV2";
import BreakSection from "@/src/components/section/BreakSection";
import CompanyFactsSection from "@/src/components/section/CompanyFactsSection";
import HeroAbout from "@/src/components/section/HeroAbout";
import PageTitle from "@/src/components/section/PageTitle";

export default function PageAboutUs() {
  return (
    <>
      <Layout>
        <div className="about-page">
          <PageTitle name="БИДНИЙ ТУХАЙ" />
          <HeroAbout />
          <BreakSection />
          <BenefitSectionV2 />
          <BreakSection />
          <BreakSection />
          <section className="section-testimonial tes-2 flat-spacing-3">
            <CompanyFactsSection />
          </section>
          <BreakSection />
        </div>
      </Layout>
    </>
  );
}
