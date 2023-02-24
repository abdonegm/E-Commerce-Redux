import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {MdStarRate} from "react-icons/md";
import {ADD, DELETE} from "../../../controller/actions";
import { useDispatch } from 'react-redux';
import { REMOVE_IT } from '../../../controller/actions';




import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";

const Details = () => {
const [data,setData]=useState([]);
const getdata=useSelector((state)=>state.cartReducer.carts);
const {id} =useParams();

const compare=()=>{
    let compardeta=getdata.filter((e)=>{
        return e.id == id
    })
    console.log(compardeta);
    console.log(id)
    setData(compardeta);
}

useEffect(()=>{
    compare()
},[id])

const dispath=useDispatch();
const increment=(e)=>{
     dispath(ADD(e))
}

const decrement=(e)=>{
  dispath(REMOVE_IT(e))
}

let navigate = useNavigate();;

const deletes=(ell)=>{
  dispath(DELETE(ell));
  navigate("/")

}

  return (
    <>
    <article>
        <section className='details'>
            <h2 className='details_title'>
                Product Details Page
            </h2>
            {data.map((item)=>(
                   <div className="details_content">
                    <div className='details_content_img'>
                        <img src={item.cover} alt="Fd"/>
                    </div>
                    <div className='details_content_detail'>
                        <h1>{item.title}</h1>
                        <div className='rating'>
                            <MdStarRate />
                            <MdStarRate />
                            <MdStarRate />
                            <MdStarRate />
                            <label>(1 customer review)</label>

                        </div>
                        <h3>${item.price * item.qty}</h3>
                        <p>{item.author}</p>
                        <div className='qty'>
                            <div className='count'>
                                <button onClick={()=> increment(item)}>
                                    <AiOutlinePlus />
                                </button>
                                <span>{item.qty}</span>
                                <button >
                                    <AiOutlineMinus onClick={item.qty <=1 ? ()=> deletes(item.id):()=> decrement(item)}/>
                                </button>
                            </div>
                            <button className='button'>Add To Cart</button>
                        </div>
                        <div className='desc'>
                            <h4>PRODUCTS DESCRIPTION</h4>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                                Facere quae quis fugit nam expedit
                                a animi sunt corporis iusto nemo blanditiis minima,
                                rerum amet dolore aliquam placeat asperiores libero quos saepe?
                           </p>
                           <h4>PRODUCT DETAILS</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quasi, earum nihil assumenda vero totam adipisci est id labore maxime rerum, nobis quo dicta ipsum facere eum, aliquam provident officia.</p>

                        </div>
                    </div>
                   </div>
                ))
            }

        </section>
    </article>
    </>
  )
}

export default Details
