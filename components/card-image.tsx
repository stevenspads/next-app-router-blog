import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  alt: string;
  url?: string;
}

export default function CardImage({ src, alt, url }: Props) {
  const image = (
    <Image
      className="rounded-t-lg m-0 w-full object-cover"
      src={src}
      alt={alt}
      fill
    />
  );
  let cardImage = image;

  if (url) {
    cardImage = <Link href={url}>{image}</Link>
  }
  
  return (
    <div className="relative w-full h-60">
      {cardImage}
    </div>
  )
}