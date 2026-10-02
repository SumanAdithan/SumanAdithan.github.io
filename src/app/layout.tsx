import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import { profile } from "@/data/resume";
import { basePath, siteDescription, siteTitle, siteUrl } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// metadataBase is the bare origin: Next.js already prefixes basePath to file-based images
// (opengraph-image, icons), so including it here would double it. Page URLs add it explicitly.
const pageUrl = `${basePath}/`;

export const metadata: Metadata = {
  metadataBase: new URL(new URL(siteUrl).origin),
  title: { default: siteTitle, template: `%s | ${profile.name}` },
  description: siteDescription,
  applicationName: `${profile.name} – Portfolio`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Suman",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "NestJS Developer",
    "React Native Developer",
    "TypeScript",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "Portfolio",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "profile",
    url: pageUrl,
    siteName: `${profile.name} – Portfolio`,
    title: siteTitle,
    description: siteDescription,
    locale: "en_IN",
    firstName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#1a1f28",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint so scroll-reveal content starts hidden without a flash */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
