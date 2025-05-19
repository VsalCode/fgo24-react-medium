import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const [article, setArticle] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.username);
        const usernameParams = params.username.split('').slice(1).join('')
        console.log(usernameParams);
        
        const result = data.filter(item => item.username.includes(usernameParams))
        // console.log(result);

        setArticle(result)
      });
  }, []);

  return (
    <main>
      <Navbar />
      <section className="mt-25 flex items-center justify-center">
        {article.map((item) => (
          <div key={item.id} className="w-200 shadow p-7 flex flex-col gap-7">
            <div className="border-b pb-10">
              <h1 className="text-5xl pb-5 font-semibold">{item.title}</h1>
              <h2 className="text-xl">By {item.username}</h2>
            </div>
            <div className="mt-7">
              <img src={item.banner} alt="" />
            </div>
            <div>
              {item.body}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ArticleDetail;
