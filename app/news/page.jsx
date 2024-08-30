import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h3 className="text-xl font-sans font-semibold text-white">Updated News</h3>
      <ul className="flex items-center justify-around mt-3">
        <li className="px-3 py-2 rounded-lg transition-colors ease-in-out text-white hover:bg-slate-200 hover:text-black">
          <Link href="/news/first-news">First News Items</Link>
        </li>
        <li className="px-3 py-2 rounded-lg transition-colors ease-in-out text-white hover:bg-slate-200 hover:text-black">
          <Link href="/news/second-news">Second News Items</Link>
        </li>
        <li className="px-3 py-2 rounded-lg transition-colors ease-in-out text-white hover:bg-slate-200 hover:text-black">
          <Link href="/news/third-news">Third News Items</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
