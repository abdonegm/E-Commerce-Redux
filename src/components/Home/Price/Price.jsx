import React from 'react';
import Heading from '../../Common/Heading';
import {price} from "../../assets/data/data";

const Price = () => {
  return (
    <>
     <section className='price'>
        <Heading title="Choose Our Plans" desc="Meet newbies! The latest templetes uploaded to the marketplace." />
        <div className='content'>
            {price.map((item)=>(
                <div className='box'>
                    <h3>{item.name}</h3>
                    <h1>
                        <span>$</span>
                        {item.price}
                        <label>/user per month</label>

                    </h1>
                    <p>{item.desc}</p>
                    <button className='button'>GET STARTED</button>
                    <ul>
                    {item.list.map((list)=>(
                         <li><i>{list.icon}</i>
                         <span>{list.para}</span>
                         </li>
                      
                    ))} 
                    </ul>



                    </div>
            ))}
            
        </div>
     </section>
    </>
  )
}

export default Price
