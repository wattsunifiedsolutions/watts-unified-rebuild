import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wattsunified.com"),
  title: {
    default: "Watts Unified Solutions",
    template: "%s | Watts Unified Solutions",
  },
  description: "Retirement, wealth protection, and legacy strategy built around the life you are working to protect.",
  applicationName: "Watts Unified Solutions",
  authors: [{ name: "Watts Unified Solutions", url: "https://wattsunified.com" }],
  creator: "Watts Unified Solutions",
  publisher: "Watts Unified Solutions",
  robots: { index: true, follow: true },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      { url: "/watts-falcon.png", type: "image/png", sizes: "128x128" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/watts-falcon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Watts Unified Solutions",
    url: "https://wattsunified.com",
    logo: "https://wattsunified.com/watts-logo.png",
    sameAs: [
      "https://www.linkedin.com/in/s-alex-watts",
      "https://www.instagram.com/watts_unifiedsolutions",
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
