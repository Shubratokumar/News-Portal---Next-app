"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {
  const path = usePathname();
  return (
    <Button
      variant={path.startsWith(href) ? "outline" : "ghost"}
      className="transition-colors ease-in-out text-white hover:text-black"
    >
      <Link href={href} className="text-base font-sans font-semibold">
        {children}
      </Link>
    </Button>
  );
};

export default NavLink;
