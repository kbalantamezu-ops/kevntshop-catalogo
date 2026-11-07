import type { Metadata, Viewport } from "next";
import { Archivo, Manrope } from "next/font/google";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KEVNTSHOP | Moda hombre y mujer",
    template: "%s | KEVNTSHOP",
  },
  description:
    "Catálogo de ropa para hombre y mujer: jeans, denim shorts, tops, vestidos y conjuntos. Compra directa por WhatsApp.",
  applicationName: "KEVNTSHOP",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "KEVNTSHOP",
    title: "KEVNTSHOP | Moda hombre y mujer",
    description:
      "Catálogo de ropa para hombre y mujer. Jeans, denim shorts, tops, vestidos y conjuntos. Compra directa por WhatsApp.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "KEVNTSHOP · Moda hombre y mujer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KEVNTSHOP | Moda hombre y mujer",
    description:
      "Catálogo de ropa para hombre y mujer. Compra directa por WhatsApp.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${archivo.variable} ${manrope.variable}`}>
      <body className="flex min-h-svh flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
