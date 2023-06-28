import Link from "next/link"
import { TwitterIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="flex justify-center mt-24">
      <div className="pt-16 space-y-12">
        <nav className="text-sm font-medium text-center space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="flex items-center justify-center">
          <a
            target="_blank"
            href="https://twitter.com/nextjs"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="px-4 text-gray-800 hover:text-blue-500"
          >
            <TwitterIcon className="w-8 h-8 fill-current" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; <Link href="/">{process.env.NEXT_PUBLIC_SITENAME}</Link>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
