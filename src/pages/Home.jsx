import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();
  const hdlSubmit = (e) => {
    e.preventDefault();
    navigate("/product/" + productId);
  };
  return (
    <div className="mt-4">
      <form onSubmit={hdlSubmit}>
        <label>
          Product id:
          <input
            className="border"
            value={productId}
            onChange={(e) => {
              setProductId(e.target.value);
            }}
          />
        </label>
        <button className="bg-lime-200 p-2">Search</button>
      </form>
      {user ? <h1>Hello, {user.firstName}</h1> : <></>}
    </div>
  );
}

export default Home;
