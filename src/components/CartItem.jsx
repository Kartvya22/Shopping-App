import React from 'react'
import { RiDeleteBin2Line} from "react-icons/ri"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

function CartItem({item,itemIndex}) {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart")
    }
  return (
    <div className='w-full my-8 flex justify-center items-center mx-auto'>
        <div className='w-full flex  justify-center items-center gap-16 border-b-2 border-black pb-8 max-sm:flex-col max-sm:gap-4 max-sm:w-[90vw] max-sm:mx-auto'>
            <div className='w-[30%] flex justify-center items-center mx-auto'>
                <img src={item.image} alt="item"  className='min-w-[200px] h-[200px]' />
            </div>
            <div className='w-[60%] flex flex-col justify-center items-start gap-4 max-sm:w-[100%]'>
                <h1 className='font-semibold text-slate-900 text-xl'>{item.title} </h1>
                <h1 className='text-black text-opacity-75'>{item.description.split(" ").slice(0,15).join(" ")}... </h1>
                <div className='w-full flex justify-between items-center'>
                    <p className='text-lg font-bold text-green-600'>${item.price} </p>
                    <div onClick={removeFromCart} className='mr-4 mb-2 text-xl px-2 py-2 border-[2px] border-slate-950  rounded-full md:hover:bg-slate-950 md:hover:scale-110 md:hover:text-white transition-all duration-200 ease-in'>
                        <RiDeleteBin2Line /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem