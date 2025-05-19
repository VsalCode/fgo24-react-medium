import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ArticleDetail from "./pages/ArticleDetail";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/article/:username/:slug",
        element: <ArticleDetail />,
      },
    ],
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
