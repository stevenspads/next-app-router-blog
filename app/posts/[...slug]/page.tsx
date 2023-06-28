import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

import { Mdx } from "@/components/mdx-components"
import { SharePost } from "@/components/share-post"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      {post.image && (
        <div className="relative w-full h-[345px] mb-12">
          <Image
            className="rounded-lg w-full m-0 object-cover"
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <header>
        <h1 className="mb-2">{post.title}</h1>
        {post.description && (
          <p className="text-xl mt-0 mb-6 text-gray-700 dark:text-gray-200">
            {post.description}
          </p>
        )}
        <p className="space-x-1 text-xs text-gray-500">
          <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
          <span>{` • `}</span>
          <span>{post.readingTime.text}</span>
          <span>{` • `}</span>
          <span>
            <Link
              href={`/categories/${encodeURIComponent(
                post.category.toLowerCase()
              )}`}
            >
              {post.category}
            </Link>
          </span>
        </p>
      </header>
      <hr className="my-6" />
      <Mdx code={post.body.code} />
      <SharePost title={post.title} slug={post.slug} />
    </article>
  )
}
