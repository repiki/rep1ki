import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AppleScrollStory } from "@/components/sections/AppleScrollStory";

export const metadata: Metadata = { title: "Процесс", description: "Как устроена работа над сайтом с REPIKI." };
const stages = [
  { number: "01", title: "Погружение", text: "Собираем задачу, контекст и критерии сильного результата.", accent: "#55c2ff" },
  { number: "02", title: "Направление", text: "Находим идею и визуальный язык, который будет узнаваемым.", accent: "#8b5cf6" },
  { number: "03", title: "Сборка", text: "Проектирую интерфейс, код и те движения, которые объясняют продукт.", accent: "#5b21b6" },
  { number: "04", title: "Запуск", text: "Проверяем детали, адаптивность и выпускаем сайт без лишнего шума.", accent: "#55c2ff" },
];
export default function Process() { return <><section className="process-intro"><div className="shell"><p className="eyebrow">Спокойно и по делу</p><h1 className="display">У работы<br />есть <em>ритм.</em></h1></div></section><AppleScrollStory eyebrow="Как рождается сайт" title="Одна идея проходит четыре ясных состояния." stages={stages} /><section className="section"><div className="shell"><Link className="btn dark" href="/contact">Начать с первого шага <ArrowUpRight size={17} /></Link></div></section></>; }
