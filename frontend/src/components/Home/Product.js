import React from 'react';
import ReactStars from "react-rating-stars-component";

const options = {
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    value:4,
    isHalf:true,
    size : window.innerWidth < 600 ? 20 :25,
}

const Product = ({product}) => {
  return (
    <div className='productCard'>
        <img src={product.attrs.imgs} alt={product.product_name} />
        <p>{product.group.Group_name}</p>
        <p>{product.brand.Brand_name}</p>
        <p>{product.category.name}</p>
        <p>{product.subcategory.Sub_Category_name}</p>
        <div>
            <ReactStars {...options} />
        </div>
        <span>{product.price}</span>
    </div>
  )
}

export default Product

