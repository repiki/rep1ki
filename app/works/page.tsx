import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { AppleScrollStory } from "@/components/sections/AppleScrollStory";

export const metadata: Metadata = { title: "Работы", description: "Выбранные digital-проекты REPIKI." };
const stages = [
  { number: "01", title: "Смысл", text: "Сначала проект получает ясную идею, чтобы интерфейс не был очередным набором блоков.", accent: "#55c2ff" },
  { number: "02", title: "Сцена", text: "Потом смысл становится визуальной сценой с собственным темпом, глубиной и ритмом.", accent: "#8b5cf6" },
  { number: "03", title: "Отклик", text: "Интерактив остаётся лёгким и добавляет ощущение живого цифрового объекта.", accent: "#5b21b6" },
];
export default function Works() { return <><section className="page-top section"><div className="shell"><p className="eyebrow">Каталог</p><h1 className="display">Работы, где<br />есть <em>характер.</em></h1><p className="lead">Два проекта, два разных мира. Каждый собран вокруг собственной идеи, а не вокруг привычного шаблона.</p><ProjectGrid /></div></section><AppleScrollStory eyebrow="Как смотреть кейсы" title="Смысл превращается в цифровой опыт." stages={stages} /></>; }
