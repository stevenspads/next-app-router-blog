import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Card } from "@/components/card";
import { ArrowRightIcon } from "lucide-react";

interface PostProps {
  params: {
    category: string;
  };
}

async function getPostsFromParams(params: PostProps["params"]) {
  const category = params?.category;
  const posts = allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
  return posts;
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.filter((post) => ({
    category: post.category,
  }));
}

export default async function PostPage({ params }: PostProps) {
  const posts = await getPostsFromParams(params);

  return posts.map((post) => (
    <article key={post._id} className="mb-12">
      <Card image={post.image}>
        <header>
          <Link href={post.slug} className="no-underline">
            <h2 className="m-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h2>
          </Link>
          <p className="mt-1 space-x-1 text-xs text-gray-500">
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

        {post.description && (
          <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
            {post.description}
          </p>
        )}

        <footer>
          <Link
            href={post.slug}
            className="inline-flex items-center px-3 py-2 text-sm space-x-2 no-underline font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>Read more</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </footer>
      </Card>
    </article>
  ));
}
