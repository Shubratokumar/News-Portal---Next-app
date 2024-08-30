import Image from "next/image";

const NewsCard = ({ news }) => {
  return (
    <div className="">
      <Image
        src={`/images/news/${news.image}`}
        alt={news.title}
        height={100}
        width={100}
        className="w-48 h-44 object-cover"
        priority
      />
      <h1 className="my-2 text-lg font-sans font-medium">{news.title}</h1>
      <p className="text-sm font-light">{news.content}</p>
    </div>
  );
};

export default NewsCard;
