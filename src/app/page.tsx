import Image from "next/image";
import { CountUp } from "@/components/CountUp";
import { Navbar } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AiIcon, AppIcon, ChevronLeft, ChevronRight, WebIcon } from "@/components/Icons";
import {
  education,
  experience,
  heroCode,
  marquee,
  companyProjects,
  personalProjects,
  profile,
  services,
  skills,
  stats,
} from "@/data/resume";

const serviceIcons = { web: WebIcon, app: AppIcon, ai: AiIcon };

// Opens a Gmail compose window in the browser instead of the visitor's default mail app.
function gmailCompose(subject?: string) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: profile.email });
  if (subject) params.set("su", subject);
  return `https://mail.google.com/mail/?${params}`;
}

// Staggers sibling animations via the --delay custom property used in globals.css.
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div data-reveal className="mb-14 flex flex-col items-center gap-4">
      <h2 className="text-4xl font-bold md:text-5xl">{children}</h2>
      <span className="h-12 w-0.5 bg-accent" />
      <span className="-mt-4 size-2 rounded-full bg-accent" />
    </div>
  );
}

function CodeValue({ value }: { value: string | string[] }) {
  const str = (v: string) => <span className="text-accent">&quot;{v}&quot;</span>;
  if (!Array.isArray(value)) return str(value);
  return (
    <>
      [
      {value.map((v, i) => (
        <span key={v}>
          {i > 0 && ", "}
          {str(v)}
        </span>
      ))}
      ]
    </>
  );
}

function CodeCard() {
  const lines = [
    <>
      <span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">{heroCode.variable}</span> = {"{"}
    </>,
    ...heroCode.fields.map((f) => (
      <>
        {"  "}
        <span className="text-foreground">{f.key}</span>: <CodeValue value={f.value} />,
      </>
    )),
    <>
      {"};"}
      <span className="animate-blink ml-1 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-accent" />
    </>,
  ];
  return (
    <div
      className="animate-fade-up relative z-10 w-[94%] overflow-hidden rounded-xl border border-white/10 bg-[#141820]/95 text-left shadow-2xl shadow-black/60 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-accent/30 sm:w-[90%]"
      style={delay(350)}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">{heroCode.fileName}</span>
      </div>
      <pre className="overflow-hidden px-3 py-5 font-mono text-[11px] leading-6 text-muted sm:px-5 sm:text-[13px] sm:leading-7">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="animate-line-in flex" style={delay(700 + i * 110)}>
              <span className="mr-3 w-4 shrink-0 select-none sm:mr-4 text-right text-white/20">{i + 1}</span>
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

function Hero() {
  const firstName = profile.name.split(" ")[0];
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-10 md:grid-cols-2 lg:px-12">
        <div className="text-center md:text-left">
          <p className="animate-fade-up text-4xl font-bold">
            Hello<span className="text-accent">.</span>
          </p>
          <p className="animate-fade-up relative mt-6 inline-block text-3xl md:ml-10 md:text-4xl" style={delay(120)}>
            {/* Accent rule: underline on mobile, runs in from the viewport edge on desktop */}
            <span className="absolute -bottom-3 left-1/2 h-0.5 w-32 -translate-x-1/2 bg-accent md:top-1/2 md:right-full md:bottom-auto md:left-auto md:mr-4 md:w-screen md:translate-x-0 animate-grow-x md:origin-right" style={delay(450)} />
            I&apos;m {firstName}
          </p>
          <h1 style={delay(220)} className="animate-fade-up mt-8 text-4xl font-bold md:text-5xl lg:text-6xl">{profile.role}</h1>
          <p className="animate-fade-up mt-4 text-sm text-muted md:text-base" style={delay(320)}>
            {profile.headline}
          </p>
          <div className="animate-fade-up mt-12 flex justify-center gap-4 md:justify-start" style={delay(420)}>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="border-2 border-accent bg-accent px-6 py-3 text-sm font-semibold transition hover:brightness-110 duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              Download Resume
            </a>
            <a
              href={gmailCompose(profile.hireSubject)}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-accent px-6 py-3 text-sm font-semibold transition hover:bg-accent duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <ChevronLeft className="animate-float absolute left-0 top-6 w-14 text-accent/60 md:w-16" />
          <ChevronRight className="animate-float absolute bottom-10 right-0 w-14 text-accent/60 md:w-16" style={delay(-3000)} />
          <CodeCard />
        </div>
      </div>

      {/* Tech marquee band */}
      <div className="mt-6 overflow-hidden bg-surface py-8">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused] gap-20 pr-20 text-xl text-muted/50 md:text-2xl">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} aria-hidden={i >= marquee.length} className="transition-colors hover:text-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 lg:px-12">
      <ul className="order-2 md:order-1">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          return (
            <li key={s.title} data-reveal style={delay(i * 120)}>
              <div className="group flex items-center gap-6 border-l-2 border-accent py-6 pl-8">
                <Icon className="size-12 shrink-0 transition duration-300 group-hover:scale-110 group-hover:text-accent" />
                <span className="text-lg font-semibold transition-colors group-hover:text-accent">{s.title}</span>
              </div>
              {i < services.length - 1 && <span className="-ml-[3px] my-2 block size-2 rounded-full bg-accent" />}
            </li>
          );
        })}
      </ul>

      <div className="order-1 text-center md:order-2 md:text-left">
        <h2 data-reveal className="text-4xl font-bold md:text-5xl">
          About me
        </h2>
        <p data-reveal style={delay(120)} className="mt-8 text-sm leading-7 text-muted">
          {profile.summary}
        </p>
        <dl data-reveal style={delay(240)} className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-6 md:justify-start">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-2 whitespace-nowrap text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-bold md:text-4xl">
                <CountUp value={s.value} /> <span className="text-accent">{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
      <SectionHeading>Experience</SectionHeading>
      {experience.map((e) => (
        <article key={e.company} data-reveal className="grid gap-8 border-l-2 border-accent pl-8 md:grid-cols-[1fr_2fr]">
          <div>
            <h3 className="text-2xl font-bold">{e.company}</h3>
            <p className="mt-1 text-sm text-muted">{e.tagline}</p>
            <p className="mt-4 inline-block bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">{e.role}</p>
            <p className="mt-3 text-sm font-semibold">{e.period}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{e.progression}</p>
          </div>
          <ul className="space-y-3 text-sm leading-6 text-muted">
            {e.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-6 text-muted">
      {items.map((pt) => (
        <li key={pt} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
          {pt}
        </li>
      ))}
    </ul>
  );
}

function StackList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className="border border-white/10 px-3 py-1 text-xs text-muted transition-colors hover:border-accent/60 hover:text-foreground">
          {s}
        </li>
      ))}
    </ul>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
      <SectionHeading>Projects</SectionHeading>

      <div className="space-y-8">
        {personalProjects.map((p) => (
          <article
            key={p.title}
            data-reveal
            className={`grid overflow-hidden border border-white/5 bg-surface transition duration-300 hover:border-accent/60 hover:shadow-2xl hover:shadow-black/40 ${p.image ? "lg:grid-cols-[3fr_2fr]" : ""}`}
          >
            {p.image && (
              <a href={p.url} target="_blank" rel="noreferrer" className="group/img flex items-center justify-center overflow-hidden bg-white/[0.03] p-6 sm:p-10">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="h-auto w-full rounded-lg shadow-2xl shadow-black/40 ring-1 ring-white/10 transition duration-500 group-hover/img:scale-[1.02]"
                />
              </a>
            )}
            <div className="flex flex-col p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tag}</p>
              <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
              <div className="mt-5 flex-1">
                <BulletList items={p.points} />
              </div>
              <StackList items={p.stack} />
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-accent bg-accent px-6 py-3 text-sm font-semibold transition hover:brightness-110 duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
                >
                  {p.linkLabel} ↗
                </a>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-accent px-6 py-3 text-sm font-semibold transition hover:bg-accent duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 data-reveal className="mt-20 mb-8 text-2xl font-bold">
        Company work<span className="text-accent">.</span>
      </h3>
      <div className="grid gap-8 md:grid-cols-2">
        {companyProjects.map((p, i) => (
          <article
            key={p.title}
            data-reveal
            style={delay((i % 2) * 120)}
            className="flex flex-col border border-white/5 bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-black/40"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tag}</p>
            <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
            <div className="mt-5">
              <BulletList items={p.points} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <div key={g.group} data-reveal style={delay((i % 3) * 100)}>
            <h3 className="mb-4 font-semibold">
              {g.group}
              <span className="text-accent">.</span>
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="bg-surface px-3 py-1.5 text-xs text-muted transition duration-200 hover:-translate-y-0.5 hover:bg-accent/15 hover:text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
      <SectionHeading>Education</SectionHeading>
      <div data-reveal className="mx-auto max-w-2xl border-l-2 border-accent bg-surface p-8">
        <h3 className="text-xl font-bold">{education.degree}</h3>
        <p className="mt-2 text-muted">
          {education.school} <span className="text-accent">|</span> {education.years}
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: gmailCompose() },
    { label: "Phone", value: `+91 ${profile.phone}`, href: `tel:+91${profile.phone}` },
    { label: "LinkedIn", value: "Connect", href: profile.linkedin },
    { label: "GitHub", value: "Follow", href: profile.github },
    { label: "Figma", value: "View designs", href: profile.figma },
  ];
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 text-center lg:px-12">
      <SectionHeading>Contact</SectionHeading>
      <a
        href={gmailCompose()}
        target="_blank"
        rel="noreferrer"
        data-reveal
        className="inline-block border-2 border-accent bg-accent px-8 py-3 text-sm font-semibold transition hover:brightness-110 duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
      >
        Say hello
      </a>
      {/* Email column sizes to the address so it never wraps */}
      <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr_1fr]">
        {items.map((i, idx) => (
          <li key={i.label} data-reveal style={delay(idx * 90)}>
            <a
              href={i.href}
              target={i.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="block border border-white/5 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60"
            >
              <span className="block text-xs uppercase tracking-widest text-accent">{i.label}</span>
              <span className="mt-2 block whitespace-nowrap text-sm">{i.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <ScrollReveal />
      <footer className="border-t border-white/5 py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built by me.
      </footer>
    </>
  );
}
