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
            className="px-3 py-2 rounded-lg transition-all ease-in-out text-white hover:bg-slate-800 hover:scale-105"
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
