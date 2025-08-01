"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type RouteType = 'hash' | 'page'

type Route = {
  label: string
  path: string
  type: RouteType
}

type NavbarProps = {
  routes: Route[]
  className?: string
}

const Navbar = ({ routes, className = '' }: NavbarProps) => {
  const pathname = usePathname()

  const handleHashClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    const element = document.getElementById(path.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Update URL without navigation
      window.history.pushState(null, '', path)
    }
  }

  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex">
        {routes.map((route, index) => (
          <div key={index}>
            {route.type === 'hash' ? (
              <a
                href={route.path}
                onClick={(e) => handleHashClick(e, route.path)}
                className={`px-4 py-2 rounded-lg transition-all duration-100 font-medium ${pathname === route.path || (route.type === 'hash' && pathname === '/')
                  ? 'bg-red-500'
                  : 'bg-blue-200 hover:text-white hover:cursor-pointer hover:bg-white/10'
                  }`}
              >
                {route.label}
              </a>
            ) : (
              <Link
                href={route.path}
                className={`px-4 py-2 rounded-lg transition-all duration-100 font-medium ${pathname === route.path
                  ? 'bg-red-500'
                  : 'bg-blue-200 hover:text-white hover:cursor-pointer hover:bg-white/10'
                  }`}
              >
                {route.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

