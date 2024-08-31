import { Button } from "@/components/ui/button";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import NewsCard from "./news/NewsCard";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <ul className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-7 mt-3 p-5">
        {DUMMY_NEWS.slice(3, 6).map((newsItem) => (
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
      <Button variant="ghost" className="transition-colors ease-in-out text-white hover:text-black">
        <Link  href="/news">
          Explore More News
        </Link>
      </Button>
    </main>
  );
}
