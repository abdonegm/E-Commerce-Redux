import React from 'react';
import Hero from './hero/Hero';
import Card from './hero/Card';
import Product from './product/Product';
import Banner from './banner/Banner';
import TopProduct from './topproduct/TopProduct';
import Price from './Price/Price';
import Testmonials from './testmonials4/Testmonials';
import { Blog } from './blog/Blog';

const Home = () => {
  return (
    <>
    <Hero />
    <Card />
    <Product />
    <Banner />
    <TopProduct />
    <Price />
    <Testmonials />
    <Blog />
    </>
  )
}

export default Home
