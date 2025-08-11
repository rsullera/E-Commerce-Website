import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./pages/Admin";
import ProductDetails from "./pages/ProductDetails";

import Cart from "./pages/Cart";
import Order from "./pages/Orders/Order";
import CheckOut from "./pages/CheckOut";

import Users from "./pages/admin/Users";
import CreateUser from "./pages/admin/CreateUser";
import UpdateUser from "./pages/admin/UpdateUser";

import Products from "./pages/products/Products";
import CreateProducts from "./pages/products/CreateProducts";
import UpdateProducts from "./pages/products/UpdateProducts";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("api/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        } catch (err) {
          setError("Failed to fetch user data");
          localStorage.removeItem("token");
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <Router>
      <AppContent user={user} setUser={setUser} error={error} />
    </Router>
  );
}

function AppContent({ user, setUser, error }) {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route path="/" element={<Home user={user} error={error} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/productdetails" element={<ProductDetails />} />

        {/* Admin page without Navbar/Footer */}
        <Route path="/admin" element={<Admin user={user} setUser={setUser} />}>
          <Route index element={<Users />} />
          <Route path="create" element={<CreateUser />} />
          <Route path="update/:id" element={<UpdateUser />} />
          <Route path="products" element={<Products />} />
          <Route path="products/create" element={<CreateProducts />} />
          <Route path="products/update/:id" element={<UpdateProducts />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
