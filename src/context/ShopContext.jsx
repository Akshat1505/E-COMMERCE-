import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { useSearchParams } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({children})=>{
const  currency = '$';
const delivery_fee = 10;
const [search , setSearch] = useState('');
const [showSearch , setShowSearch] = useState(false);
const [cartItems,setcartItems] = useState({});

    const addToCart = async (itemId,size)=>{
        let cartData = structuredClone(cartItems);

        if(cartData(itemId)){
            if(cartData[cartItems][size]){
                cartData[cartItems][size]++;
            }else{
                cartData[cartItems][size] = 1;
            }
        }
    }

    const value = {
        products , currency , delivery_fee,
        search,setSearch,showSearch,setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;