import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="flex items-center justify-between">
            <NavLink
              to={`/categories/${category.slug}`}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              {category.name}
            </NavLink>
            <DeleteCategory category={category} />
          </li>
        ))}
      </ul>
      <AddCategory />
    </div>
  );
}