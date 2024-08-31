import Link from "next/link";
import { Button } from "./ui/button";

const MainHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Link className="text-white text-2xl font-semibold" href="/">
          Next News
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Button
              variant="ghost"
              className="transition-colors ease-in-out text-white hover:text-black"
            >
              <Link href="/news" className="text-lg font-sans font-semibold">
                News
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
