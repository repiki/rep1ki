import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { ClippedCircle } from "@/components/unlumen-ui/primitives/clipped-circle";

export function ProjectGrid() {
  return (
    <div className="works-grid catalog">
      {projects.map((project) => {
        const circleTone =
          project.accent === "aqua" ? "clipped-circle--aqua" : "clipped-circle--violet";
        const content = (
          <>
            <div className="work-card-top">
              <span>{project.name}</span>
              <ArrowUpRight size={22} />
            </div>
            <div className="work-shape">
              <span>{project.name}</span>
            </div>
            <div>
              <b>{project.title}</b>
              <p>{project.desc}</p>
            </div>
            <ClippedCircle circleSize={600} circleClassName={circleTone} />
          </>
        );

        return project.external ? (
          <a
            key={project.slug}
            className={`work-card clipped-target ${project.accent}`}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          <Link
            key={project.slug}
            className={`work-card clipped-target ${project.accent}`}
            href={project.href}
          >
            {content}
          </Link>
        );
      })}

      <Link href="/contact" className="work-card future clipped-target">
        <span>Свободное место</span>
        <b>
          Вы тоже можете
          <br />
          оказаться здесь
        </b>
        <ArrowUpRight size={30} />
        <ClippedCircle circleSize={600} circleClassName="clipped-circle--dark" />
      </Link>
    </div>
  );
}
