"use client"

import { TwitterIcon, TwitterShareButton } from "next-share"

type Props = {
  title: string
  slug: string
}

export function SharePost({ title, slug }: Props) {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${slug}`
  const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE

  return (
    <div className="flex items-center justify-center">
      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        aria-label="Share on Twitter"
      >
        <TwitterIcon round size={48} />
      </TwitterShareButton>
    </div>
  )
}
