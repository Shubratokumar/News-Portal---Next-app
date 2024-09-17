
import Link from "next/link";
import NavLink from "./nav-link";

const MainHeader = () => {
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
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
