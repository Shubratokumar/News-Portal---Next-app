import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import NewsCard from "./NewsCard";

const NewsPage = () => {
  return (
    <div>
      <h3 className="text-xl font-sans font-semibold text-white">
        Updated News
      </h3>
      <ul className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-7 mt-3 p-5">
        {DUMMY_NEWS.map((newsItem) => (
          <li
            key={newsItem.id}
            className="bg-gradient-to-r hover:from-pink-500/30 hover:to-orange-400/30 px-5 py-4 rounded-lg transition-all ease-in-out duration-300 bg-slate-800/50 text-white hover:scale-105"
          >
            <Link href={`/news/${newsItem.slug}`}>
              <NewsCard news={newsItem} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
