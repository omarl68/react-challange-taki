import { useState } from "react";
import { useEffect } from "react";
import Cards from "./Cards";
import Loading from "./Loading";
import Create from "./create";
const Home = () => {
  const [isPending, setIsPending] = useState(true);
  const [products, setProducts] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/product")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          return setProducts(data);
        });
    }, 500);
  }, []);
  console.log(products);

  return (
    <div className="home">
      <div className="title">
        <h1>
          Taki<span className="takiacademy">Academy</span>
        </h1>
        <p>Il y a {products?.length} martiéres</p>
      </div>
      {isPending && <Loading />}

      <div className="display">
        {products && <Cards products={products}></Cards>}
        <Create></Create>
      </div>
    </div>
  );
};

export default Home;
