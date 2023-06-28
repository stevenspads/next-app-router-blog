import Link from "next/link"

export default function NotFound() {
  return (
    <div className="prose dark:prose-invert text-center">
      <h2 className="mb-2">Not Found</h2>
      <p>Could not find requested resource.</p>
      <p>
        <Link href="/" className="no-underline">
          Back Home
        </Link>
      </p>
    </div>
  )
}
