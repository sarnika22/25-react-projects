/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [Images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(Images);

  if (errorMsg !== null) {
    return <div>Error Occured! {errorMsg}</div>;
  }
  return <div className="container"></div>;
}
