'use client';

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { TabsDemo } from "@/components/tabsDemo";
import { NavbarDemo } from "@/components/navbarDemo";
import { MovingBorderDemo } from "@/components/movingBorderDemo";
import { SparklesPreview } from "@/components/sparklesPreiew";
import { HeroHighlightDemo } from "@/components/heroHighlightDemo";

export default function Home() {
  const pathname = usePathname();

  return (
    // <main className="flex min-h-screen flex-col items-center">
    <>
      <SparklesPreview></SparklesPreview>
      <HeroHighlightDemo></HeroHighlightDemo>
    </>
    // </main>
  );
}
