// import Image from "next/image";
// import ScrollColorText from "../common/ScrollColorText";
// // import { Patua_One } from "next/font/google";
// import { Black_Ops_One } from "next/font/google";

// const blackOpsOne = Black_Ops_One({
//   subsets: ["latin"],
//   weight: "400",
// });

// export default function HeroAbout() {
//   return (
//     <>
//       <section className="section-hero-about flat-spacing-2">
//         <div className="img-item-1">
//           <Image
//             loading="lazy"
//             width={1296}
//             height={606}
//             src="/assets/images/item/color-bg-1.png"
//             alt="Image"
//           />
//         </div>
//         <div className="img-item-2">
//           <Image
//             loading="lazy"
//             width={1296}
//             height={606}
//             src="/assets/images/item/pixel-texture.png"
//             alt="Image"
//           />
//         </div>
//         <div className="container position-relative z-5">
//           <div className="row">
//             <div className="col-lg-10 mx-auto">
//               <div className="sect-title hero-about__intro wow fadeInUp">
//                 <h1
//                   className={`s-title font-3 ${blackOpsOne.className}`}
//                   style={{
//                     fontSize: "clamp(78px, 8vw, 130px)",
//                     lineHeight: "1.05",
//                     textShadow: "0 0 60px rgba(120, 170, 255, 0.35)",
//                     color: "#F4F7F5",
//                   }}
//                 >
//                   TST LLC
//                 </h1>

//               </div>
//               <div className="image px-16 px-lg-0">
//                 <Image
//                   loading="lazy"
//                   width={1078}
//                   height={606}
//                   src="/assets/images/item/kk.jpg"
//                   alt="Image"
//                 />
//               </div>
//             </div>
//             <div className="col-lg-4 offset-lg-1">
//               <div className="px-16 px-lg-0">
//                 <div className="rate-per">
//                   <p className="text-main-3">
//                     <span className="fw-bold text-main-5">(4.9/</span>.5.0)
//                   </p>
//                 </div>
//                 <h5 className="title-2 text-linear-2 font-3">
//                   10000 гаруй хэрэглэгчдийн итгэлийг хүлээсэн <br />
//                 </h5>
//                 <div className="brand-wrap mb-lg-0">
//                   <Image
//                     loading="lazy"
//                     width={41}
//                     height={16}
//                     src="/assets/images/brand/brand_1.png"
//                     alt="Brand"
//                   />
//                   <Image
//                     loading="lazy"
//                     width={81}
//                     height={16}
//                     src="/assets/images/brand/brand_2.png"
//                     alt="Brand"
//                   />
//                   <Image
//                     loading="lazy"
//                     width={70}
//                     height={16}
//                     src="/assets/images/brand/brand_1.png"
//                     alt="Brand"
//                   />
//                   <Image
//                     loading="lazy"
//                     width={74}
//                     height={16}
//                     src="/assets/images/brand/brand_2.png"
//                     alt="Brand"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-5 offset-lg-1">
//               <ScrollColorText className="h4 font-3 px-16 px-lg-0 hero-about__statement">
//                 Хувь хүн болон, албан байгууллагын үйл ажиллагааны хэрэгцээ
//                 шаардлагад нийцсэн программ хангамж, тоног төхөөрөмжийн
//                 нийлүүлэлт, угсралт, суурилуулалт, тохиргоо, засвар үйлчилгээ
//                 болон системийн шийдлийг цогцоор нь хүргэн ажилладаг.
//               </ScrollColorText>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import Image from "next/image";
import ScrollColorText from "../common/ScrollColorText";
// import { Patua_One } from "next/font/google";
import { Black_Ops_One } from "next/font/google";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroAbout() {
  return (
    <>
      <section className="section-hero-about flat-spacing-2">
        <div className="img-item-1">
          <Image
            loading="lazy"
            width={1296}
            height={606}
            src="/assets/images/item/color-bg-1.png"
            alt="Image"
          />
        </div>
        <div className="img-item-2">
          <Image
            loading="lazy"
            width={1296}
            height={606}
            src="/assets/images/item/pixel-texture.png"
            alt="Image"
          />
        </div>
        <div className="container position-relative z-5">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="sect-title hero-about__intro wow fadeInUp">
                <div className="hero-about__logo">
                  <Image
                    src="/assets/images/logo/test2.png"
                    alt="TST LLC"
                    width={500}
                    height={180}
                    priority
                    style={{
                      width: "min(500px, 80vw)",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
              ```
              <div className="image px-16 px-lg-0">
                <Image
                  loading="lazy"
                  width={1078}
                  height={606}
                  src="/assets/images/item/kk.jpg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="px-16 px-lg-0">
                <div className="rate-per">
                  <p className="text-main-3">
                    <span className="fw-bold text-main-5">(4.9/</span>.5.0)
                  </p>
                </div>
                <h5 className="title-2 text-linear-2 font-3">
                  10000 гаруй хэрэглэгчдийн итгэлийг хүлээсэн <br />
                </h5>
                <div className="brand-wrap mb-lg-0">
                  <Image
                    loading="lazy"
                    width={41}
                    height={16}
                    src="/assets/images/brand/brand_1.png"
                    alt="Brand"
                  />
                  <Image
                    loading="lazy"
                    width={81}
                    height={16}
                    src="/assets/images/brand/brand_2.png"
                    alt="Brand"
                  />
                  <Image
                    loading="lazy"
                    width={70}
                    height={16}
                    src="/assets/images/brand/brand_1.png"
                    alt="Brand"
                  />
                  <Image
                    loading="lazy"
                    width={74}
                    height={16}
                    src="/assets/images/brand/brand_2.png"
                    alt="Brand"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <ScrollColorText className="h4 font-3 px-16 px-lg-0 hero-about__statement">
                Хувь хүн болон, албан байгууллагын үйл ажиллагааны хэрэгцээ
                шаардлагад нийцсэн программ хангамж, тоног төхөөрөмжийн
                нийлүүлэлт, угсралт, суурилуулалт, тохиргоо, засвар үйлчилгээ
                болон системийн шийдлийг цогцоор нь хүргэн ажилладаг.
              </ScrollColorText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
