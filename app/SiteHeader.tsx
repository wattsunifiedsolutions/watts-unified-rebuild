"use client";

import Image from "next/image";
import { useState } from "react";

const siteUrl = "https://wattsunified.com";

const links = [
  ["Home", `${siteUrl}/`],
  ["Solutions", `${siteUrl}/solutions/`],
  ["Veteran Summit", `${siteUrl}/solutions/programs/veterans`],
  ["Opportunity", `${siteUrl}/opportunity`],
  ["Resources", `${siteUrl}/resources`],
  ["About", `${siteUrl}/about`],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="global-header">
      <a className="global-brand" href={siteUrl} aria-label="Watts Unified Solutions home">
        <Image src="/watts-logo.png" alt="Watts Unified Solutions" width={545} height={113} priority />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      <nav id="primary-navigation" className={open ? "global-nav open" : "global-nav"} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="header-cta" href={`${siteUrl}/schedule`} onClick={() => setOpen(false)}>
          Let&apos;s Connect <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  );
}
