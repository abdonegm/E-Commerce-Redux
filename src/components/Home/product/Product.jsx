import React from 'react';
import { useState } from 'react';
import Heading from "../../Common/Heading";
import {products} from "../../assets/data/data";
import ProductItem from './ProductItem';

const Product = () => {
    
    const [data,setdata]=useState(products); 
  return (
   <>
    <section className='product'>
        <div className="container">
        <Heading title="Treading Products" desc="check the hotest design of the week,tjese rising stars are worth your attention" />
        </div>
        <ProductItem data={data} />
    </section>
   </>
  )
}

export default Product
