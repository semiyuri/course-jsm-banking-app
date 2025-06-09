"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

interface Props {
  user: User;
}

const Sidebar = ({ user }: Props) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            width={34}
            height={34}
            src="/icons/logo.svg"
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />

          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  fill
                  src={link.imgURL}
                  alt={link.label}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>

              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {link.label}
              </p>
            </Link>
          );
        })}
      </nav>

      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
