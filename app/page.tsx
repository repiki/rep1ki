import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { projects, services } from "@/data/site";
import { ClippedCircle } from "@/components/unlumen-ui/primitives/clipped-circle";

function WorkCard({ p }: { p: (typeof projects)[number] }) {
  const circleTone = p.accent === "aqua" ? "clipped-circle--aqua" : "clipped-circle--violet";
  const content = (
    <>
      <div className="work-card-top">
        <span>{p.name}</span>
        <ArrowUpRight size={22} />
      </div>
      <div className="work-shape">
        <span>{p.name}</span>
      </div>
      <div>
        <b>{p.title}</b>
        <p>{p.type}</p>
      </div>
      <ClippedCircle circleSize={640} circleClassName={circleTone} />
    </>
  );

  return p.external ? (
    <a
      className={`work-card clipped-target ${p.accent}`}
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <Link className={`work-card clipped-target ${p.accent}`} href={p.href}>
      {content}
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="orb hero-orb" />
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <p className="availability">
              <i />
              Доступен для новых проектов
            </p>
            <h1 className="display">
              Сайты, которые
              <br />
              <em>невозможно</em> забыть
            </h1>
            <p>Дизайн, анимация и код премиального уровня для брендов, которые хотят быть заметнее.</p>
            <div className="hero-actions">
              <Link className="btn dark" href="/works">
                Смотреть работы <ArrowDownRight size={17} />
              </Link>
              <Link className="btn" href="/contact">
                Обсудить задачу
              </Link>
            </div>
          </div>
          <div className="hero-object reveal" aria-hidden="true">
            <div className="object-core">R</div>
            <div className="object-ring" />
            <span>
              digital
              <br />
              craft
            </span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <span>дизайн · разработка · движение · характер · дизайн · разработка · движение · характер · </span>
      </div>

      <section className="section positioning">
        <div className="shell">
          <p className="eyebrow">Зачем REPIKI</p>
          <h2 className="display">
            Не украшать экран.
            <br />
            Создавать <i>впечатление.</i>
          </h2>
          <div className="positioning-copy">
            <p>
              Хороший сайт говорит за вас ещё до первого звонка. Поэтому я работаю не с шаблонами, а с
              идеей, ритмом и деталями, которые делают бренд узнаваемым.
            </p>
            <Link href="/about" className="text-link">
              Узнать обо мне <MoveUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section works-home">
        <div className="shell">
          <div className="section-intro">
            <p className="eyebrow">Выбранные работы</p>
            <Link href="/works" className="btn">
              Все работы <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="works-grid">
            {projects.map((project) => (
              <WorkCard p={project} key={project.slug} />
            ))}
            <Link className="work-card future clipped-target" href="/contact">
              <span>Следующий проект</span>
              <b>
                Вы тоже можете
                <br />
                оказаться здесь
              </b>
              <ArrowUpRight size={30} />
              <ClippedCircle circleSize={640} circleClassName="clipped-circle--dark" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section services-home">
        <div className="shell">
          <p className="eyebrow">Что могу сделать</p>
          <div className="services-list">
            {services.map((service) => (
              <article key={service.n}>
                <span>{service.n}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <Link href="/services" className="text-link">
            Все услуги <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section process-tease">
        <div className="shell process-panel">
          <div>
            <p className="eyebrow">Без шума</p>
            <h2>От первой мысли до запуска с понятным маршрутом.</h2>
          </div>
          <Link className="btn dark clipped-target" href="/process">
            <span>Как устроен процесс</span>
            <ArrowUpRight size={17} />
            <ClippedCircle circleSize={300} circleClassName="clipped-circle--button" />
          </Link>
        </div>
      </section>

      <section className="section final-home">
        <div className="shell">
          <p className="eyebrow">Есть идея?</p>
          <h2 className="display">
            Давайте придадим
            <br />
            ей форму.
          </h2>
          <Link className="btn gradient" href="/contact">
            Обсудить проект <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
