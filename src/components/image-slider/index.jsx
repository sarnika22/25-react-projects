/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } 
from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [Images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
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
      console.log(e);
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
  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {Images && Images.length
        ? Images.map((imageItem) => (
            <img
              src={imageItem.download_url}
              alt={imageItem.download_url}
              key={imageItem.id}
              className="current-image"
            />
          ))
        : null}
        <BsArrowRightCircleFill
        className="arrow arrow-right"/>
        <span className="cirlce-indicators">
          {
            Images && Images.length ? 
            Images.map((_,index) => <button
            key = {index}
            className="current-indicator">
            
            </button>
            )
            : null
          }
        </span>
    </div>
  );
}
