import React from 'react';
import { useState } from 'react';
import logo from "../assets/images/logo.png";
import {navlist, price} from "../assets/data/data";
import { Link } from 'react-router-dom';
import {BiSearch} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {RiUser3Fill} from "react-icons/ri";
import {BsBagCheck} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {FaBars} from "react-icons/fa"
import { useSelector } from 'react-redux';
import cart from ".././assets/images/cart.png";
import {AiOutlineDelete} from "react-icons/ai"
import { DELETE } from '../../controller/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {
  const dispatch=useDispatch();

const getdata=useSelector((state)=>state.cartReducer.carts)
console.log(getdata);
  
  window.addEventListener("scroll",function(){
    const header=document.querySelector(".header");
    header.classList.toggle("active",this.window.scrollY >100)
  })

  const [mobile,setmobile]=useState(false);
  const [carlist,setcarlist]=useState(false);
  const [price,setprice]=useState(0);

  const handelclose=()=>{
    setcarlist(null)
  }
  const handelDelete=(ID)=>{
    dispatch(DELETE(ID))
  }

  const totals=()=>{
    let price=0
    getdata.map((e)=>{
      return price=parseFloat(e.price) * e.qty + price
      
    })
    setprice(price);
  };

useEffect(()=>{
  totals()
},[totals])


  return (
   <header className='header'>
    <div className='container'>
      <nav>
        <div className='toggle'>
          <button onClick={()=> setmobile(!mobile )}>
            {mobile ? <AiOutlineClose className='close heIcon' />:<FaBars className='open heIcon' />}
          </button>
        </div>
        <div className='left'>
       <img src={logo} alt="logo" />
        </div>
        <div className='center'>
          <ul className={mobile ? "mobile-nav":'menu'}>
            {navlist.map((el,indx)=>{
              return(
                <li key={indx}><Link to={el.path} >{el.text}</Link></li>
              )
            })}
          </ul>
        </div>
      </nav>
      <div className='right'>
        <div className='right_search'>
        <input type="text" placeholder='Search Products.... ' />
        <BiSearch className='searchIcon heIcon'/>
        </div>
        <div className='right_user'>
          <RiUser3Fill className='userIcon heIcon' />
          <AiOutlineHeart className='userIcon heIcon' />
        </div>
        <div className='right_card'>
          <button className='button' onClick={()=> setcarlist(!carlist)}>
            <BsBagCheck className='shop heIcon' />
            MY CART ({getdata.length})
          </button>
          <div className={carlist?"showCart":"hideCart"}>
           {getdata.length?
           (<section className='details'>
            <div className='details_title'>
              <h3>photo</h3>
              <p>Product Name</p>
            </div>
            {getdata.map((e)=>(
              <div className='details_content'>
                <div className='details_content_img'>
                  <Link to={`/cart/${e.id}`} onClick={handelclose}>
                    <img src={e.cover} alt="dsf" />
                  </Link>
                 

                </div>
                <div className='details_content_detail'>
                    <div className='details_content_detail_price'>
                      <p>{e.title.slice(0,20)}....</p>
                      <p>Price : {e.price}</p>
                      <p>Quantity : {e.qty}</p>

                    </div>
                  </div>
                  <div className='details_content_detail_icon'>
                    <i><AiOutlineDelete onClick={()=> handelDelete(e.id)}/></i>
                  </div>
              </div>
            ))}
            <div className='details_total'>
              <h4>Total: ${price}</h4>
            </div>


           </section>):
           (<div className='empty'>
            <p>Your cart is empty</p>
            <img src={cart} alt="car" />
            </div>)
           }
          </div>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header
