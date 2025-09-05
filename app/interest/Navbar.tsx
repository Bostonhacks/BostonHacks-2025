import Image from "next/image"

const Header = () => {
  return (
    <nav className="flex justify-between p-8">
      <Image
        src="/temp_landing/bhacks-glowing-logo.svg"
        alt="BostonHacks 2025 Logo"
        width={60}
        height={60}
      />
    </nav>
  )
}

export default Header
