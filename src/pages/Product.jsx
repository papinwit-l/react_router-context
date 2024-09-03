import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState({});
  const params = useParams();

  const fetchData = async () => {
    const resp = await fetch(`http://dummyjson.com/products/${params.id}`);
    const data = await resp.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
