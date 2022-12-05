import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      description
      
    };
    console.log(blog);
    setIsPending(true);
    fetch("http://localhost:8000/product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new card added");
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
       
        {!isPending && <button className="btn">Ajouter</button>}
        {isPending && <button className="btn">Ajout card ...</button>}
      </form>
    </div>
  );
};

export default Create;
