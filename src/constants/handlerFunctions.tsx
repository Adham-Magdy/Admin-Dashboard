import { Outlet, createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Users from "../pages/Users";
import Login from "../pages/Login";
import "../styles/global.scss"


// function to handle structure of layout
  export const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <div className='menu-container'>
            <Menu/>
          </div>
          <div className='main-container'>
            <Outlet/>
          </div>

        </div>

        <Footer/>
      </div>
    )
  }; // end function

  // browser router function to route between different pages
  // eslint-disable-next-line react-refresh/only-export-components
  export const router = createBrowserRouter([
      {
          path: "/",
          element: <Layout />,
          children: [
              {
                  path: "/",
                  element:
                      <Home />,
              },
              {
                  path: "/users",
                  element: <Users />,
              },
              {
                  path: "/products",
                  element: <Products />,
              },
          ],
      },
       {
          path: "/login",
          element:<Login/>
      },
    
  ]); // end function
