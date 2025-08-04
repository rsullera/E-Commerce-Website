import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import Login from "./Login"; // Fix imports for components
import Register from "./Register";

function Home({ user, error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-6 rounded-md shadow-md">
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        {user ? (
          <div>
            WELCOME KUPAL,{" "}
            <h2 className="text-2xl font-bold mb-2">{user.username}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-2">welcome!</h2>
            <p>Please login or register</p>
            <div>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
