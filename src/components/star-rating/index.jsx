/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0); //intial state before click 0
    const [hover, setHover] = useState(0); //while hovering some style should be shown & initial state 0

    function handleClick(getCurrentIndex) {
        {
            /* get the current index when star clicked */
        }
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }
    function handleMouseLeave() {
        setHover(rating); //leave wherer selected
    }

    return (
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1; //index incremented from 0
                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                );
            })}
        </div>
    );
}
