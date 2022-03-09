import moment from "moment";
const Banner = ({ article }) => {
  // console.log(article);
  return (
    <div
      style={{
        backgroundImage: `url(${
          article.urlToImage ??
          "https://www.scienceeurope.org/media/nrip1wlk/default-news.jpg?anchor=center&mode=crop&rnd=132082687448000000&width=590&height=358"
        })`,
      }}
      className="w-full h-3/6 bg-cover bg-center flex flex-col justify-center overflow-hidden"
    >
      <div className="w-3/6 bg-slate-50 p-1 opacity-70 rounded-md ml-2">
        <h2 className="font-semibold text-lg">{article.title}</h2>
        <p className="text-sm">{article.description}</p>
        <br />
        <p className="flex flex-col text-sm">
          <span className="truncate">{article.author}</span>
          <span>{moment(article.publishedAt).format("MMMM Do YYYY")}</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
