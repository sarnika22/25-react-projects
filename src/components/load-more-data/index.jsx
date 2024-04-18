/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */

import { useState } from "react";


//infinite cloning
export default function LoadMore(){
    
    const [loadingState, setloading] =  useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0); {/*count how many times clicking */}
    
    
    async function fetchProducts(){
        try {
            
        
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);

            const result = await response.json();
            console.log(result);
        } catch (e) {
            console.log(e.message);
        }
    }

    // eslint-disable-next-line no-undef
    useEffect(() => {
        fetchProducts()
    },[])
}