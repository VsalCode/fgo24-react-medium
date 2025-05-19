import { Outlet } from 'react-router-dom'

const LayoutForm = () => {
  return (
   <main className="sm:bg-sixth bg-white h-fit py-10 flex justify-center items-center flex-col font-sans" >
      <img className="sm:w-50 w-40 sm:mb-3 mb-0" src="/src/assets/logo.png" alt="" />
      <section className="max-w-[500px] w-full bg-white sm:p-10 p-7 rounded-2xl sm:shadow-2xl">
          <Outlet/>
      </section>
   </main>
  )
}

export default LayoutForm
