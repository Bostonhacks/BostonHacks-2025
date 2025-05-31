import Image from "next/image";
import Link from "next/link";
import GlowingLogo from "@/public/temp_landing/bhacks-glowing-logo.svg"

export default function Home() {
  return (
    <main>
      <h1>BostonHacks 2025</h1>
      {/* <Link href={"/apply" + ".html"}>Apply</Link> */}
      {/* <Link href={"/sponsor" + ".html"}>Sponsor Us</Link> */}

      <Image src={GlowingLogo} alt="BostonHacks 2025 Logo" width={300} height={300} />
      {/* if you need more control over SVG logo, consider using https://react-svgr.com/playground/ */}

      <Link href={"/apply"}>Apply</Link>
      <Link href={"/sponsor"}>Sponsor Us</Link>
    </main>
  )
}
