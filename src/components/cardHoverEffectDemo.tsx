import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Warehouse management system",
    description:
      "Building a system providing solutions for moving goods between warehouses and performing complex operations",
    link: "#",
  },
  {
    title: "Hotel and Booking Management System",
    description:
      "Building a website that offer features such as hotel reservations, travel guides, maps, or travel planning tools.",
    link: "#",
  },
  {
    title: "Relay Data Application",
    description:
      "Building a system that allows users to send, receive, transform data to stakeholders.",
    link: "#",
  },
  {
    title: "Remind System",
    description:
      "Building a system that allows users to set reminders for important events.",
    link: "#",
  },
  {
    title: "Crawler System (Personal Project)",
    description:
      "Crawler system that crawls or scrapes data from websites and stores it in a database.",
    link: "#",
  },
  {
    title: "Custom UltimatePOS (Personal Project)",
    description:
      "Based on UltimatePOS, I have customized it to meet the needs of my business.",
    link: "#",
  },
];
