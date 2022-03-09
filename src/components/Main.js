import Paper from "./Paper";

const Main = ({ articles }) => {
  return (
    <div className="mt-2 p-2">
      <h2 className="font-semibold text-md m-1">Latest articles</h2>
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-5 lg:gap-4">
        {articles.map((article, index) => (
          <Paper key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Main;
