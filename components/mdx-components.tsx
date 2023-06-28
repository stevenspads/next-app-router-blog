import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const mdxComponents = {
  Image,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const MDXContent = useMDXComponent(code) as any

  return <MDXContent components={mdxComponents} />
}
