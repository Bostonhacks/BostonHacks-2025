import Image from "next/image"

const Header = () => {
  return (
    <nav className="flex justify-between p-8">
      <Image
        className="w-[50px] h-[50px]"
        src="/temp_landing/bhacks-glowing-logo.svg"
        alt="BostonHacks 2025 Logo"
        width={75}
        height={75}
      />
    </nav>
  )
}

export default Header
