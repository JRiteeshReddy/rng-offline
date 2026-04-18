import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, Instagram, Wifi, Zap, Sparkles, Layers, Smartphone } from "lucide-react";

// === SWAP THESE TWO CONSTANTS ===
const APK_URL = "https://example.com/rng-offline.apk"; // <-- replace with your APK URL
const VIDEO_SRC = "/videos/tutorial.mp4"; // <-- drop your MP4 into public/videos/tutorial.mp4
// =================================

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RNG Offline — Building tools for modern magicians" },
      {
        name: "description",
        content:
          "RNG Offline by J Riteesh Reddy. A powerful, offline random number generator designed for performance, reliability, and seamless integration into your routines.",
      },
      { property: "og:title", content: "RNG Offline — Building tools for modern magicians" },
      {
        property: "og:description",
        content:
          "A simple-looking random number generator designed for performance, reliability, and seamless integration into your routines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Performance />
      <Overview />
      <Features />
      <Tutorial />
      <About />
      <DownloadCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          RNG <span className="text-muted-foreground">Offline</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#tutorial" className="transition-colors hover:text-foreground">Tutorial</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
        </nav>
        <a
          href={APK_URL}
          className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          <Download className="h-3.5 w-3.5" />
          Download
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-hero relative overflow-hidden pt-40 pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(1_0_0/0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Sparkles className="h-3 w-3" />
          Building tools for modern magicians
        </p>
        <h1 className="animate-fade-up text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
          <span className="text-gradient">RNG Offline</span>
        </h1>
        <p className="animate-fade-up mt-6 text-xl text-muted-foreground sm:text-2xl" style={{ animationDelay: "120ms" }}>
          A powerful tool for modern magicians
        </p>
        <p className="animate-fade-up mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={{ animationDelay: "220ms" }}>
          A simple-looking random number generator designed for performance, reliability,
          and seamless integration into your routines.
        </p>
        <div className="animate-fade-up mt-12 flex flex-col items-center gap-4" style={{ animationDelay: "320ms" }}>
          <a
            href={APK_URL}
            className="shadow-glow group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[0_0_120px_oklch(1_0_0/0.2)]"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download APK
          </a>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Android Only · ~20MB · Works Offline
          </p>
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <Section id="performance">
      <SectionLabel>01 — Designed for the Stage</SectionLabel>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
        Built for <span className="text-gradient">Performance</span>
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Designed for magicians who need consistency, control, and subtlety. RNG Offline
        blends into any routine while delivering dependable results when it matters.
      </p>
    </Section>
  );
}

function Overview() {
  const items = [
    { icon: Layers, title: "Clean interface", desc: "A familiar, distraction-free layout that looks and feels like any standard utility." },
    { icon: Zap, title: "Instant results", desc: "Numbers appear the moment you tap. No animations, no waiting, no friction." },
    { icon: Wifi, title: "Offline functionality", desc: "Works entirely without an internet connection. No accounts, no tracking." },
    { icon: Smartphone, title: "Fast & lightweight", desc: "Tiny footprint, instant launch, and reliable on any modern Android device." },
  ];
  return (
    <Section id="overview">
      <SectionLabel>02 — Overview</SectionLabel>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        A random number generator, refined.
      </h2>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group bg-card p-8 transition-colors hover:bg-accent/40">
            <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
            <h3 className="mt-6 text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Features() {
  const features = [
    "Works completely offline",
    "Instant number generation",
    "Smooth and reliable performance",
    "Minimal and distraction-free interface",
    "Designed for real-world use",
  ];
  return (
    <Section id="features">
      <SectionLabel>03 — Features</SectionLabel>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Everything you need.<br />
        <span className="text-muted-foreground">Nothing you don't.</span>
      </h2>
      <ul className="mt-16 divide-y divide-border border-y border-border">
        {features.map((f, i) => (
          <li key={f} className="flex items-center justify-between py-6 transition-colors hover:bg-accent/20">
            <span className="text-lg sm:text-xl">{f}</span>
            <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Tutorial() {
  return (
    <Section id="tutorial">
      <div className="text-center">
        <SectionLabel className="justify-center">04 — Walkthrough</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">How to Use</h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          A short, four-minute walkthrough covering everything you need to get started.
        </p>
      </div>
      <div className="shadow-soft mt-16 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="aspect-video w-full">
          <video
            controls
            playsInline
            preload="metadata"
            className="h-full w-full bg-black"
            poster=""
          >
            <source src={VIDEO_SRC} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about">
      <SectionLabel>05 — About</SectionLabel>
      <div className="grid gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            J Riteesh<br />
            <span className="text-muted-foreground">Reddy</span>
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I build tools and experiences for modern magicians, focusing on simplicity,
            performance, and real-world usability.
          </p>
          <div className="mt-10 flex flex-col gap-3">
            <a
              href="mailto:jriteeshreddy@gmail.com"
              className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                jriteeshreddy@gmail.com
              </span>
            </a>
            <a
              href="https://www.instagram.com/thehive.builds?igsh=MW5uajZ5OGdnNjlrdg=="
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-foreground"
            >
              <Instagram className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                @thehive.builds
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DownloadCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-32 sm:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(1_0_0/0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-gradient">Get RNG Offline</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
          One tap. Always ready. Built to disappear into your routine.
        </p>
        <div className="mt-12">
          <a
            href={APK_URL}
            className="shadow-glow group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-base font-medium text-primary-foreground transition-all hover:scale-[1.03]"
          >
            <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Download APK
          </a>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Android may require enabling 'Install from Unknown Sources'
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} J Riteesh Reddy. All rights reserved.</p>
        <p>RNG Offline · v1.0</p>
      </div>
    </footer>
  );
}

/* --------------------------- helpers --------------------------- */

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </section>
  );
}

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground ${className}`}>
      {children}
    </p>
  );
}
