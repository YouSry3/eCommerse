import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const ProductDetails = () => {
  const api_url = "http://localhost:9000/products/";
  const [product,setProduct]= useState({});
  const params = useParams();
  console.log(params);
  useEffect(()=>{
    fetch(`${api_url}/${params.productId}`).then((res)=>res.json()
  ).then((product)=> setProduct(product));

  }, []);
  
  return (
    <>
      <Product product={product} showButton={false} />
    </>
  );
}

export default ProductDetails;
