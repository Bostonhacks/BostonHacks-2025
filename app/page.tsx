import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>BostonHacks 2025</h1>
      {/* <Link href={"/apply" + ".html"}>Apply</Link> */}
      {/* <Link href={"/sponsor" + ".html"}>Sponsor Us</Link> */}

      <Link href={"/apply"}>Apply</Link>
      <Link href={"/sponsor"}>Sponsor Us</Link>
    </main>
  )
}
