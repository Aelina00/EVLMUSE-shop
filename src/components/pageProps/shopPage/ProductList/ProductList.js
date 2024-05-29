import { useContext, useState } from "react";
import "./ProductList.css";
import { AppContext } from "../../../../App";
import { Link } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import Product from "../../../home/Products/Product";
import Pagination from "../../shopPage/Pagination"

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);
  const output = products.filter(product => product.category === category.id)
    .map(product => (
      <div key={product.id} className="product">
         <Product
          key={product.id}
          _id={product.id}
          productName={product.name}
          img={product.picture}
          badge={product.badge}
          price={product.price}
          color={product.color}
        />
        <br />

        {/* <div className="actions">

          <span>${product.price}</span>
          <AddToCart product={product} />
        </div> */}
        <DeleteProduct product={product} />
      </div>
    ));

     const [itemsPerPage, setItemsPerPage] = useState(48);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="ProductList">
      
      {output}

      <AddProduct category={category} />
      <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
        </div>
    </div>
  )
}