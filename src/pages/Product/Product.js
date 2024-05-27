import React from "react";
import { useMatch } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../components/pageProps/shopPage/AddToCart/AddToCart";
import Product from "../../components/home/Products/Product";

export default function ProductDetails() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);
  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="w-full flex justify-center">
      <Product
        _id={product.id}
        productName={product.name}
        img={product.picture}
        badge={product.badge}
        price={product.price}
        color={product.color}
        description={product.description}
      />
    </div>
  );
}