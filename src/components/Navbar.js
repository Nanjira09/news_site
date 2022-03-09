const Navbar = ({ search, handleSearch, handleForm }) => {
  const handleSearchChange = (e) => {
    handleSearch(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm();
    // console.log(search);
  };
  return (
    <div className="flex justify-around content-center p-2 border-b-2">
      <h2 className="font-semibold text-lg tracking-wide">LatestNews</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Any topic i.e covid..."
            className="border-2 p-1 rounded-full text-xs"
            value={search}
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
