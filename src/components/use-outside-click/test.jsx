import { useRef, useState } from "react";
import UseOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const ref = useRef();
  //hooks shoul be called on top of the function not from the inside
  UseOutsideClick(ref, () => setSowcontent(false));
  const [showContent, setSowcontent] = useState(false);
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Random Content</h1>
          <p>Please click outside to close, it won't close from inside</p>
        </div>
      ) : (
        <button onClick={() => setSowcontent(true)}>Show Content</button>
      )}
    </div>
  );
}
