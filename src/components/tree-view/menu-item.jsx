import { useState } from "react";
import MenuList from "./menu-list";


export default function MenuItem({item}){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel){
        console.log(getCurrentLabel);
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
        });
    }
    
    console.log(displayCurrentChildren);

    return <li>
        <div style={{display: "flex", gap:'20px'}}>
        <p>{item.label}</p>

        {
            item && item.children && item.children.length  ? <span onClick={() => handleToggleChildren()}> + </span> : null
        }
        </div>

        {
            item && item.children && item.children.length > 0
            ? <MenuList list = {item.children}/>
             : null
        }
    </li>
}                                   