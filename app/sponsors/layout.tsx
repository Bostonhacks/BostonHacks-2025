import type { Metadata } from "next";
import Link from "next/link";
import { LOGO_SIZE } from "@/app/const";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://bostonhacks.org"),
  title: "Sponsor BostonHacks 2025 - Partnership Opportunities",
  description: "Partner with BostonHacks 2025 and connect with talented students from Boston University and beyond. Explore sponsorship packages and benefits.",
  keywords: ["bostonhacks sponsor", "hackathon sponsorship", "boston university partnership", "tech recruiting", "student outreach", "corporate partnership", "hackathon sponsor benefits", "retro remix sponsor"],
  authors: [{
    name: "BostonHacks Team",
  }],
  creator: "BostonHacks",
  openGraph: {
    title: "Sponsor BostonHacks 2025 - Partnership Opportunities",
    description: "Partner with BostonHacks 2025 and connect with talented students. Explore sponsorship packages and recruiting opportunities.",
    url: "https://bostonhacks.org/sponsors",
    siteName: "BostonHacks 2025",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "BostonHacks 2025 Banner",
      }
    ]
  }
};

export default function SponsorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`antialiased overflow-x-hidden`}>
      <div className="scale-75 md:scale-100 absolute md:fixed md:top-8 md:left-10 top-7 left-7 z-200">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={LOGO_SIZE.width}
            height={LOGO_SIZE.height}
            className="cursor-pointer"
          />
        </Link>
      </div>
      {children}
    </main>
  );
}
