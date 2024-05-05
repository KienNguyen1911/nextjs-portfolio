'use client';

import Image from "next/image";
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from "next/navigation";
import { CardHoverEffectDemo } from "@/components/cardHoverEffectDemo";

export default function Experience() {
  const pathname = usePathname();

  return (
    <CardHoverEffectDemo></CardHoverEffectDemo>
  );
}
