"use client";

import Link from "next/link";
import { useState } from "react";

const responsibilities = [
  "Компьютер ба төхөөрөмжийн тохиргоо",
  "Програм суулгалт, оношилгоо, засвар",
  "Сүлжээ, Wi-Fi, LAN-ийн доголдол шийдвэрлэх",
  "Принтер, дагалдах төхөөрөмжийн дэмжлэг",
  "CCTV болон техник хангамжийн арчилгаа",
  "Хэрэглэгчийн өдөр тутмын техникийн туслалцаа",
  "IT хөрөнгийн бүртгэл ба удирдлага",
  "Суурь кибер аюулгүй байдлын дэмжлэг",
];
const responsibilityDescriptions = [
  "Ажлын байрны компьютер, дагалдах төхөөрөмжийн тохиргоо болон өдөр тутмын найдвартай ажиллагааг хариуцна.",
  "Програм хангамжийн суурилуулалт, оношилгоо, шинэчлэлт болон алдааг шуурхай шийдвэрлэнэ.",
  "Дотоод сүлжээ, LAN болон Wi-Fi орчны тасралтгүй, аюулгүй холболтыг хянаж сайжруулна.",
  "Принтер болон бусад дагалдах төхөөрөмжийн ашиглалт, холболт, засвар үйлчилгээг зохион байгуулна.",
  "Камер болон техникийн дэд бүтцийн хэвийн ажиллагааг тогтмол шалгаж, шаардлагатай арга хэмжээг авна.",
  "Хэрэглэгчдэд ойлгомжтой, хурдан техникийн туслалцаа үзүүлж, ажлын тасалдлыг багасгана.",
  "Байгууллагын IT тоног төхөөрөмжийн бүртгэл, төлөвлөлт, ашиглалтын хяналтыг нэгтгэн удирдана.",
  "Үндсэн хамгаалалтын тохиргоо, шинэчлэлт болон эрсдэлийн хяналтаар мэдээллийн аюулгүй байдлыг дэмжинэ.",
];
const serviceModels = [
  ["Алсын дэмжлэг", "Шуурхай оношилгоо, зөвлөгөөг зайнаас үзүүлнэ."],
  ["Газар дээрх дэмжлэг", "Шаардлагатай үед танай оффист ажиллана."],
  ["Төлөвлөгөөт үйлчилгээ", "Тогтмол хяналт, урьдчилан сэргийлэх засвар."],
  ["Яаралтай тусламж", "Чухал асуудалд тохирсон хурдан хариу арга хэмжээ."],
];
const plans = [
  {
    name: "IT Basic",
    description:
      "Жижиг багийн өдөр тутмын IT хэрэгцээнд зориулсан суурь дэмжлэг.",
    features: [
      "Техникийн суурь дэмжлэг",
      "Компьютер, програмын оношилгоо",
      "Алсын зайны тусламж",
      "Суурь сүлжээний дэмжлэг",
      "Төлөвлөгөөт арчилгаа",
    ],
  },
  {
    name: "IT Standard",
    description: "Тогтмол IT дэмжлэг шаарддаг өсөн нэмэгдэж буй багуудад.",
    features: [
      "Basic багцын бүх үйлчилгээ",
      "Газар дээрх дэмжлэг",
      "Сүлжээ ба төхөөрөмжийн удирдлага",
      "Принтер, дагалдах төхөөрөмж",
      "CCTV техникийн дэмжлэг",
    ],
    recommended: true,
  },
  {
    name: "IT Premium",
    description:
      "Дэд бүтэц, хяналт, аюулгүй байдлыг цогцоор нь хариуцуулах багц.",
    features: [
      "Standard багцын бүх үйлчилгээ",
      "Тэргүүлэх түвшний дэмжлэг",
      "Илүү давтамжтай газар дээрх ажил",
      "Дэд бүтцийн хяналт",
      "IT хөрөнгө, хандалтын удирдлага",
    ],
  },
];

export default function ContractedItService() {
  const [openResponsibility, setOpenResponsibility] = useState<number | null>(
    null,
  );

  return (
    <section className="section-contracted-it flat-spacing-2">
      <div className="container">
        {/* <header className="contracted-it__intro">
          <p className="text-caption font-2 text-main-5">ГЭРЭЭТ IT ҮЙЛЧИЛГЭЭ</p>
          <p className="text-body-1">
            Төхөөрөмж, сүлжээ, хэрэглэгчийн дэмжлэгийг нэг баг болгон удирдаж,
            танай ажлын тасралтгүй байдлыг хамгаална.
          </p>
        </header> */}
        <section className="contracted-it__responsibilities">
          <div className="contracted-it__section-heading">
            <p className="text-caption font-2 text-main-5">
              МЭРГЭЖЛИЙН ДЭМЖЛЭГ
            </p>
            <h2 className="font-3 h3">IT Support Engineer-ийн үүрэг</h2>
          </div>
          <div className="contracted-it__responsibility-list">
            {responsibilities.map((title, index) => (
              <article
                key={title}
                className={`contracted-it__responsibility ${openResponsibility === index ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenResponsibility(
                      openResponsibility === index ? null : index,
                    )
                  }
                  aria-expanded={openResponsibility === index}
                  aria-controls={`responsibility-${index}`}
                >
                  <span>0{index + 1}</span>
                  <h3 className="h5 font-3">{title}</h3>
                  <i aria-hidden="true">+</i>
                </button>
                <div
                  id={`responsibility-${index}`}
                  className="contracted-it__responsibility-detail"
                >
                  <p>{responsibilityDescriptions[index]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="contracted-it__models">
          <div className="contracted-it__section-heading">
            <p className="text-caption font-2 text-main-5">
              УЯН ХАТАН ҮЙЛЧИЛГЭЭ
            </p>
            <h2 className="font-3 h3">Ажлын хэлбэр</h2>
          </div>
          <div className="contracted-it__model-grid">
            {serviceModels.map(([title, text]) => (
              <article key={title} className="contracted-it__model-card">
                <span>✦</span>
                <h3 className="font-3 h5">{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="contracted-it__plans">
          <div className="contracted-it__section-heading contracted-it__section-heading--center">
            <p className="text-caption font-2 text-main-5">
              ТАНЫ ХЭРЭГЦЭЭНД ТОХИРУУЛСАН
            </p>
            <h2 className="font-3 h3">Гэрээт IT үйлчилгээний багцууд</h2>
          </div>
          <div className="contracted-it__plan-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`contracted-it__plan ${plan.recommended ? "contracted-it__plan--recommended" : ""}`}
              >
                <h3 className="font-3 h4">{plan.name}</h3>
                <p>{plan.description}</p>
                <span className="br-line has-dot" />
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href={`/contact-us?plan=${encodeURIComponent(plan.name)}#contact-form`}
                  className="tf-btn text-body-3 style-2 animate-btn animate-dark"
                >
                  Үнийн санал авах
                </Link>
              </article>
            ))}
          </div>
        </section>
        {/* <div className="contracted-it__cta">
          <div>
            <p className="text-caption font-2 text-main-5">ЭХЛЭХЭД БЭЛЭН ҮҮ?</p>
            <h2 className="font-3 h4">IT дэмжлэгийн шийдлээ ярилцъя.</h2>
          </div>
          <Link
            href="/contact-us"
            className="tf-btn text-body-3 style-2 animate-btn animate-dark"
          >
            Холбоо барих
          </Link>
        </div> */}
      </div>
    </section>
  );
}
