"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        "Give someone a program,
        <br />
        you frustrate them `&quot;`
        <Highlight className="text-black dark:text-white">
            for a day
        </Highlight>;
        <br />
        Teach them how to program, 
        <br />
        you frustrate them{"&quot; "}
        <Highlight className="text-black dark:text-white">
            for a lifetime
        </Highlight>
        "
        <br />
        - David Leinweber
      </motion.h1>
    </HeroHighlight>
  );
}
