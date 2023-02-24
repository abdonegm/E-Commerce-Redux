import React from 'react';
import { useState } from 'react';
import {BiSearch} from "react-icons/bi";
import SearchItems from './SearchItems';

const Hero = () => {
    const [value,setvalue]=useState("");
    const [show,setshow]=useState(false);
    const onChange=(e)=>{
        setvalue(e.target.value);
    }
    const onSearch=(key)=>{
        setvalue(key);
        if(value === ""){
            setshow(false)
        }else{
            setshow(!show)

        }
       
     
    }


  return (
    <>
    <section className="hero">
        <div className='container'>
            <h1>
                <label>Over <span>6,500</span>curated Design</label><br/>
                <label>Resources,<span>Grephic & Website</span>Templates</label>
            </h1>
            <p>High-quality Design Themes for personal or commerical use contains 6k+ items in 100 categories.</p>
            <div className='search'>
                <span>All categories</span>
                <hr />
                <input type="text" placeholder='search products....' onChange={onChange} value={value}/>
                <button onClick={()=> onSearch(value)}>
                    <BiSearch className='searchIcon heIcon' />

                </button>
            </div>
            <SearchItems value={value} show={show}/>
            <p>Example: Mockup,icon,stocks,web theme...</p>
        </div>
    </section>
    </>
  )
}

export default Hero
