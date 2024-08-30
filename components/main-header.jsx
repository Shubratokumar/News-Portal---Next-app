import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="flex items-center justify-between">
        <div>
            <Link className="text-white text-2xl font-semibold" href="/">Next News</Link> 
        </div>
      <nav>
        <ul>
          <li className="px-3 py-2 rounded-lg transition-colors ease-in-out text-white hover:bg-slate-200 hover:text-black">
            <Link className="text-lg font-sans font-semibold" href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
