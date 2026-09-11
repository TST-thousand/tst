import { Suspense } from "react";
import FormGet2 from "../form/FormGet2";

export default function GetSection() {
  return (
    <>
      <section className="section-get-in flat-spacing-3" id="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <ul className="info-us-list px-16 px-lg-0 mb-lg-0">
                <li>
                  <p className="title-sub text-body-3">Оффис</p>
                  <a
                    href="https://maps.app.goo.gl/ivQMaJJgJG6skJKH7"
                    target="_blank"
                    className="h5 fw-medium link text-white font-3"
                  >
                    СБД, 9-р хороо, Хоймор оффис, 3 давхар, 305 тоот
                  </a>
                </li>
                <li className="br-line has-dot"></li>
                <li>
                  <p className="title-sub text-body-3">И-мэйл</p>
                  <a
                    href="mailto:info@tst.mn"
                    className="h5 fw-medium link text-white font-3"
                  >
                    info@tst.mn
                  </a>
                </li>
                <li className="br-line has-dot"></li>
                <li>
                  <p className="title-sub text-body-3">Утас</p>
                  <a
                    href="tel:+97699662482"
                    className="h5 fw-medium link text-white font-3"
                  >
                    +976 99662482
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <Suspense fallback={null}>
                <FormGet2 />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
