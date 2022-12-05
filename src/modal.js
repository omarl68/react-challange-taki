const Modal = ({ product, setIsOpen, setDeleteProduct }) => {
  const handleClick = () => {
    setDeleteProduct((prev) => {
      prev = prev.filter((item) => item?.id !== product?.id);
      return prev;
    });
    fetch("http://localhost:8000/product/" + product.id, {
      method: "DELETE",
    });
  };
  return (
    <div className="modal-container" id="modal_container">
      <div className="modal">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button className="delete" onClick={handleClick}>
          Supprimer
        </button>
        <button className="close" onClick={setIsOpen}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
