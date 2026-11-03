import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Fishermen | Christian Rock Band",
  description: "The Fishermen — Christian rock bringing authentic worship, bold musicianship, and the living hope of Jesus Christ. Casting Sounds and Captivating Souls for His Glory.",
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
