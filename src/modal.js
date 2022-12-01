const Modal = ({products,open,onClose}) => {
  const modal_container = document.getElementById("modal_container");
  const close = document.getElementById("close");
  close?.addEventListener("click", () => {
    modal_container.classList.add("show");
  });
  return (
    <div className="modal-container" id="modal_container">
      {products.map((product) => (
        <div className="modal">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button>delete</button>
          <button id="close">close</button>
        </div>
      ))}
    </div>
  );
};

export default Modal;
