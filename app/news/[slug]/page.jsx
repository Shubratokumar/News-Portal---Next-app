const NewsDetails = ({ params }) => {
  const slug = params.slug;
  return (
    <div className="text-white">
      <h1>News Details</h1>
      <h4>Slug: {slug} </h4>
    </div>
  );
};

export default NewsDetails;
