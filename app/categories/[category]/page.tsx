import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { ArrowRightIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card"

interface PostProps {
  params: {
    category: string
  }
}

async function getPostsFromParams(params: PostProps["params"]) {
  const category = params?.category
  const posts = allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )
  return posts
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.filter((post) => ({
    category: post.category,
  }))
}

export default async function CategoryPostsPage({ params }: PostProps) {
  const posts = await getPostsFromParams(params)

  return posts.map((post) => (
    <article key={post._id} className="mb-12">
      <Card>
        {post.image && (
          <div className="relative w-full h-60">
            <Link href={post.slug}>
              <Image
                className="rounded-t-lg m-0 w-full object-cover"
                src={post.image}
                alt={post.title}
                fill
              />
            </Link>
          </div>
        )}
        <CardHeader>
          <CardTitle className="m-0">
            <Link href={post.slug} className="no-underline">
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="space-x-1 text-xs">
            <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
            <span>{` • `}</span>
            <span>{post.readingTime.text}</span>
            <span>{` • `}</span>
            <span>
              <Link
                href={`/categories/${encodeURIComponent(
                  post.category.toLowerCase()
                )}`}
                className="underline underline-offset-2"
              >
                {post.category}
              </Link>
            </span>
          </CardDescription>
        </CardHeader>
        {post.description && <CardContent>{post.description}</CardContent>}
        <CardFooter>
          <Link
            href={post.slug}
            className="inline-flex items-center px-3 py-2 text-sm space-x-2 no-underline font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>Read more</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </CardFooter>
      </Card>
    </article>
  ))
}
