import { NextResponse } from "next/server";

type ContactPayload = { firstName?: string; lastName?: string; email?: string; phone?: string; message?: string };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;
  try { payload = await request.json(); } catch { return NextResponse.json({ message: "Хүсэлтийн мэдээлэл буруу байна." }, { status: 400 }); }
  const firstName = payload.firstName?.trim() ?? ""; const lastName = payload.lastName?.trim() ?? ""; const email = payload.email?.trim() ?? ""; const phone = payload.phone?.trim() ?? ""; const message = payload.message?.trim() ?? "";
  if (!firstName || !lastName || !phone || !message || !emailPattern.test(email)) return NextResponse.json({ message: "Бүх шаардлагатай талбарыг зөв бөглөнө үү." }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY; const to = process.env.CONTACT_EMAIL_TO; const from = process.env.CONTACT_EMAIL_FROM;
  if (!apiKey || !to || !from) { console.error("Contact email environment variables are not configured."); return NextResponse.json({ message: "И-мэйл үйлчилгээ одоогоор тохируулагдаагүй байна." }, { status: 503 }); }
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website contact: ${firstName} ${lastName}`, text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}` }) });
  if (!response.ok) { console.error("Contact email provider request failed:", response.status); return NextResponse.json({ message: "Мессеж илгээхэд алдаа гарлаа. Дахин оролдоно уу." }, { status: 502 }); }
  return NextResponse.json({ message: "Таны мессеж амжилттай илгээгдлээ." });
}
