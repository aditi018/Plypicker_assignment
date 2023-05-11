import React, { Fragment, useEffect } from 'react';
import "./Home.css";
import Product from "./Product";
import Metadata from "../Layout/Metadata";
import {getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";

const Home = () => {

  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.products)

  useEffect(()=>{
    dispatch(getProduct());
  },[dispatch]);


  return (
    <Fragment>
      <Metadata title="Home"/>
        <div className='container' id='container'>
            {products && products.map(product => (
              <Product product={product} />
            ))}
        </div>
    </Fragment>
  )
}

export default Home
