import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  { 
    path:"/",
    element: <Layout/>,
    children: [
      { 
        path:"/",
        element: <Home/>
      },
      { 
        path:"/products/:?",
        element: <Products/>
      },
      { 
        path:"/product/:id",
        element: <Product/>
      },
    ]
  }
  
])

const App = () => {
  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  );
};

export default App;