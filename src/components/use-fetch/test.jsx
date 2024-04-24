import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, loading);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading ? <h1>Loading! Please wait</h1> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
