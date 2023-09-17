import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import Sidebar from "./Sidebar";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data.slice(0, 4));
      setLoading(true);
    };

    fetchData();
  }, []);

  console.log(products);

  return (
    <div className="home">
      <h1>New products</h1>
      {/*Product id, title , price, image , about*/}
      <div className="home_row">
        <Sidebar />
        {loading ? (
          products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              about={product.description.substring(0, 100)}
              title={product.title.substring(0, 20)}
              price={product.price}
            />
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}

export default Home;
