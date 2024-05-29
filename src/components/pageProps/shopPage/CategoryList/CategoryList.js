import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import styled from "styled-components";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const StyledForm = styled.form`
  margin-top: 1rem;
  width: 100%;
  background-color: #f8f8f2; // Бежевый цвет фона
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;
const StyledButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #d4d4d0; // Светло-серый цвет фона
  color: #333; // Темно-серый цвет текста
  border-radius: 0.25rem;
  font-size: 0.875rem; // 14px
  font-family: 'Helvetica Neue', sans-serif;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a6a69d; // Светло-коричневый цвет фона при наведении
  }

  &:disabled {
    background-color: #e6e6e2; // Светло-бежевый цвет фона при отключении
    color: #999; // Серый цвет текста при отключении
    cursor: not-allowed;
  }
`;



  return (
    <div className="w-full bg-beige rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <StyledForm>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="flex items-center justify-between">
            <NavLink
              to={`/categories/${category.slug}`}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              {category.name}
            </NavLink>
            <StyledButton>
            <DeleteCategory category={category} />
            </StyledButton>
          </li>
        ))}
      </ul>
      </StyledForm>
      <AddCategory />
    </div>
  );
}