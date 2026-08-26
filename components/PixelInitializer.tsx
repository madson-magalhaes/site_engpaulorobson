"use client";

import { useMetaPixel } from "@/hooks/useMetaPixel";

export function PixelInitializer({
  pixelId,
}: {
  pixelId?: string;
}) {
  useMetaPixel(pixelId);
  return null;
}
