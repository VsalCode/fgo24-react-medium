import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";

const Homepage = () => {
  const nav = useNavigate();
  const [originalArticle, setOriginalArticle] = useState([]);
  const [article, setArticle] = useState([]);
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setOriginalArticle(data);
      setArticle(data);
    };
    fetchData();
  }, []);

  const indexOfLastArticle = currentPage * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArticles = article.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(article.length / itemsPerPage);

  function HandleSearch(value) {
    const { query: e } = value;
    if (e === "") {
      setArticle(originalArticle);
      setSearchParams();
      setCurrentPage(1);
      return;
    }
    
    setSearchParams({ query: e });
    const result = originalArticle.filter((item) =>
      item.title.toLowerCase().includes(e.toLowerCase())
    );
    setArticle(result);
    setCurrentPage(1);
  }

  return (
    <>
      <section className="flex flex-col gap-5 pb-30 mt-30">
        <form onSubmit={handleSubmit(HandleSearch)} className="flex bg-[#e9e8e8] px-5 rounded-full w-full po">
          <input
            defaultValue={query}
            {...register("query")}
            className="outline-none grow py-2 font-semibold text-black"
            type="text"
            placeholder="Search Article..."
          />
          <button type="submit">
            <IoSearch />
          </button>
        </form>

        {currentArticles.length === 0 ? (
          <div className="h-[40vh] flex justify-center items-center">
            <p className="font-semibold text-2xl text-center py-5">No articles found</p>
          </div>
        ) : (
          currentArticles.map((item) => (
            <div
              onClick={() => nav(`/article/@${item.username}/${item.title.split(" ").join("-")}`)}
              key={item.id}
              className="border-b border-b-gray-700 h-fit grid grid-cols-2 px-7 py-5 w-full max-w-220 cursor-pointer"
            >
              <div className="flex flex-col justify-between items-start gap-5">
                <p>By @{item.username}</p>
                <p className="text-2xl font-bold">{item.title}</p>
                <p className="text-clip">{item.body.slice(0, 100)}.....</p>
              </div>
              <div className="flex justify-end items-center">
                <img className="w-70" src={item.banner} alt={item.title} />
              </div>
            </div>
          ))
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 py-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded cursor-pointer ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black text-white"
              }`}
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded cursor-pointer ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black text-white"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Homepage;