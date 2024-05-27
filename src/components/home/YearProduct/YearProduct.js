import React from "react";
import { Link } from "react-router-dom";
import { banner } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full h-full mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <Image
          className="w-full h-full object-cover hidden md:inline-block "
          imgSrc={banner}
        />
      </div>
    </Link>
  );
};

export default YearProduct;
