import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navratri, Dussehra & Vijayadashami 2025 – Festivals of Victory & Devotion",
  description:
    "Celebrate Navratri, Dussehra and Vijayadashami 2025 with Dashehra.com. Discover stories, rituals, cultural traditions, and the significance of these festivals of devotion and the triumph of good over evil.",
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
