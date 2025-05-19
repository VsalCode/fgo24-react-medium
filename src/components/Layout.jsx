import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <main className=" h-fit flex flex-col justify-center items-center">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Layout
