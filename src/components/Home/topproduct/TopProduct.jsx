import React from 'react';
import Heading from '../../Common/Heading';
import {topProducts} from "../../assets/data/data";
import { useState } from 'react';
import ProductItem from '../product/ProductItem';

const TopProduct = () => {
    const [data,setdata]=useState(topProducts);
    const allcategories=["all",...new Set(data.map((item)=> item.category))];
    const [catogrey,setcatogery]=useState(allcategories);
    const handelFilter=(cat)=>{
        const newitems=topProducts.filter((items)=> items.category === cat);
        setdata(newitems);
        if(cat === "all"){
            setdata(topProducts);
            return
        }
       

    }
  return (
    <>
    <section className='topproduct'>
        <div className='container'>
            <div className='head'>
             <Heading title="Top Selling Products" desc="Meet newbies! The latest templetes uploaded to the marketplace." />
             <div className='category'>
                {catogrey.map((el)=>(
                    <button className='button' onClick={()=> handelFilter(el)}>{el}</button>
                ))}
             </div>
            </div>

        </div>
        <ProductItem data={data} />
    </section>
    </>
  )
}

export default TopProduct
