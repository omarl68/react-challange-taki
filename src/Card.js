import React, { useState } from "react";
import Modal from "./modal";

const Card = ({ product ,setDeleteProduct}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div
        className="card"
        key={product.id}
        onClick={() => setIsOpen(!isOpen)}
        id="open"
      >
        <h2>{product.title}</h2>
        <p>{product.body}</p>
      </div>
      {isOpen && (
        <Modal product={product} setDeleteProduct={setDeleteProduct} setIsOpen={() => setIsOpen(!isOpen)}></Modal>
      )}
    </>
  );
};

export default Card;
