import React from 'react';
import { useState } from 'react';
import {products} from "../../assets/data/data";
import {FiShoppingBag} from "react-icons/fi";
import {BiSearch} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineCloseCircle} from "react-icons/ai";

const SearchItems = ({value,show}) => {
  console.log(value);
    const filteritem=products.filter((item)=> item.category.includes(value));
    console.log(filteritem);
    const [openimage,setopenimage]=useState(false);
    const [image,setimage]=useState("");
    
    const onOpenimage=(src)=>{
        setimage(src);
        setopenimage(true)
    }
   
  return (
    <>
   {show && <div>
       <div className="product_items">
        {filteritem.map((item)=>{


            return(
            <>
            <div className='box' key={item.id}>
                <div className='img'>
                 <img src={item.cover} alt="pro"/>
               
         
          <div className="overlay">
            <button className='button'>
                <FiShoppingBag />
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

      
    </div>
}
</>)
}

export default SearchItems
