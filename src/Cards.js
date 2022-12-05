import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ products }) => {
  const [deleteProduct, setDeleteProduct] = useState(products);
  useEffect(()=>{
    setDeleteProduct(products)
  },[products])
  return (
    <div className="cards">
      {deleteProduct?.map((product) => (
        <Card product={product} setDeleteProduct={setDeleteProduct} />
      ))}
    </div>
  );
};

export default Cards;
