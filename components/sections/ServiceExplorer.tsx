import { services } from "@/data/site";

export function ServiceExplorer() {
  return (
    <div className="service-explorer">
      {services.map((service) => (
        <article key={service.n} tabIndex={0}>
          <span className="service-number">{service.n}</span>
          <div className="service-main">
            <h2>{service.title}</h2>
            <div className="service-hover-copy">
              <p>{service.text}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
