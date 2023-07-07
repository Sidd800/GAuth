// import Navbar3 from "./users/components/Navbar3";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {BrowserRouter,Route, Routes } from "react-router-dom";
import LoginPage from "./users/pages/login_page/loginPage";
import MenuPage from "./users/pages/menu_page/menuPage";
import Home from "./users/pages/home/Home";
import AboutPage from "./users/pages/about_page/aboutPage";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdatePage from "./users/pages/services_page/servicesPage";


const router = createBrowserRouter([
  {

    path: "/",
	element: <LoginPage />,
},
{
	
	path: "/home",
	element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path:"/about",
    element: <AboutPage />
  },
  {
    path: "/services/:id",
    element: <UpdatePage/>
  }
]);
function App() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = "http://localhost/5000/auth/login/success";
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};
  
  return (
    <>
      {/* <Navbar3 />  */}
      { <RouterProvider router={router} /> }
      {/* <div >
			 <BrowserRouter>
			 <Routes>
				<Route
					exact
					path="/"
					// element={user ? <Home user={user} /> : <Navigate to="/login" />}
					component={Home}
				/>
				<Route
					exact
					path="/login"
					// element={user ? <Navigate to="/" /> : <LoginPage />}
					component={LoginPage}
				/>
				{<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>  }
				</Routes>
				</BrowserRouter>
			
		</div> */}
    </>
  );
}

export default App;



