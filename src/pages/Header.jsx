import React, { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  const location = useLocation();
  const params = useParams();
  console.log(location);
  console.log(params);
  return (
    <div className="flex bg-pink-300 justify-between h-[60px] items-end">
      <div>
        <img src={user?.image} alt={user?.lastName} className="w-[60px]" />
      </div>
      <nav className="flex gap-3 text-xl">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        {user ? <></> : <Link to="login">Login</Link>}
        <Link to="product/1">Product</Link>
        {user ? <button onClick={() => setUser(null)}>Logout</button> : <></>}
      </nav>
    </div>
  );
}
