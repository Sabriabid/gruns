"use client";

import { useReveal } from "./useReveal";

export default function RevealBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  useReveal();
  return <>{children}</>;
}
