import Layout from "@/src/components/layout/Layout";
import BreakSection from "@/src/components/section/BreakSection";
import PageTitle from "@/src/components/section/PageTitle";

const LAST_UPDATED = "2026 оны 9 дүгээр сарын 11";

const SECTIONS = [
  { id: "data-collection", title: "Цуглуулдаг мэдээлэл" },
  { id: "data-use", title: "Мэдээллийг хэрхэн ашиглах" },
  { id: "data-protection", title: "Мэдээллийн хамгаалалт" },
  { id: "contact", title: "Холбоо барих" },
];

export default function PagePrivacyPolicy() {
  return (
    <>
      <Layout>
        <PageTitle name="НУУЦЛАЛЫН БОДЛОГО" />
        <section className="section-legal flat-spacing-3">
          <div className="container">
            <div className="legal-content">
              {/* TODO: Replace with actual legal content reviewed by a lawyer */}
              <p className="legal-content__updated text-body-3">
                Сүүлд шинэчилсэн: {LAST_UPDATED}
              </p>
              <p className="legal-content__intro">
                Энэхүү нууцлалын бодлого нь түр зуурын жишиг агуулга бөгөөд
                албан ёсны хууль зүйн баримт бичиг биш болно.
              </p>

              <nav className="legal-toc" aria-label="Агуулгын хүснэгт">
                <p className="legal-toc__title text-body-3">Агуулга</p>
                <ol>
                  {SECTIONS.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        {index + 1}. {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <section id="data-collection" className="legal-section">
                <h2 className="font-3 h4">1. Цуглуулдаг мэдээлэл</h2>
                <p>
                  Бид үйлчилгээгээ хүргэхийн тулд таны нэр, холбогдох утасны
                  дугаар, и-мэйл хаяг зэрэг үндсэн хувийн мэдээллийг цуглуулж
                  болно.
                </p>
              </section>

              <section id="data-use" className="legal-section">
                <h2 className="font-3 h4">2. Мэдээллийг хэрхэн ашиглах</h2>
                <p>
                  Цуглуулсан мэдээллийг зөвхөн үйлчилгээ үзүүлэх, хэрэглэгчтэй
                  холбогдох, үйлчилгээний чанарыг сайжруулах зорилгоор
                  ашиглана.
                </p>
              </section>

              <section id="data-protection" className="legal-section">
                <h2 className="font-3 h4">3. Мэдээллийн хамгаалалт</h2>
                <p>
                  Бид таны хувийн мэдээллийг зөвшөөрөлгүй нэвтрэлт, алдагдал,
                  ашиглалтаас хамгаалахын тулд зохих техникийн болон
                  зохион байгуулалтын арга хэмжээг авч ажилладаг.
                </p>
              </section>

              <section id="contact" className="legal-section">
                <h2 className="font-3 h4">4. Холбоо барих</h2>
                <p>
                  Нууцлалын бодлоготой холбоотой асуулт байвал бидэнтэй
                  харилцагчийн үйлчилгээний холбоо барих хэсгээр дамжуулан
                  холбогдоно уу.
                </p>
              </section>
            </div>
          </div>
        </section>
        <BreakSection />
      </Layout>
    </>
  );
}
