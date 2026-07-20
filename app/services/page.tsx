import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceExplorer } from "@/components/sections/ServiceExplorer";

export const metadata: Metadata = { title: "Услуги", description: "Дизайн, разработка и motion для сильных сайтов." };

export default function Services() {
  return <section className="page-top section"><div className="shell"><p className="eyebrow">Форматы работы</p><h1 className="display">Из идеи<br />в <em>систему.</em></h1><p className="service-hint">Наведите на направление, чтобы открыть его роль в проекте.</p><ServiceExplorer /><div className="service-cta"><p>Не нашли точный формат? Это нормально. Соберём проект вокруг вашей задачи.</p><Link className="btn gradient" href="/contact">Обсудить проект <ArrowUpRight size={17} /></Link></div></div></section>;
}
