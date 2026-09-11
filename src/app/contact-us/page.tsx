import Map from "@/src/components/common/Map";
import Layout from "@/src/components/layout/Layout";
import BreakSection from "@/src/components/section/BreakSection";
import ContactSection from "@/src/components/section/ContactSection";
import GetSection from "@/src/components/section/GetSection";
import PageTitle from "@/src/components/section/PageTitle";

export default function PageContact() {
  return (
    <>
      <Layout>
        <PageTitle name="БИДЭНТЭЙ ХОЛБОГДОХ" />
        <ContactSection />
        <BreakSection />
        <section className="section-map flat-spacing-3">
          <div className="container">
            <Map />
          </div>
        </section>
        <BreakSection />
        <GetSection />
        <BreakSection />
      </Layout>
    </>
  );
}
