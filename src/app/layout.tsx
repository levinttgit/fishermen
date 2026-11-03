import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Fishermen | Christian Rock Band",
  description: "The Fishermen — Christian rock bringing authentic worship, bold musicianship, and the living hope of Jesus Christ. Casting Sounds and Captivating Souls for His Glory.",
  metadataBase: new URL("https://levinttgit.github.io/fishermen/"),
  openGraph: {
    title: "The Fishermen | Christian Rock Band",
    description: "Christian rock bringing authentic worship, bold musicianship, and the living hope of Jesus Christ. Casting Sounds and Captivating Souls for His Glory.",
    url: "https://levinttgit.github.io/fishermen/",
    siteName: "The Fishermen",
    images: [
      {
        url: "/fishermen/images/band.jpg",
        width: 1200,
        height: 1200,
        alt: "The Fishermen Band",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fishermen | Christian Rock Band",
    description: "Christian rock bringing authentic worship, bold musicianship, and the living hope of Jesus Christ.",
    images: ["/fishermen/images/band.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
