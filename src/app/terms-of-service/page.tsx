import Layout from "@/src/components/layout/Layout";
import BreakSection from "@/src/components/section/BreakSection";
import PageTitle from "@/src/components/section/PageTitle";

const LAST_UPDATED = "2026 оны 9 дүгээр сарын 11";

const SECTIONS = [
  { id: "terms", title: "Үйлчилгээний нөхцөл" },
  { id: "user-responsibility", title: "Хэрэглэгчийн үүрэг хариуцлага" },
  { id: "liability", title: "Хариуцлагын хязгаарлалт" },
  { id: "changes", title: "Нөхцөлийн өөрчлөлт" },
];

export default function PageTermsOfService() {
  return (
    <>
      <Layout>
        <PageTitle name="ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ" />
        <section className="section-legal flat-spacing-3">
          <div className="container">
            <div className="legal-content">
              {/* TODO: Replace with actual legal content reviewed by a lawyer */}
              <p className="legal-content__updated text-body-3">
                Сүүлд шинэчилсэн: {LAST_UPDATED}
              </p>
              <p className="legal-content__intro">
                Энэхүү үйлчилгээний нөхцөл нь түр зуурын жишиг агуулга бөгөөд
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

              <section id="terms" className="legal-section">
                <h2 className="font-3 h4">1. Үйлчилгээний нөхцөл</h2>
                <p>
                  Манай үйлчилгээг ашигласнаар та энэхүү нөхцөлийг хүлээн
                  зөвшөөрсөнд тооцогдоно. Бид үйлчилгээний нөхцөлийг
                  урьдчилан мэдэгдэлгүйгээр өөрчлөх эрхтэй.
                </p>
              </section>

              <section id="user-responsibility" className="legal-section">
                <h2 className="font-3 h4">
                  2. Хэрэглэгчийн үүрэг хариуцлага
                </h2>
                <p>
                  Хэрэглэгч үйлчилгээг хууль ёсны зорилгоор, бусдын эрх ашгийг
                  хөндөхгүйгээр ашиглах үүрэгтэй бөгөөд өөрийн бүртгэлийн
                  мэдээллийн үнэн зөвийг хариуцна.
                </p>
              </section>

              <section id="liability" className="legal-section">
                <h2 className="font-3 h4">3. Хариуцлагын хязгаарлалт</h2>
                <p>
                  Бид үйлчилгээг ашигласнаас үүсэх шууд бус хохирол,
                  алдагдалд аль болох хариуцлага хүлээхгүй бөгөөд энэ талаар
                  хууль тогтоомжид заасан хязгаарлалт хамаарна.
                </p>
              </section>

              <section id="changes" className="legal-section">
                <h2 className="font-3 h4">4. Нөхцөлийн өөрчлөлт</h2>
                <p>
                  Бид энэхүү үйлчилгээний нөхцөлийг цаг үргэлж шинэчилж болох
                  бөгөөд шинэчилсэн хувилбарыг вэбсайт дээр нийтэлснээр
                  хүчин төгөлдөр болно.
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
