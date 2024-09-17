"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const path = usePathname();
  return (
    <header className="flex items-center justify-between">
      <div>
        <Link className="text-white text-2xl font-semibold" href="/">
          Next News
        </Link>
      </div>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Button
              variant={path.startsWith('/news') ? "outline" : "ghost" }
              className="transition-colors ease-in-out text-white hover:text-black"
            >
              <Link href="/news" className="text-base font-sans font-semibold">
                News
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant={path.startsWith('/archive') ? "outline" : "ghost"}
              className="transition-colors ease-in-out text-white hover:text-black"
            >
              <Link href="/archive" className="text-base font-sans font-semibold">
                Archive
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
