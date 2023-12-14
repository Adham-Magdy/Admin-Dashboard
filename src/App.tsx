
import {  RouterProvider } from 'react-router-dom'
import { router } from './constants/handlerFunctions';

function App() {

  //  // function to handle structure of layout
  // const Layout = () => {
  //   return (
  //     <div className='main'>
  //       <Navbar />
  //       <div className='container'>
  //         <div className='menu-container'>
  //           <Menu/>
  //         </div>
  //         <div className='main-container'>
  //           <Outlet/>
  //         </div>

  //       </div>

  //       <Footer/>
  //     </div>
  //   )
  // }; // end function

  // // browser router function to route between different pages
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //        {
  //     path: "/",
  //     element:
  //       <Home />,
  //   },
  //   {
  //     path: "users",
  //     element: <Users />,
  //   },
  //   {
  //     path: "products",
  //     element: <Products />,
  //   }
  //     ],
  //   }
  // ]); // end function

 

  return (
    <>
      {/* router provider for routes elements */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
