"use client";
import { ReactNode } from "react";

export default function FooterNavColumn({
  title,
  children,
  className = "",
}: {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {title && <div className="font-bold mb-[12px]">{title}</div>}
      <ul className="space-y-[12px]">{children}</ul>
    </div>
  );
}
