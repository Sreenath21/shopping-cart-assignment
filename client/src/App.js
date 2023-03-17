import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";

import Header from "./components/Header/Header";
import SignIn from "./containers/Auth/SignIn";
import Register from "./containers/Auth/Register";
import Cart from "./containers/Cart/Cart";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index loader={() => redirect("/home")} />
        <Route path="login" element={<SignIn />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

const Root = () => {
  return (
    <div className="parent-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
