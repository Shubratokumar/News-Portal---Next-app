import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h3 className="text-xl font-sans font-semibold">News Here</h3>
      <ul>
        <li>
          <Link href="/news/first-new">First News Items</Link>
        </li>
        <li>
          <Link href="/news/second-new">Second News Items</Link>
        </li>
        <li>
          <Link href="/news/third-new">Third News Items</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
