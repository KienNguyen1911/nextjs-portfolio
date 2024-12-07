"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { lobster, lusitana } from '@/app/ui/fonts';
import clsx from "clsx";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto py-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const HeaderGenZ = () => (
  // I want to "Gen Z" in the center of the card, and background color of card is gradient with sky color
  <div className="flex items-center justify-center w-full min-h-40 h-full overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-600 rounded-xl">
    <div className={`${lobster.className} text-white font-bold text-4xl`}>Gen Z</div>
  </div>
);

const TechStack = () => (
  // I want to display an image that is fit in the card
  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br overflow-hidden from-blue-700 to-indigo-600 rounded-xl">
    <Image alt="Tech Stack" src="/tech-stack.jpg" width={560} height={600} className="object-fill" />
  </div>
);

const Colledge = () => (
  // I want to display an image that is fit in the card
  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br overflow-hidden from-blue-700 to-indigo-600 rounded-xl">
    <Image alt="Tech Stack" src="/btec.jpg" width={300} className="max-w-md" height={300} />
  </div>
);

const Avatar = () => (
  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br overflow-hidden from-[#4d49ff] to-slate-300 rounded-xl">
    <Image alt="Tech Stack" src="/avatar-removebg-preview.png" width={150} height={300} />
  </div>
);

const Giphy = () => (
  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br overflow-hidden from-[#4d49ff] to-slate-300 rounded-xl">
    <Image alt="Tech Stack" src="/giphy.gif" width={300} className="max-w-md" height={300} />
  </div>
);

const Level = () => (
  <div className="flex items-center justify-center w-full min-h-40 h-full bg-gradient-to-br from-blue-700 to-indigo-600 rounded-xl">
    <div className={`${lobster.className} text-white font-bold text-4xl`}>2 yoe</div>
  </div>
);

const Tools = () => (
  // I want to display an image that is fit in the card
  <BackgroundGradient className="flex items-center justify-center rounded-[22px] w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
    {/* <div className="flex items-center justify-center w-full h-full bg-gradient-to-br overflow-hidden from-teal-700 to-indigo-600 rounded-xl"> */}
      <Image alt="Tech Stack" src="/github-icon-29.png" width={104} height={600} className="object-fill mr-2" />
      <Image alt="Tech Stack" src="/jetbrains.png" width={104} height={600} className="rounded-3xl object-fill mr-2" />
      <Image alt="Tech Stack" src="/postman.png" width={104} height={600} className="object-fill" />
      <Image alt="Tech Stack" src="/Figma-Logo-PNG-Cutout.png" width={120} height={600} className="object-fill" />
    {/* </div> */}
  </BackgroundGradient>
);


const items = [
  {
    title: "Gen Z",
    description: "Birthdate: November 19th 2002.",
    header: <HeaderGenZ />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Nguyen Dong Kien",
    description: "Living in Hanoi, Vietnam. Always ready to learn new things.",
    header: <Avatar />,
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "BTEC FPT College",
    description: "Graduated from information technology at BTEC FPT Hanoi in 2022.",
    header: <Colledge />,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tech Stack: Laravel (PHP) + VueJS (Javascript)",
    description:
      "Understand and Use technology effectively and quickly.",
    header: <TechStack />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Junior Developer",
    description: "I am on the developing path.",
    header: <Level />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Giphy />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Tools of Developing path",
    description: "Github, Jetbrains IDE, Postman, Figma,... I am familiar with them all.",
    header: <Tools />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
