import type { Metadata } from "next";
import "./globals.css";
import "./site.css";
import "./motion.css";
import { AmbientField } from "@/components/animations/AmbientField";
import { PageTransition } from "@/components/animations/PageTransition";
import { Preloader } from "@/components/animations/Preloader";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { TextEntrance } from "@/components/animations/TextEntrance";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = { metadataBase: new URL("https://repiki.dev"), title: { default: "REPIKI — создание сайтов", template: "%s | REPIKI" }, description: "Дизайн и разработка сайтов, которые невозможно забыть.", openGraph: { type: "website", locale: "ru_RU", siteName: "REPIKI" } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="ru"><body><a className="skip" href="#content">К содержанию</a><Preloader /><ScrollProgress /><SmoothScrollProvider /><AmbientField /><TextEntrance /><Header /><main id="content"><PageTransition>{children}</PageTransition></main><Footer /><div className="grain" /></body></html>;
}
