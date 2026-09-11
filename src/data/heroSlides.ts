export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "network",
    title: "Сүлжээний шийдэл",
    subtitle: "Найдвартай, өргөтгөх боломжтой дэд бүтэц",
    stats: [
      { value: "50+", label: "Төсөл" },
      { value: "24/7", label: "Дэмжлэг" },
      { value: "10 жил", label: "Туршлага" },
    ],
    image: "/assets/images/hero-slider/poster4.svg",
  },
  {
    id: "monitoring",
    title: "Хяналтын шийдэл",
    subtitle: "Танай орчныг 24 цагаар хамгаална",
    stats: [
      { value: "100+", label: "Салбар" },
      { value: "HD/4K", label: "Чанар" },
      { value: "24/7", label: "Хяналт" },
    ],
    image: "/assets/images/hero-slider/poster2.svg",
  },
  {
    id: "automation",
    title: "Автоматжуулалтын шийдэл",
    subtitle: "Ажлын урсгалыг ухаалгаар хөнгөвчилнө",
    stats: [
      { value: "30+", label: "Систем" },
      { value: "-40%", label: "Зардал" },
      { value: "24/7", label: "Ажиллагаа" },
    ],
    image: "/assets/images/hero-slider/poster3.svg",
  },
];
