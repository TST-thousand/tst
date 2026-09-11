import SlideBrand from "@/src/components/common/SlideBrand";

export default function PartnerSection() {
  return (
    <section
      className="partner-section"
      id="partners"
      aria-labelledby="partners-heading"
    >
      <span className="br-line" />
      <h2 id="partners-heading" className="visually-hidden">Partners</h2>
      <SlideBrand />
    </section>
  );
}
