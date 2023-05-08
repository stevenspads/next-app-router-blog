import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardBody({ children }: Props) {
  return (
    <div className="p-5">{children}</div>
  )
}