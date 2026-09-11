export interface FeatureTab {
  id: string;
  title: string;
  img: string;
  icon: string;
  summary: string;
  features: { title: string; text: string }[];
  tags: string[];
  //   desc: string;
}

export const FeatureTabItems: FeatureTab[] = [
  {
    id: "Сүлжээний шийдэл",
    title: "Сүлжээний шийдэл",
    img: "network_solutions.jpg",
    icon: "⌘",
    summary:
      "Найдвартай, өргөтгөх боломжтой сүлжээний дэд бүтцийг танай орчинд тохируулан шийднэ.",
    features: [
      { title: "LAN / Wi-Fi", text: "Тогтвортой холболт" },
      { title: "Router & Switch", text: "Зөв тохиргоо" },
      { title: "Аюулгүй байдал", text: "Хамгаалалт ба хяналт" },
    ],
    tags: ["Найдвартай", "Аюулгүй", "Өргөтгөх боломжтой"],
    // desc: "Дэд бүтцэд тохирсон найдвартай, өндөр хурдтай, тасралтгүй ажиллагаатай сүлжээний иж бүрэн шийдлийг санал болгодог.",
  },
  {
    id: "Хяналтын шийдэл",
    title: "Хяналтын шийдэл",
    img: "camera_solutions.jpg",
    icon: "◉",
    summary:
      "Таны орчинд тасралтгүй харагдац, найдвартай бичлэг бүхий ухаалаг хяналтын шийдэл.",
    features: [
      { title: "CCTV суурилуулалт", text: "Төлөвлөлтөөс угсралт" },
      { title: "IP камер", text: "Тод дүрсний систем" },
      { title: "Хяналт", text: "Бодит цагийн харагдац" },
    ],
    tags: ["24/7 хяналт", "Тод бичлэг", "Хамгаалалт"],
    // desc: "Бид байгууллагын хөрөнгө, орчин, үйл ажиллагааг бодит цаг хугацаанд хянаж, эрсдэлийг эрт илрүүлэн, аюулгүй байдлыг хангах ухаалаг хяналтын системийн шийдлийг санал болгодог.",
  },
  {
    id: "Автоматжуулалтын шийдэл",
    title: "Автоматжуулалтын шийдэл",
    img: "automation_solutions.jpg",
    icon: "↗",
    summary:
      "Давтагддаг ажлыг автоматжуулж, багийн хурд ба процессын хяналтыг сайжруулна.",
    features: [
      { title: "Процесс", text: "Ажлын урсгалын автоматжуулалт" },
      { title: "Интеграц", text: "Системүүдийг холбох" },
      { title: "Хяналт", text: "Ухаалаг удирдлага" },
    ],
    tags: ["Хурдан", "Нарийвчлалтай", "Ухаалаг"],
    // desc: "Давтагдах болон цаг хугацаа их шаардсан үйл явцыг ухаалаг автоматжуулалтын шийдлээр хялбарчлан, ажлын үр ашиг, нарийвчлалыг нэмэгдүүлж, хүний нөөцийг илүү үнэ цэнэтэй ажилд чиглүүлэх боломжийг бий болгодог.",
  },
  {
    id: "Хөгжүүлэлтийн шийдэл",
    title: "Хөгжүүлэлтийн шийдэл",
    img: "develop_solutions.jpg",
    icon: "</>",
    summary:
      "Таны бизнесийн зорилгод нийцсэн, өргөтгөх боломжтой дижитал бүтээгдэхүүн хөгжүүлнэ.",
    features: [
      { title: "Web апп", text: "Орчин үеийн веб систем" },
      { title: "Mobile апп", text: "Хэрэглэгч төвтэй туршлага" },
      { title: "API / Өгөгдөл", text: "Найдвартай интеграц" },
    ],
    tags: ["Тусгай хөгжүүлэлт", "API", "Өгөгдөл"],
    // desc: "Бид хэрэглэгчийн онцлог хэрэгцээнд тулгуурлан программ хангамж, системийг эхнээс нь боловсруулан хөгжүүлж, тогтвортой, өргөтгөх боломжтой, орчин үеийн технологийн шийдлийг бүтээж өгдөг.",
  },
];

export type SolutionFeatureDetail = {
  description: string;
  services: string[];
};

// Ordered to match the existing category and feature arrays above. Each detail
// belongs to one individual solution item, never to a category tab.
export const solutionFeatureDetails: SolutionFeatureDetail[][] = [
  [
    {
      description:
        "Байгууллагын дотоод болон утасгүй сүлжээний найдвартай ажиллагааг хангах төлөвлөлт, суурилуулалт, тохиргооны шийдэл.",
      services: ["LAN Network", "Wi-Fi Access Point", "Network Configuration", "Network Monitoring"],
    },
    {
      description:
        "Сүлжээний төхөөрөмжүүдийн холболт, чиглүүлэлт болон өгөгдлийн урсгалыг тогтвортой зохион байгуулна.",
      services: ["Router Configuration", "Managed Switch", "VLAN", "Routing"],
    },
    {
      description:
        "Сүлжээ болон байгууллагын мэдээллийн орчныг зөвшөөрөл, хяналт, хамгаалалтаар найдвартай хамгаална.",
      services: ["Firewall", "Network Security", "Access Control", "Security Monitoring"],
    },
  ],
  [
    {
      description:
        "Камерын системийн байршил, кабель, тоног төхөөрөмжийг орчинд тань тохируулан мэргэжлийн түвшинд суурилуулна.",
      services: ["Site Survey", "Camera Installation", "Structured Cabling", "System Setup"],
    },
    {
      description:
        "Өндөр нягтаршилтай IP камерын шийдлээр дүрсний чанар болон алсаас хандах боломжийг нэгтгэнэ.",
      services: ["HD IP Camera", "Remote Viewing", "NVR Integration", "Night Vision"],
    },
    {
      description:
        "Бодит цагийн хяналт, мэдэгдэл болон бичлэгийн удирдлагыг нэг системээс хялбар хэрэгжүүлнэ.",
      services: ["Live Monitoring", "Motion Alerts", "Video Playback", "User Management"],
    },
  ],
  [
    {
      description:
        "Давтагддаг ажлын урсгалыг дижиталчилж, багийн гүйцэтгэл болон ажлын хурдыг сайжруулна.",
      services: ["Workflow Design", "Task Automation", "Approval Flow", "Process Mapping"],
    },
    {
      description:
        "Одоогийн системүүдийг найдвартай холбож, өгөгдөл болон ажлын урсгалыг тасралтгүй уялдуулна.",
      services: ["System Integration", "API Connection", "Data Sync", "Webhook"],
    },
    {
      description:
        "Үйл ажиллагааны гол үзүүлэлт, төхөөрөмж болон ажлын явцыг бодит цагт хянах ухаалаг удирдлага.",
      services: ["Dashboard", "Real-time Alerts", "Reporting", "Control Rules"],
    },
  ],
  [
    {
      description:
        "Байгууллагын хэрэгцээнд тохирсон, хурдан ажиллагаатай веб системийг эхнээс нь хөгжүүлнэ.",
      services: ["Web Application", "UI / UX", "Admin Panel", "Cloud Deployment"],
    },
    {
      description:
        "Хэрэглэгчдэд ойлгомжтой, олон төхөөрөмж дээр найдвартай ажиллах гар утасны аппликейшн бүтээнэ.",
      services: ["iOS / Android", "Cross-platform", "Push Notification", "App Support"],
    },
    {
      description:
        "Системүүдийн өгөгдөл солилцоо, интеграцыг аюулгүй API болон удирдлагатай өгөгдлийн шийдлээр хэрэгжүүлнэ.",
      services: ["REST API", "Database Design", "Authentication", "Data Integration"],
    },
  ],
];

export const featureTabItems2 = [
  {
    name: "Challenge",
    text_1:
      "Traditional compliance monitoring is characterised by annual assessments and reactive responses to incidents. While this approach is sufficient for simpler regulatory environments, it falls short in addressing the complexities of modern data protection. ",
    text_2:
      "The shift to continuous monitoring represents a change in how organisations approach compliance. Rather than periodic snapshots of compliance status, businesses are better off with real-time visibility in their security posture.",
  },
  {
    name: "Solution",
    text_1:
      "Traditional compliance monitoring is characterised by annual assessments and reactive responses to incidents. While this approach is sufficient for simpler regulatory environments, it falls short in addressing the complexities of modern data protection. ",
    text_2:
      "The shift to continuous monitoring represents a change in how organisations approach compliance. Rather than periodic snapshots of compliance status, businesses are better off with real-time visibility in their security posture.",
  },
  {
    name: "The Results",
    text_1:
      "Traditional compliance monitoring is characterised by annual assessments and reactive responses to incidents. While this approach is sufficient for simpler regulatory environments, it falls short in addressing the complexities of modern data protection. ",
    text_2:
      "The shift to continuous monitoring represents a change in how organisations approach compliance. Rather than periodic snapshots of compliance status, businesses are better off with real-time visibility in their security posture.",
  },
];
