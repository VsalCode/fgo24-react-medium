import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ArticleDetail from './pages/ArticleDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>  
  },
  {
    path: '/article/:username/:slug',
    element: <ArticleDetail/>
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App