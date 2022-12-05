import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = ({ setProducts, products }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);

  const notify = () => toast("matiere a ajouté!");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = {
      id: products.length + 1,
      title,
      body,
      description,
    };
    setIsPending(true);
    /*   setProducts((prev) => {
      return prev.push(blog);
    }); */
   setProducts([...products, blog]); 
    /* setProducts(()=>{return products.push(blog);}) */
    fetch("http://localhost:8000/product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new card added");
      setTitle("");
      setDescription("");
      setBody("");
      setIsPending(false);
    });
  };
  return (
    <div className="create">
      <h2>Ajouter une matiére</h2>
      <form onSubmit={handleSubmit}>
        <label> nom :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>sous titre</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {!isPending && (
          <button className="btn" onClick={notify}>
            Ajouter
          </button>
        )}
        <ToastContainer />
        {isPending && (
          <button disabled className="btn">
            Ajout card ...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
