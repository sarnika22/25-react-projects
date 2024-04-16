/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";



export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleRandomHexColor() {
        //hex nums-a array la store pananum
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor); 
    }

    function handleRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeOfColor === 'hex') handleRandomHexColor();
        else handleRandomRgbColor();
    }, [typeOfColor]);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: color,
            }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
            <button onClick={ typeOfColor === 'hex' 
            ? handleRandomHexColor 
            : handleRandomRgbColor}>
                Generate random color
            </button>
            <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "60px",
                  marginTop: "50px",
                  flexDirection: "column",
                  gap: "20px ",
            }}>
                <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
                    <h1>{color}</h1>
            </div>
        </div>
    );
}