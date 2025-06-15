import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-y-5 items-center justify-center h-screen text-center">
      <div className="flex-row">
        <h1 className="text-5xl">404 | Page Not Found</h1>
      </div>
      <p>Could not find requested resource</p>
      <Link className="text-blue-400 underline" href="/">Return Home</Link>
    </div>
  )
}
