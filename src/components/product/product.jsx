export const Product = (props) => {
  const name = props.name || "Product name";
  const price = props.price || 100;
  const image = props.image || "";

  return (
    <article className="border-4 border-green-800 bg-green-50 ">
      <img src={image} alt={name} />
      <p className="bg-green-50">Prezzo: {price}€</p>
     <h4 className="p-4 bg-green-50 ">{name}</h4> 
    </article>
  );
};
