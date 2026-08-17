import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

import heroFactory from "@/assets/hero-factory.jpg";
import aboutWorker from "@/assets/about-worker.jpg";
import segAerospace from "@/assets/seg-aerospace.jpg";
import segPipe from "@/assets/seg-pipe.jpg";
import segLinePipe from "@/assets/seg-linepipe.jpg";
import segSales from "@/assets/seg-sales.jpg";
import segProcurement from "@/assets/seg-procurement.jpg";
import segLogistic from "@/assets/seg-logistic.jpg";
import dir1 from "@/assets/dir-1.jpg";
import dir2 from "@/assets/dir-2.jpg";
import dir3 from "@/assets/dir-3.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import ctaWorker from "@/assets/cta-worker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnergySteel — We Build Stronger Future" },
      {
        name: "description",
        content:
          "EnergySteel is an international steel producer: aerospace bar, pipe, line pipe, sales, procurement and logistics across 12 countries.",
      },
      { property: "og:title", content: "EnergySteel — We Build Stronger Future" },
      {
        property: "og:description",
        content:
          "Integrated steel manufacturing with 20 million tonnes rolling capacity and 200+ facilities worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  "About Us",
  "Products and Services",
  "Manufacturing Process",
  "Research Development",
  "Case Studies",
  "News",
];

const segments = [
  { title: "Aerospace Bar", img: segAerospace },
  { title: "Pipe", img: segPipe },
  { title: "Line Pipe", img: segLinePipe },
  { title: "Sales", img: segSales },
  { title: "Procurement", img: segProcurement },
  { title: "Logistic", img: segLogistic },
];

const directors = [
  {
    name: "Jonny Tractor",
    role: "Comissioner",
    img: dir1,
    bio: "Appointed as Commissioner since July 2020. Last served as Secretary General of the Ministry of Trade Republic Cinta.",
  },
  {
    name: "Lisya Padderson",
    role: "Human Resource Director",
    img: dir2,
    bio: "Officially appointed as a director since January 18, 2023. He has spent a lot of his career at Bank Untung.",
  },
  {
    name: "Vicky Richards",
    role: "Vice President",
    img: dir3,
    bio: "Officially appointed as director since January 18, 2023. Previously served as President Director of Langsung Jaya Infrastructure.",
  },
  {
    name: "Jack Moreno",
    role: "Commercial Director",
    img: dir1,
    bio: "Appointed as Commercial Director since 2021. Leads global trading and customer partnerships across 12 countries.",
  },
];

const news = [
  {
    tag: "Press",
    title: "Energy Reports NYSE Commencing Delisting of Moshel ADRs",
    text: "One of the leading Russian mining and metals companies, reports that it has been notified.",
    date: "06.02",
    img: news1,
  },
  {
    tag: "Update",
    title: "Energy Publishes First Sustainability Report",
    text: "One of the leading Russian mining and metals companies, reports that it has been notified.",
    date: "05.02",
    img: news2,
  },
  {
    tag: "Press",
    title: "Announces Obtaining National Credit Rating",
    text: "One of the leading Russian mining and metals companies, reports that it has been notified.",
    date: "03.02",
    img: news3,
  },
  {
    tag: "Press",
    title: "Energy Commissions New Mechanical Rolling Line",
    text: "One of the leading Russian mining and metals companies, reports that it has been notified.",
    date: "01.02",
    img: news4,
  },
];

function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 32 32"
        className={tone === "light" ? "h-7 w-7 text-background" : "h-7 w-7 text-navy"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        <path d="M4 6h24l-6 7H10l6 6h12l-6 7H4l6-7" />
      </svg>
      <span
        className={`font-display text-lg tracking-wide ${
          tone === "light" ? "text-background" : "text-navy"
        }`}
      >
        <span className="font-bold">ENERGY</span>
        <span className="font-light">STEEL</span>
      </span>
    </div>
  );
}

function SectionIndex({ num, tone }: { num: string; tone: "light" | "dark" }) {
  return (
    <div className="hidden shrink-0 flex-col items-center gap-4 md:flex">
      <span
        className={`font-display text-xs ${
          tone === "light" ? "text-brand" : "text-brand"
        }`}
      >
        {num}
      </span>
      <span
        className={`w-px flex-1 ${tone === "light" ? "bg-brand/50" : "bg-background/25"}`}
      />
    </div>
  );
}

function Index() {
  const [slide, setSlide] = useState(0);
  const maxSlide = directors.length - 3;

  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative bg-ink">
        <div className="relative">
          <img
            src={heroFactory}
            alt="EnergySteel manufacturing plant with glass facade"
            width={1920}
            height={1080}
            className="h-[92vh] min-h-[620px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

          {/* top bar */}
          <div className="absolute inset-x-0 top-0">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
              <Logo />
              <div className="flex items-center gap-5">
                <span className="hidden text-sm text-background/90 sm:block">
                  +32 342 424
                </span>
                <button className="section-label border border-background/70 px-5 py-2.5 text-background transition-colors hover:bg-background hover:text-ink">
                  Contact Us
                </button>
              </div>
            </div>
            <nav className="mx-auto hidden max-w-7xl gap-8 px-6 lg:flex">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sm text-background/80 transition-colors hover:text-background"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          {/* hero content */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto flex max-w-7xl gap-8 px-6 pb-20">
              <SectionIndex num="01" tone="light" />
              <div className="max-w-3xl">
                <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-background sm:text-6xl lg:text-7xl">
                  <span className="font-light">WE BUILD</span>
                  <br />
                  <span className="font-bold">STRONGER</span>
                  <br />
                  <span className="font-light">FUTURE</span>
                </h1>
                <p className="mt-8 text-sm leading-relaxed text-background/80">
                  Building stronger future,
                  <br />
                  one steel beam at a time
                </p>
                <button className="mt-8 inline-flex items-center gap-10 bg-brand px-6 py-4 text-left transition-colors hover:bg-brand/90">
                  <span className="section-label leading-tight text-background">
                    Start
                    <br />
                    Collaborating
                  </span>
                  <ChevronRight className="h-4 w-4 text-background" />
                </button>
              </div>

              <div className="relative ml-auto hidden self-end lg:block">
                <img
                  src={segSales}
                  alt="Welding sparks at the EnergySteel workshop"
                  width={800}
                  height={700}
                  loading="lazy"
                  className="h-52 w-80 object-cover"
                />
                <button
                  aria-label="Play company video"
                  className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full border border-background/80 bg-background/10 backdrop-blur transition-colors hover:bg-background/25"
                >
                  <Play className="h-4 w-4 fill-current text-background" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-ink py-24">
        <div className="mx-auto flex max-w-7xl gap-8 px-6">
          <SectionIndex num="02" tone="light" />
          <div className="grid flex-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="section-label text-background">About Us</p>
              <h2 className="mt-8 font-display text-4xl font-light leading-tight text-background sm:text-5xl">
                WE EXPLORE
                <br />
                TO EMPOWER
              </h2>
              <a
                href="#"
                className="section-label mt-8 inline-flex items-center gap-3 text-brand"
              >
                Read More <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <p className="text-sm leading-relaxed text-background/85">
                EnergySteel Co is an international business with an integrated
                offering — from the production of liquid steel made from raw and
                recycled materials through to high value precision engineered
                steels and associated services, sold to customers around the
                world.
              </p>
              <p className="text-xs leading-relaxed text-background/55">
                With a total rolling capacity of 20 million tonnes, 200+
                manufacturing locations globally across 12 countries and more
                than 30,000 people employed, our comprehensive product range
                includes iron ore and coking coal.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl px-6">
          <div className="ml-auto max-w-2xl">
            <img
              src={aboutWorker}
              alt="Steelworker assembling a truss structure"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BUSINESS SEGMENTS */}
      <section className="bg-mist py-24">
        <div className="mx-auto flex max-w-7xl gap-8 px-6">
          <SectionIndex num="03" tone="dark" />
          <div className="flex-1">
            <p className="section-label text-ink">Business Segments</p>
            <div className="mt-8 flex items-end justify-between">
              <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
                OUR
                <br />
                BUSINESS
              </h2>
              <a
                href="#"
                className="section-label inline-flex items-center gap-3 text-brand"
              >
                Read More <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {segments.map((s) => (
                <article key={s.title} className="group">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={800}
                    height={700}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                  <div className="clip-corner bg-background px-6 py-5">
                    <h3 className="text-center font-sans text-sm text-ink">
                      {s.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="overflow-hidden bg-navy py-24">
        <div className="mx-auto flex max-w-7xl gap-8 px-6">
          <SectionIndex num="04" tone="light" />
          <div className="min-w-0 flex-1">
            <p className="section-label text-background/70">Management</p>
            <div className="mt-8 flex items-end justify-between">
              <h2 className="font-display text-4xl font-light leading-tight text-background sm:text-5xl">
                OUR
                <br />
                DIRECTORS
              </h2>
              <div className="flex gap-3">
                <button
                  aria-label="Previous directors"
                  onClick={() => setSlide((s) => Math.max(0, s - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-background/40 text-background transition-colors hover:bg-background/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next directors"
                  onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-navy transition-opacity hover:opacity-90"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-12 overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(calc(${-slide} * (100% / 3)))` }}
              >
                {directors.map((d) => (
                  <article
                    key={d.name}
                    className="w-[85%] shrink-0 bg-background/8 p-4 sm:w-[48%] lg:w-[calc((100%-3rem)/3)]"
                  >
                    <img
                      src={d.img}
                      alt={`${d.name}, ${d.role}`}
                      width={700}
                      height={800}
                      loading="lazy"
                      className="h-72 w-full object-cover object-top"
                    />
                    <h3 className="mt-5 font-sans text-base font-semibold text-background">
                      {d.name}
                    </h3>
                    <p className="mt-1 text-xs text-brand">{d.role}</p>
                    <p className="mt-4 text-xs leading-relaxed text-background/70">
                      {d.bio}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="overflow-hidden bg-mist py-24">
        <div className="mx-auto flex max-w-7xl gap-8 px-6">
          <SectionIndex num="05" tone="dark" />
          <div className="min-w-0 flex-1">
            <p className="section-label text-ink">News</p>
            <div className="mt-8 flex items-end justify-between">
              <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">
                LATEST NEWS
              </h2>
              <a
                href="#"
                className="section-label inline-flex items-center gap-3 text-brand"
              >
                Read More <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.slice(0, 3).map((n) => (
                <article key={n.title} className="clip-corner bg-background">
                  <img
                    src={n.img}
                    alt={n.title}
                    width={768}
                    height={512}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-sans text-sm font-semibold leading-snug text-ink">
                      {n.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {n.text}
                    </p>
                    <div className="mt-8 flex items-end justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {n.tag}
                      </span>
                      <span className="font-display text-2xl text-ink">
                        {n.date}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-stretch lg:grid-cols-2">
            <img
              src={ctaWorker}
              alt="EnergySteel plant engineer"
              width={1200}
              height={800}
              loading="lazy"
              className="h-72 w-full object-cover lg:h-full"
            />
            <div className="flex flex-col justify-center bg-navy p-12">
              <h2 className="font-display text-3xl font-light leading-tight text-background sm:text-4xl">
                INFRASTRUCTURE
                <br />
                LEADING
              </h2>
              <button className="mt-8 inline-flex w-fit items-center gap-10 bg-background px-6 py-4 text-left">
                <span className="section-label leading-tight text-navy">
                  Contacts
                  <br />
                  Subsidiaries
                </span>
                <ChevronRight className="h-4 w-4 text-navy" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
          <Logo />
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-xs text-background/70 transition-colors hover:text-background"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <p className="font-display text-2xl text-background">+80 232 32425</p>
            <p className="mt-4 text-xs leading-relaxed text-background/70">
              90 Grosvenor Place
              <br />
              London
              <br />
              SW1X 7SU
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-background transition-opacity hover:opacity-80"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center gap-6 border-t border-background/15 px-6 pt-6">
          {["Contact us", "Terms of use", "Privacy Cookie", "Policy"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[11px] text-background/60 transition-colors hover:text-background"
            >
              {l}
            </a>
          ))}
          <span className="ml-auto text-[11px] text-background/40">
            © 2024 EnergySteel Group
          </span>
        </div>
      </footer>
    </main>
  );
}
