"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function FormGet2() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const defaultMessage = plan ? `Сонирхож буй багц: ${plan}\n\n` : "";

  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (window.location.hash !== "#contact-form") return;
    const timeoutId = setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus(null); setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      event.currentTarget.reset(); setStatus({ type: "success", message: result.message });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Мессеж илгээхэд алдаа гарлаа." });
    } finally { setIsSubmitting(false); }
  }

  return <form className="form-get_in px-16 px-xl-0" onSubmit={handleSubmit} noValidate>
    <div className="form-content-2">
      <div className="tf-grid-layout sm-col-2">
        <fieldset><label className="label-text text-body-3 text-white" htmlFor="first-name">Овог</label><input type="text" id="first-name" name="firstName" placeholder="........." required /></fieldset>
        <fieldset><label className="label-text text-body-3 text-white" htmlFor="last-name">Нэр</label><input type="text" id="last-name" name="lastName" placeholder="........." required /></fieldset>
      </div>
      <div className="tf-grid-layout sm-col-2">
        <fieldset><label className="label-text text-body-3 text-white" htmlFor="email">И-мэйл</label><input type="email" id="email" name="email" placeholder="........." required /></fieldset>
        <fieldset><label className="label-text text-body-3 text-white" htmlFor="phone">Утас</label><input type="tel" id="phone" name="phone" placeholder="........." required /></fieldset>
      </div>
      <fieldset className="d-grid"><label className="label-text text-body-3 text-white" htmlFor="message">Мессеж</label><textarea id="message" name="message" defaultValue={defaultMessage} required /></fieldset>
    </div>
    <button type="submit" disabled={isSubmitting} className="tf-btn text-body-3 style-2 animate-btn animate-dark style-high">{isSubmitting ? "Илгээж байна..." : "Илгээх"}</button>
    {status && <p className={`form-status form-status--${status.type}`} role="status">{status.message}</p>}
  </form>;
}
