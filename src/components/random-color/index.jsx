/* eslint-disable no-unused-vars */
import { useState } from "react"



export default function RandomColor(){

const [typeOfColor, setTypeOfColor] = useState('hex');
const [color, setColor] = useState("#000000");

function handleRandomHexColor(){
    //hex nums-a array la store pananum
    const hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
}

function handleRandomRgbColor(){

}
    return (
    <div 
    style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color,
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button> 
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={() => typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}>Generate random color</button>
    </div>
    )
}