import { ArrowUpRight, Mail, Send } from "lucide-react";
import { site } from "@/data/site";
import { ClippedCircle } from "@/components/unlumen-ui/primitives/clipped-circle";

export function ContactSignal() {
  return (
    <div className="contact-signal">
      <p className="eyebrow">Быстрый старт</p>
      <h2>
        Выберите удобный
        <br />
        способ связи.
      </h2>
      <div className="signal-options">
        <a className="clipped-target" href={site.telegram} target="_blank" rel="noopener noreferrer">
          <Send size={23} />
          <span>Написать в Telegram</span>
          <ArrowUpRight size={18} />
          <ClippedCircle circleSize={330} circleClassName="clipped-circle--contact" />
        </a>
        <a className="clipped-target" href={`mailto:${site.email}`}>
          <Mail size={23} />
          <span>Написать на email</span>
          <ArrowUpRight size={18} />
          <ClippedCircle circleSize={330} circleClassName="clipped-circle--contact" />
        </a>
      </div>
      <p className="signal-note">
        Расскажите о задаче в двух-трёх сообщениях. Этого достаточно, чтобы предложить следующий шаг.
      </p>
    </div>
  );
}
