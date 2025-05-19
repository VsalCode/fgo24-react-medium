import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";

const Homepage = () => {
  const nav = useNavigate();
  const [article, setArticle] = useState([]);
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query")

  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("/data.json")        
        const data = await res.json()

        setArticle(data)
      }
      fetchData()
  }, []);

  function HandleSearch(value) {
    const { query: e } = value;
    // console.log(e);

    setSearchParams(e);
    const result = article.filter(item => item.title.toLowerCase().includes(e.toLowerCase()))
    setArticle(result)
  }

  return (
    <main className=" h-fit flex flex-col justify-center items-center">
      <nav className="bg-white fixed top-0 right-0 left-0 flex justify-between items-center px-20 py-5 shadow">
        <div>
          <img className="w-35" src="/src/assets/logo.png" alt="" />
        </div>
        <form onSubmit={handleSubmit(HandleSearch)} className="flex bg-[#F9F9F9] border px-5 rounded-full w-[700]">
          <input defaultValue={query} {...register("query")} className="outline-none grow py-2" type="text" placeholder="Search Article..." />
          <button type="submit">
            <IoSearch />
          </button>
        </form>
        <div className="flex items-center gap-10 font-semibold">
          <Link to="/">Sign In</Link>
          <Link to="/">Sign Up</Link>
        </div>
      </nav>
      <section className="flex flex-col gap-5 pb-30 mt-20">
        { article.map((item) => (
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
      <Footer />
    </main>
  );
};

export default Homepage;
