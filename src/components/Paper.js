import moment from "moment";
const Paper = ({ article }) => {
  return (
    <div className="relative max-w-md border-2 rounded-md shadow-md hover:cursor-pointer hover:scale-105 transition ease-in-out delay-200">
      <img
        src={
          article.urlToImage ??
          "https://www.scienceeurope.org/media/nrip1wlk/default-news.jpg?anchor=center&mode=crop&rnd=132082687448000000&width=590&height=358"
        }
        alt={article.title}
      />
      <div className="p-2">
        <h2 className="font-semibold text-sm">{article.title}</h2>
        <p className="mt-1 mb-1 text-muted truncate">{article.description}</p>
        <p className="flex text-sm italic flex-col">
          <span className="truncate">{article.author}</span>
          <span>{moment(article.publishedAt).format("MMMM Do YYYY")}</span>
        </p>
      </div>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="absolute top-1 right-2 bg-blue-500 text-xs cursor-pointer rounded-full px-1 py-1 text-white"
      >
        Read more
      </a>
    </div>
  );
};

export default Paper;
