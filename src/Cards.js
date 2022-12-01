import { useState } from "react";
import Modal from "./modal";

const Cards = ({ products }) => {
  /*   console.log("card", products);
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
open?.addEventListener('click',()=>{
    modal_container.classList.add('show')
}) 
close?.addEventListener('click',()=>{
    modal_container.classList.add('show')
})  */
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cards">
      {products.map((product) => (
        <div
          className="card"
          key={product.id}
          onClick={() => setIsOpen(true)}
          id="open"
        >
          <h2>{product.title}</h2>
          <p>{product.body}</p>
        </div>
      ))}
  {/*     <Modal
        products={products}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></Modal> */}
    </div>
  );
};

export default Cards;
