import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beelio Technologies | Software Development Company in Uganda | Custom Web & Mobile Apps",
  description: "Leading software development company in Kampala, Uganda. We build custom websites, mobile apps, school management systems, and business solutions for local enterprises. Founded 2024.",
  keywords: [
    "software development Uganda",
    "web development Kampala", 
    "mobile app development Uganda",
    "school management system Uganda",
    "hospital management software Uganda",
    "e-commerce website Uganda",
    "business software solutions Uganda",
    "custom software development East Africa",
    "Beelio Technologies",
    "Uganda tech company"
  ],
  authors: [{ name: "Beelio Technologies" }],
  creator: "Beelio Technologies",
  publisher: "Beelio Technologies",
  metadataBase: new URL('https://beelio.tech'),
  alternates: {
    canonical: 'https://beelio.tech',
  },
  openGraph: {
    title: "Beelio Technologies | Software Development Company in Uganda",
    description: "Custom web & mobile app development, school management systems, and business software solutions in Kampala, Uganda. Professional, affordable, reliable.",
    url: 'https://beelio.tech',
    siteName: 'Beelio Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beelio Technologies - Software Development Company Uganda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Beelio Technologies | Software Development Company in Uganda",
    description: "Custom web & mobile app development, school management systems, and business software solutions in Kampala, Uganda.",
    images: ['/og-image.jpg'],
    creator: '@beelio_tech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Beelio Technologies',
    alternateName: 'Beelio',
    url: 'https://beelio.tech',
    logo: 'https://beelio.tech/logo.png',
    description: 'Leading software development company in Kampala, Uganda, specializing in custom web applications, mobile apps, and business management systems.',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Beelio Technologies Team'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Innovation Hub',
      addressLocality: 'Kampala',
      addressCountry: 'Uganda',
      addressRegion: 'Central Region'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+256-XXX-XXXXXX',
      contactType: 'customer service',
      email: 'beeliotechnologies@gmail.com',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://linkedin.com/company/beelio-technologies',
      'https://twitter.com/beelio_tech'
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Uganda'
    },
    serviceType: [
      'Software Development',
      'Web Development',
      'Mobile App Development',
      'School Management Systems',
      'Hospital Management Systems',
      'E-commerce Solutions'
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Mobile Development',
      'Database Design',
      'UI/UX Design'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
