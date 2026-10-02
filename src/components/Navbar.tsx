"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/resume";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contacts" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(links[0].href);

  useEffect(() => {
    // The active link is the last linked section whose top has passed 40% of the viewport.
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const line = window.scrollY + window.innerHeight * 0.4;
      let current = links[0].href;
      for (const l of links) {
        const el = document.querySelector<HTMLElement>(l.href);
        if (el && el.offsetTop <= line) current = l.href;
      }
      setActive(atBottom ? links[links.length - 1].href : current);
    };
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-background/85 shadow-lg shadow-black/30" : "bg-background/0"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-12">
        <a href="#home" className="text-lg font-bold tracking-wide transition-colors hover:text-accent">
          {profile.name}
        </a>

        <ul className="hidden gap-10 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "location" : undefined}
                className={`relative py-1 transition-colors hover:text-accent after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  active === l.href ? "text-accent after:scale-x-100" : "after:scale-x-0"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col items-end gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-foreground transition duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-4 bg-foreground transition duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${open ? "w-6 -translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu slides open by animating its grid row from 0fr to 1fr */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="flex flex-col gap-1 overflow-hidden px-6" inert={!open}>
          {links.map((l, i) => (
            <li
              key={l.href}
              className={`transition duration-300 ${open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm hover:text-accent ${active === l.href ? "text-accent" : ""}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li aria-hidden className="pb-5" />
        </ul>
      </div>

      {/* Scroll progress */}
      <div aria-hidden className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 bg-accent" />
    </header>
  );
}
