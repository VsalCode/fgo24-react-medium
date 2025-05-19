import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  const nav = useNavigate()
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      });
  }, []);

  return (
    <main className=" h-fit flex flex-col justify-center items-center">
      <Navbar/>
      <section className="flex flex-col gap-5 pb-30 mt-20">
        {article.map((item) => (
          <div onClick={() => nav(`/article/@${item.username}/${item.title.split(" ").join("-")}`)}  key={item.id} className="border-b border-b-gray-700 h-fit grid grid-cols-2 px-7 py-5 w-200 cursor-pointer">
            <div className="flex flex-col justify-between items-start ">
              <p className="text-lg font-bold">{item.title}</p>
              <p>By @{item.username}</p>
            </div>
            <div className="flex justify-end items-center">
              <img className="w-50" src={item.banner} alt={item.title} />
            </div>
          </div>
        ))}
      </section>
      <Footer/>
    </main>
  );
};

export default Homepage;
