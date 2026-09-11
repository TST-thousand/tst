import { SectHeader } from "@/src/components/section/SectHeader";
import { SectTagline } from "@/src/components/section/SectTagline";
import MainFeatureSection from "./mainSection/MainFeatureSection";

export default function FeatureSection() {
  return (
    <>
      <section className="section-feature" id="features">
        <SectHeader value={2} label={"FEATURES"} />
        <span className="br-line"></span>
        <SectTagline prominent name={"Бид хэрхэн ажилладаг вэ"} />
        <span className="br-line"></span>
        <MainFeatureSection />
        <span className="br-line"></span>
        {/* <SectBottom /> */}
        <span className="br-line"></span>
      </section>
    </>
  );
}
