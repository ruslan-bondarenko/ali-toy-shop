"use client";

import React, { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useSession } from "next-auth/react";

type Props = {
  className?: string;
};

import { useHeaderActions } from "@/base/store";
import { NAV_LINKS } from "@/shared";

const NavBar: FC<Props> = ({ className }) => {
  const session = useSession();
  const { closeMenu } = useHeaderActions();

  return (
    <ul
      className={clsx(
        "hidden sm:flex items-center gap-4 text-sm text-gray-100 text-m",
        className
      )}
    >
      {NAV_LINKS.map((nl, index) => (
        <li
          key={nl.label + index}
          className="hover:text-tone-700 transition-all ease-linear"
          onClick={() => closeMenu()}
        >
          <Link href={nl.link}>{nl.label}</Link>
        </li>
      ))}

      {session?.data && (
        <li
          className="hover:text-tone-700 transition-all ease-linear"
          onClick={() => closeMenu()}
        >
          <Link href="/profile">Profile</Link>
        </li>
      )}
    </ul>
  );
};

export default NavBar;
