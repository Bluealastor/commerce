import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3"];

export const Sidebar = (props) => {
  const [current, setCurrent] = useState("");
  const [categories, setCategories] = useState(mock);

  const getData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/categories/?key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();

    const updated = ["everything"].concat(data);
    setCategories(updated);
  };

  /**
   * useEffect(callback, []) === callback da eseguire appena il
   * componente è aggiunto alla pagina (tipo DOMContentLoaded ma
   * solo per il componente)
   *
   * useEffect è molto simile a un addEventListener
   */
  useEffect(() => {
    getData();
  }, []);

  const clicked = (event, category) => {
    event.preventDefault();
    // console.log(category);
    props.catSelection(category);
    setCurrent(category);
  };

  return (
    <aside className="bg-teal-300  max-h-300">
      <h2 className="text-3xl font-bold underline">Categories</h2>
      <ul className="flex flex-col text-lg text-3xl gap-x-1 text-emerald-900">

        {categories.map((item, index) => (
          <li className="max-h-max text-gray-900" 
          key={index}>
            <a
              href={item}
              className={item === current ? "active" : ""}
              onClick={(event) => clicked(event, item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
