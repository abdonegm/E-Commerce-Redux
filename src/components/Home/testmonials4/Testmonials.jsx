import React from 'react';
import Heading from '../../Common/Heading';
import {customer} from "../../assets/data/data";
import {ImQuotesRight} from "react-icons/im";

const Testmonials = () => {
  return (
   <>
   <section className='customer'>
   <Heading title="Choose The Plans" desc="Meet newbies! The latest templetes uploaded to the marketplace." />
   <div className='content'>
    {customer.map((items)=>{
   return(
    <div className='card'>

        <button><ImQuotesRight /></button>
        <p>"{items.desc}"</p>
        <h3>{items.name}</h3>
        <span>{items.post}</span>
        </div>
   )
    })}
   </div>
   </section>
   </>
  )
}

export default Testmonials
