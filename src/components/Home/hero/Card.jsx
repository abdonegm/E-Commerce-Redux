import React from 'react';
import {hero} from "../../assets/data/data";

const Card = () => {
    console.log(hero);
  return (
    <>
    <section className='cards'>
        {hero.map((item)=>{
          
            return(
             <div className='card' key={item.id}>
                <div className='left'>
                    <img src={item.cover} alt="them" />
                </div>
                <div className='right'>
                    <h4>{item.name}</h4>
                    <p>{item.items} items</p>
                </div>


            </div>)
        })}


    </section>
    </>
  )
}

export default Card
