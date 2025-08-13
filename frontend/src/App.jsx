import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import {
  Navbar,
  Home,
  Login,
  Register,
  ProductList,
  Footer,
  Admin,
  ProductDetails,
  Cart,
  Order,
  CheckOut,
  Users,
  CreateUser,
  UpdateUser,
  Products,
  CreateProducts,
  UpdateProducts,
} from "./pages";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <Route
          path="/"
          element={
            user && user.role === "admin" ? (
              <Navigate to="/admin" replace />
            ) : (
              <Home user={user} error={error} />
            )
          }
        />

        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />

        <Route
          path="/admin/*"
          element={
            user && user.role === "admin" ? (
              <Admin user={user} setUser={setUser} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        >
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
