import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout} from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GATE 2025 - Global Summit of Advanced & Third Space Endoscopy",
    template: "%s | GATE 2025 Conference"
  },
  description: "Join the Global Summit of Advanced & Third Space Endoscopy (GATE) 2025 in Riyadh, Saudi Arabia. Learn from 50+ international experts, witness live demonstrations, and earn CME credits at King Faisal Specialist Hospital.",
  keywords: [
    "endoscopy conference",
    "third space endoscopy",
    "advanced endoscopy",
    "medical conference",
    "CME credits",
    "Riyadh",
    "Saudi Arabia",
    "King Faisal Specialist Hospital",
    "endoscopic techniques",
    "medical education",
    "gastroenterology",
    "minimally invasive procedures"
  ],
  authors: [{ name: "GATE Conference Team" }],
  creator: "GATE Conference Organizing Committee",
  publisher: "King Faisal Specialist Hospital & Research Centre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gate2025.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en',
      'ar-SA': '/ar',
    },
  },
  openGraph: {
    title: "GATE 2025 - Global Summit of Advanced & Third Space Endoscopy",
    description: "Join 50+ international experts for 3 days of cutting-edge endoscopy presentations, live demonstrations, and hands-on experiences. November 13-15, 2025, Riyadh, Saudi Arabia.",
    url: "https://gate2025.com",
    siteName: "GATE 2025 Conference",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GATE 2025 Conference - Global Summit of Advanced & Third Space Endoscopy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GATE 2025 - Global Summit of Advanced & Third Space Endoscopy",
    description: "Join 50+ international experts for 3 days of cutting-edge endoscopy presentations and live demonstrations. November 13-15, 2025, Riyadh.",
    images: ["/og-image.png"],
    creator: "@GATEConference2025",
    site: "@GATEConference2025",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  category: "medical conference",
  classification: "Medical Education",
  other: {
    "application-name": "GATE 2025 Conference",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "GATE 2025",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#0ea5e9",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="mask-icon" href="/icon-192x192.png" color="#0ea5e9" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
