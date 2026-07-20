import type { Metadata } from "next";
import { Send, Mail } from "lucide-react";
import { site } from "@/data/site";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { ContactSignal } from "@/components/sections/ContactSignal";

export const metadata: Metadata = { title: "Контакты", description: "Обсудите новый сайт с REPIKI." };

export default function Contact() {
  return <section className="page-top section"><div className="shell contact"><div><p className="eyebrow">На связи</p><h1 className="display">Есть задача?<br /><em>Пишите.</em></h1><p className="lead">Опишите контекст, сроки и то, что вы хотите изменить. Я отвечу с понятным следующим шагом.</p><div className="contact-cards"><a href={site.telegram} target="_blank" rel="noopener noreferrer"><Send /><div><b>Telegram</b><span>@qstyqq</span></div></a><div><Mail /><div><b>Email</b><a href={`mailto:${site.email}`}>{site.email}</a></div><CopyEmailButton /></div></div></div><ContactSignal /></div></section>;
}
