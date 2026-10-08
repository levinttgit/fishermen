import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Fishermen | Christian Rock Band",
  description: "Christian rock combining the timeless energy of Petra with the modern anthemic sound of MercyMe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
