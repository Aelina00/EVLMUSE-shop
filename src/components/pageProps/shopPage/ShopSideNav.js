import React from "react";
import "./Layout.css";
import CategoryList from "./CategoryList/CategoryList";

export default function ShopSideNav(props) {
  return (
    <>
      <div className="container">
        <div className="Layout flex w-full flex flex-col gap-6">
          <aside>
            <CategoryList />
          </aside>
          <main>{props.children}</main>
        </div>
      </div>
    </>
  )
}