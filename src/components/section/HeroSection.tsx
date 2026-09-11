import { SectHeader } from "@/src/components/section/SectHeader";
import { SectTagline } from "@/src/components/section/SectTagline";
import { MainHeroSection } from "./mainSection/MainHeroSection";

export default function HeroSection() {
  return (
    <>
      <section className="section-hero" id="hero">
        <SectHeader value={1} label={"HERO"} />
        <span className="br-line"></span>
        <SectTagline prominent name={"Технологийн шийдлийг нэг дороос"} />
        <span className="br-line"></span>
        <MainHeroSection />
        <span className="br-line"></span>
        {/* <SectBottom /> */}
        <span className="br-line"></span>
        {/* <SlideBrand /> */}
      </section>
    </>
  );
}
