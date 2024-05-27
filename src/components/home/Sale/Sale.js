import React from "react";
import { Link } from "react-router-dom";
import { sellers1 } from "../../../assets/images";
import { sellers2 } from "../../../assets/images";
import { sellers3 } from "../../../assets/images";
import { sellers4 } from "../../../assets/images";
import { sellers5 } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className=" w-[40%] md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center items-center text-black">
        <div className="aspect-w-4 aspect-h-3 w-full mb-4">
          <Image
            className="w-[60%] h-[50%]. object-cover rounded-3xl" // Добавлен класс rounded-3xl для овальных краев
            imgSrc={sellers1}
          />
        </div>
        {/* <div className="text-left h-8 md:h-25 lg:h-25 w-full mx-1 ">
          <div className="mx-6">
            <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold ">
              Imprimante sales
            </h2>
            <p className="text-lg md:text lg:text-xl mb-6">
              Up to{" "}
              <span className="text-1xl md:text-2xl lg:text-2xl font-bold">
                30%
              </span>{" "}
              sales for all impriamnte{" "}
            </p>
            <div className=" mb-3">
              <ShopNow />
            </div>
          </div>
        </div> */}
      </div>

      <div className=" w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-2 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="w-[50%] h-[40%] object-cover rounded-3xl" // Добавлен класс rounded-3xl для овальных краев
              imgSrc={sellers2}
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="w-[50%] h-[40%] object-cover rounded-3xl" // Добавлен класс rounded-3xl для овальных краев
              imgSrc={sellers3}
            />
          </Link>
        </div>
        
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-2 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="w-[50%] h-[40%] object-cover rounded-3xl" // Добавлен класс rounded-3xl для овальных краев
              imgSrc={sellers4}
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="w-[50%] h-[40%] object-cover rounded-3xl" // Добавлен класс rounded-3xl для овальных краев
              imgSrc={sellers5}
            />
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Sale;
