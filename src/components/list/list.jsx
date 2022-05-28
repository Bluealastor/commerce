import { useState, useEffect } from "react";
import { Product } from "../product/product";

const reduceString = (text, maxChar) => {
  return text.split("").slice(0,maxChar).join("");
}

const mock = [
  {
    id: 0,
    title: "prodotto 1",
    price: 0,
    image: "",
  },
  {
    id: 1,
    title: "prodotto 2",
    price: 0,
    image: "",
  },
  {
    id: 2,
    title: "prodotto 3",
    price: 0,
    image: "",
  },
];

export const List = ({ category, search }) => {
  const [source, setSource] = useState([]);
  const [products, setProducts] = useState(mock);
  // const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/?key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setSource(data);
    setProducts(data);
    // setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);



  useEffect(() => {
    const filtered = source
      .filter((product) => {
        if (category === "everything") {
          return product;
        } else {
          return product.category === category;
        }
      })
      .filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );

    setProducts(filtered);

    // eslint-disable-next-line
  }, [category, search]);

  return (
    <section>
      <ul className=" flex items-stretch grid grid-rows-4 grid-flow-col gap-10 mt-8 ml-3 ">
        {products.map((item) => (
          <li key={item.id} className="justify-center" >
            <Product name={reduceString(item.title, 15)} price={item.price} image={item.image} />
          </li>
        ))}
      </ul>
    </section>
  );
};
