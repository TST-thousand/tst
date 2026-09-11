import HeroSection from "@components/section/HeroSection";
import HeroVideo from "@components/layout/HeroVideo";
import HeroSlider from "@components/section/HeroSlider";
import FeatureSection from "@components/section/FeatureSection";
import BenefitSection from "@components/section/BenefitSection";
import HowToUseSection from "@components/section/HowToUseSection";
import Footer from "@components/footer/Footer";
import HackerTextEffect from "@/src/components/common/HackerTextEffect";
import Layout from "@/src/components/layout/Layout";
import PartnerSection from "@/src/components/section/PartnerSection";
import SectionNavIndicator from "@/src/components/common/SectionNavIndicator";

export default function Home() {
  return (
    <>
      <SectionNavIndicator />
      <Layout showFooter={false}>
        <HackerTextEffect />
        <HeroVideo />
        <span className="br-line"></span>
        <HeroSection />
        <HeroSlider />
        <FeatureSection />
        <BenefitSection />
        <HowToUseSection />
        {/* <PricingSection /> */}
        {/* <TestimonialSection /> */}
        {/* <FaqSection /> */}
        {/* <CtaSection /> */}
        <PartnerSection />
        <Footer />
      </Layout>
    </>
  );
}
