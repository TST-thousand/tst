import Layout from "@/src/components/layout/Layout";
import BreakSection from "@/src/components/section/BreakSection";
import FaqSectionV2 from "@/src/components/section/FaqSectionV2";
import PageTitle from "@/src/components/section/PageTitle";

export default function PageFaq() {
  return (
    <>
      <Layout>
        <PageTitle name="ТҮГЭЭМЭЛ АСУУЛТУУД" />
        <FaqSectionV2 />
        <BreakSection />
        {/* <GetSection /> */}
      </Layout>
    </>
  );
}
