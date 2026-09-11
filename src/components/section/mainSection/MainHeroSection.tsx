"use client";

import { useState } from "react";
import Image from "next/image";

export function MainHeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <>
      <div className="sect-main hero-main">
        <div className="container">
          <div className="sect-title wow fadeInUp">
            <h1 className="s-title font-3">
              <div
                className="text-change_wrap interactive-title"
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();

                  setTilt({
                    x: ((event.clientX - rect.left) / rect.width - 0.5) * 8,
                    y: ((event.clientY - rect.top) / rect.height - 0.5) * 6,
                  });
                }}
                onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              >
                <div
                  className="text-change_rotating active"
                  style={{
                    marginTop: "clamp(-40px, -6vw, -80px)",
                    transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)
                      rotateX(${-tilt.y * 0.35}deg)
                      rotateY(${tilt.x * 0.35}deg)`,
                  }}
                >
                  <Image
                    src="/assets/images/logo/test3.png"
                    alt="TST LLC"
                    width={420}
                    height={151}
                    priority
                    style={{
                      width: "min(580px, 100%)",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </h1>
          </div>
        </div>

        <span className="br-line"></span>
      </div>
    </>
  );
}

export const AskForm: React.FC = () => {
  return (
    <form className="form-ask wow fadeInUp">
      <div className="form-content">
        <input
          className="style-2"
          type="text"
          placeholder="Ask a follow up..."
        />

        <fieldset className="field-bottom">
          <div className="field_left">
            <button type="button" className="btn-ip type-circle ip-add">
              <i className="icon icon-plus" />
            </button>

            <button type="button" className="btn-ip ip-modern text-body-3">
              <i className="icon icon-arrow-circle" />
              GPT-4.1
              <i className="icon icon-arrow-caret-down fs-8" />
            </button>
          </div>

          <div className="field_right">
            <button type="button" className="btn-ip type-transparent ip-voice">
              <i className="icon icon-micro" />
            </button>

            <button type="submit" className="btn-submit btn-ip type-circle">
              <i className="icon icon-arrow-top" />
            </button>
          </div>
        </fieldset>
      </div>
    </form>
  );
};
