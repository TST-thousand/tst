import { SectHeader } from "@components/section/SectHeader";
import { SectTagline } from "@components/section/SectTagline";
import MainHowSection from "./mainSection/MainHowSection";

export default function HowToUseSection() {
  return (
    <>
      <section className="section-how-to" id="howToUse">
        <SectHeader value={4} label="HOW TO USE" />
        <span className="br-line"></span>
        <SectTagline prominent name={"Онцлог ба давуу тал."} />
        <span className="br-line"></span>
        <MainHowSection />
        <span className="br-line"></span>
        {/* <SectBottom /> */}
        <span className="br-line"></span>
      </section>
    </>
  );
}
