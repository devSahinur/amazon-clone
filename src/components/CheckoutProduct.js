import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({item}) {
    const {id, title, price, rating, description, category, image, hasPrime,} = item;

    const dispatch = useDispatch();

    const addItemToCart =() =>{
        const product = {
            id, 
            title, 
            price, 
            rating, 
            description, 
            category, 
            image, 
            hasPrime,
        };

        // Push item into redux 
        dispatch(addToBasket(product));
    }

    const removeItemFromCart =() =>{
        // Remove item from redux
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className='grid grid-cols-5 '>
           <Image src={image} height={200} width={200} objectFit='contain' />

           {/* Middle */}
           <div className='col-span-3 mx-5'>
               <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i)=>(
                        <StarIcon key={i} className='h-5 text-yellow-500'/>
                    ))}
                </div>
                <p className='text-xs my-2 line-clamp-3' >{description}</p>

                <Currency quantity={price} currency='BDT' />

                {hasPrime && (
                    <div className='flex items-center space-x-2 -mt-5'>
                        <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
                )}
           </div>

           {/* Right add/ Remove Button */}
           <div className="flex flex-col space-y-2 my-auto justify-items-end">
                <button onClick={addItemToCart} className='button'>Add to Cart</button>
                <button onClick={removeItemFromCart} className='button'>Remove to Cart</button>
           </div>
        </div>
    )
}

export default CheckoutProduct
