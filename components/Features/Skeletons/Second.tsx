import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

export default function SkeletonSecond() {
  return (
    <div
      style={{
        transform: "rotateY(19deg) rotateX(24deg) rotateZ(-20deg)",
      }}
      className={cn(
        "group transform-gpu max-w-[85%] h-full mx-auto p-3 w-full rounded-2xl border-neutral-200 shadow-2xl bg-neutral-100 border-2 dark:border-neutral-700 flex flex-col translate-x-12 hover:scale-[1.02] transition-transform duration-300 [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10", "mask-b-from-70% "
    
      )}
    >
      {/* Header */}
      <div className="flex gap-3 items-center">
        <IconCircleDashedCheck className="size-4" />
        <p className="font-bold text-sm dark:text-white">
          Campaign Planner
        </p>
      </div>

      {/* Body */}
      <div className="flex-1 mt-4 bg-neutral-100 border border-neutral-300 rounded-2xl relative overflow-visible flex flex-col gap-2 ">
        <Pattern />

        {/* Card stack container */}
      

          {/* Overlay card */}
          <div className="relative inset-0 translate-x-4 translate-y-4 scale-110 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 bg-white/80 backdrop-blur py-3 px-3 z-10 divide-y divide-neutral-200 rounded-2xl shadow-xl group-hover:shadow-2xl">

            <Row
              icon={<IconCheck className="size-3 text-white" />}
              text="Fetching Data"
              time="10s"
            />

            <Row
              icon={<IconCheck className="size-3 text-white" />}
              text="Processing Data"
              time="20s"
            />

            <Row
              icon={<IconCheck className="size-3 text-white" />}
              text="Performing Action"
              time="30s"
            />

            <Row
              icon={<IconCheck className="size-3 text-white" />}
              text="Waiting"
              time="40s"
            />

            <Row
              icon={<IconLoader2 className="size-3 animate-spin text-white" />}
              text="Generating Report"
              time="50s"
              variant="warning"
            />
          </div>

        
      </div>
    </div>
  );
}

const Row = ({
  icon,
  text,
  time,
  variant = "success",
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  variant?: "success" | "warning" | "danger";
}) => {
  return (
    <div className="flex px-4 py-2 items-center justify-between">
      <div className="flex items-center gap-2">

        <div
          className={cn(
            "size-4 flex rounded-full items-center justify-center",
            variant === "success" && "bg-green-500",
            variant === "warning" && "bg-yellow-500",
            variant === "danger" && "bg-red-500"
          )}
        >
          {icon}
        </div>

        <p className="text-neutral-600 text-sm font-medium">
          {text}
        </p>

      </div>

      <div className="flex items-center text-neutral-400 gap-1">
        <IconRipple className="size-3" />
        <p className="text-[10px] font-bold">{time}</p>
      </div>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px]" />
  );
};