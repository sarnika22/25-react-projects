/* eslint-disable no-unreachable */


//infinite cloning
export default function LoadMore(){
    return <div className="container">
    const [loadingState, setloading] =  useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0); {/*count how many times clicking */}
    </div>
    
    async function fetchProducts(){
        try {
            
            // eslint-disable-next-line no-unused-vars
            const response = await fetch( `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            
        } catch (e) {
            console.log(e.message);
        }
    }

    // eslint-disable-next-line no-undef
    useEffect(() => {
        fetchProducts()
    },[])
}