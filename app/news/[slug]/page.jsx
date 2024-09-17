import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NewsDetails = ({ params }) => {
  const slug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="text-white mt-3">
      <header>
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          height={100}
          width={100}
          className="w-48 h-44 object-cover"
          priority
        />
        <h1 className="my-2 text-lg font-sans font-medium">{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p className="text-sm font-mono font-medium">{newsItem.content}</p>
      <Button
        variant="secondary"
        className="mt-3 transition-colors ease-in-out"
      >
        <Link href="/news">Back to News</Link>
      </Button>
    </article>
  );
};

export default NewsDetails;
