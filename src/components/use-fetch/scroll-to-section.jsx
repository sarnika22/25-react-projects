import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();
  const data = [
    {
      label: "First card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "violet",
      },
    },
    {
      label: "Second card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "indigo",
      },
    },
    {
      label: "Third card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "blue",
      },
    },
    {
      label: "Fourth card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "green",
      },
    },
    {
      label: "Fifth card",
      style: {
        width: "100%",
        height: "600px",
        backgroundColor: "yellow",
      },
    },
  ];

  function handleScrolltoSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1>Scroll to particular section</h1>
      <button onClick={handleScrolltoSection}>CLick to Scroll </button>
      {data.map((dataItem, index) => (
        <div ref={index === 4 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
