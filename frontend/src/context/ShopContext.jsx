import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = ({children})=>{
const  currency = '₹';
const delivery_fee = 10;
const [search , setSearch] = useState('');
const [showSearch , setShowSearch] = useState(false);
const [cartItems,setcartItems] = useState({});
const navigate = useNavigate();

    const addToCart = async (itemId,size)=>{

        if (!size) {
                toast.error('Select Product Size!');
                return;
        }
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;

        }
        setcartItems(cartData)
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                        if (cartItems[items][item] > 0) {
                            totalCount += cartItems[items][item];
                        }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    const updateQuant = async (itemId,size,quantity)=>{
            let cartData =  structuredClone(cartItems);

            cartData[itemId][size] = quantity;

            setcartItems(cartData);
    }

    const getCartAmt = ()=>{
        let totalAmt = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmt += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalAmt;
    }

    const value = {
        products , currency , delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart , getCartCount , updateQuant,
        getCartAmt , navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;