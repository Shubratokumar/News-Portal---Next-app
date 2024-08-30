
const NewsDetails = ({params}) => {
    const slug = params.slug;
  return (
    <div>
        <h1>News Details Here</h1>
        <h4>Slug: {slug} </h4>
        
    </div>
  )
}

export default NewsDetails