import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BostonHacks 2025",
  description: "BostonHacks 2025 Hackathon, Boston University’s largest, annual student-run hackathon and various beginner friendly workshops!",
  keywords: ["bostonhacks", "hackathon", "bostonhacks 2025", "boston hackathon"],
  openGraph: {
    title: "BostonHacks 2025",
    description: "BostonHacks 2025 Hackathon landing page",
    url: "https://www.bostonhacks.org",
    siteName: "BostonHacks 2025",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
