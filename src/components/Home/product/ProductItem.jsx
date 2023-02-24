import React from 'react';
import { useState } from 'react';
import {FiShoppingBag} from "react-icons/fi";
import {BiSearch} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { ADD } from '../../../controller/actions';
import {useDispatch} from "react-redux"

const ProductItem = ({data}) => {
  const [openimage,setopenimage]=useState(false);
const [image,setimage]=useState("");

const onOpenimage=(src)=>{
    setimage(src);
    setopenimage(true)
}

const dispatch=useDispatch();
const addtoCart=(e)=>{
    dispatch(ADD(e))
}

  return (
   <>
    <div className="product_items">
        {data.map((item)=>{


            return(
            <>
            <div className='box' key={item.id}>
                <div className='img'>
                 <img src={item.cover} alt="pro"/>
               
         
          <div className="overlay">
            <button className='button'>
                <FiShoppingBag onClick={()=> addtoCart(item)}/>
            </button>
            <button className='button'>
                <BiSearch onClick={()=>onOpenimage(item.cover)}/>
            </button>
            <button className='button'>
                <AiOutlineHeart />
            </button>
          </div>
         </div>
         <div className='details'>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <h4>Price : ${item.price}</h4>
         </div>
         </div>
            </>
        )})}
    </div>


    <div className={openimage ?"modelOpen":"modelClose"}>
        <div className='onClickImage'>
            <img src={image} alt="sdf" />
            <button className='button' onClick={()=> setopenimage(false)}>
                 <AiOutlineCloseCircle className='heIcon'/>
            </button>

            
        </div>
    </div>
   </>
  )
}

export default ProductItem;
