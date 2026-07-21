import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "REPIKI — сайт-портфолио",
  description: "Кейс создания цифрового портфолио REPIKI.",
};

const signals = ["Смысл", "Ритм", "Скорость"];

export default function Case() {
  return (
    <>
      <section className="case-hero">
        <div className="shell">
          <p className="eyebrow">Кейс · личный бренд</p>
          <h1 className="display">REPIKI</h1>
          <p>Портфолио, построенное как отдельный цифровой объект: спокойное, тактильное и без лишних слов.</p>
          <div className="case-block">R</div>
        </div>
      </section>
      <section className="section">
        <div className="shell case-grid">
          <div><p className="eyebrow">Задача</p><h2>Дать работам пространство, а характеру — голос.</h2></div>
          <div><p>Сайт не должен был быть каталогом ссылок. Я собрал его как последовательность сцен: крупная типографика задаёт темп, световые поверхности добавляют глубину, а интерактив остаётся полезным.</p><ul><li>Next.js и TypeScript</li><li>Адаптивная система компонентов</li><li>Motion без перегруза</li></ul></div>
        </div>
      </section>
      <section className="case-mosaic" aria-label="Принципы проекта">
        <div className="case-mosaic-track">
          {[0, 1].map((group) => signals.map((signal, index) => (
            <div className={`case-mosaic-card case-mosaic-card--${index}`} aria-hidden={group === 1} key={`${group}-${signal}`}>{signal}</div>
          )))}
        </div>
      </section>
      <section className="section"><div className="shell"><Link className="btn gradient" href="/contact">Создать свой проект <ArrowUpRight size={17} /></Link></div></section>
    </>
  );
}