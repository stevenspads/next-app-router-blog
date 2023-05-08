import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Card({ children }: Props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
}
