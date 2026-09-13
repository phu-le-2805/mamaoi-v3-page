import type { Metadata } from "next";
import { Baloo_2, Be_Vietnam_Pro } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import "./globals.css";

const display = Baloo_2({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/mommi-logo.png"],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body>
        <header className="header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <Image src="/logo.png" alt="" width={40} height={40} priority />
              <span>{site.name}</span>
            </Link>
            <nav className="nav">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <Link href="/" className="brand">
                <Image src="/logo.png" alt="" width={32} height={32} />
                <span>{site.name}</span>
              </Link>
              <p className="muted">{site.tagline}</p>
            </div>
            <nav className="footer-nav">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </nav>
          </div>
          <div className="container footer-bottom">
            © {new Date().getFullYear()} {site.company}. Bảo lưu mọi quyền.
          </div>
        </footer>
      </body>
    </html>
  );
}
