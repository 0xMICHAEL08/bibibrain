"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-6 flex flex-col bg-[#111827] h-full text-white">
      <div>
        <Link href={"/dashboard"} className="flex items-center pl-6 mb-14">
          <div className=" relative mr-4">
            <Image
              width={24}
              height={24}
              alt="logo"
              src={"/bibilogo.png"}
            />
          </div>
          <h1 className={cn("font-bold text-3xl mt-1", montserrat.className)}>
            Blever
          </h1>
        </Link>

        <div className=" space-y-3 m-3">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className=" text-lg group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className=" flex items-center flex-1">
                <route.icon className={cn("h-6 w-6 mr-4", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
