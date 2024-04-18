/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */

import { useState, useEffect } from "react";
import "./styles.css";

//infinite cloning
export default function LoadMore() {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  {
    /*count how many times clicking */
  }

  async function fetchProducts() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setloading(false);
      }
    } catch (e) {
      console.log(e.message);
      setloading(false);
    }
  }

  // eslint-disable-next-line no-undef
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= 100) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          disabled={disableButton}
          className="button-container"
          onClick={() => setCount(count + 1)}
        >
          Load more products
        </button>
        {disableButton ? <p>No more products to load</p> : null}
      </div>
    </div>
  );
}
