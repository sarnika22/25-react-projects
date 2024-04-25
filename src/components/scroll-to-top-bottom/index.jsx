import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  function handleScrollTopAndBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const bottomRef = useRef(null);

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error occured! try again</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom feature</h1>
      <h3>This is Top section</h3>
      <button onClick={handleScrollTopAndBottom}>Scroll to bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((Item) => <li>{Item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollTop}>scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is bottom section</h3>
    </div>
  );
}
