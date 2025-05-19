import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";

const Homepage = () => {
  const nav = useNavigate();
  const [article, setArticle] = useState([]);
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setArticle(data);
    };
    fetchData();
  }, []);

  function HandleSearch(value) {
    const { query: e } = value;
    // console.log(e);
    if (e === "") {
      window.location.reload();
      return;
    }
    setSearchParams(e);
    const result = article.filter((item) => item.title.toLowerCase().includes(e.toLowerCase()));
    setArticle(result);
  }

  return (
    <>
      <section className="flex flex-col gap-5 pb-30 mt-30">
        <form onSubmit={handleSubmit(HandleSearch)} className="flex bg-[#e9e8e8] px-5 rounded-full w-full po">
          <input defaultValue={query} {...register("query")} className="outli ne-none grow py-2 font-semibold text-black" type="text" placeholder="Search Article..." />
          <button type="submit">
            <IoSearch />
          </button>
        </form>
        {article.map((item) => (
          <div onClick={() => nav(`/article/@${item.username}/${item.title.split(" ").join("-")}`)} key={item.id} className="border-b border-b-gray-700 h-fit grid grid-cols-2 px-7 py-5 w-full max-w-200 cursor-pointer">
            <div className="flex flex-col justify-between items-start gap-5">
              <p>By @{item.username}</p>
              <p className="text-2xl font-bold">{item.title}</p>
              <p className="text-clip">{item.body.slice(0, 100)}.....</p>
            </div>
            <div className="flex justify-end items-center">
              <img className="w-70" src={item.banner} alt={item.title} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Homepage;
