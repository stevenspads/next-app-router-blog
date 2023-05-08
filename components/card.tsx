import Image from "next/image";

interface Props {
  image?: string | null;
  imageAlt?: string;
  children?: React.ReactNode;
}

export function Card({ image, imageAlt, children }: Props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      {image && (
        <div className="relative w-full h-64">
          <Image
            className="rounded-t-lg m-0 w-full object-cover h-60"
            src={image}
            alt={imageAlt || ""}
            fill
          />
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}
