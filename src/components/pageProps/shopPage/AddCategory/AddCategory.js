import { useContext, useState } from "react";
import { addDoc } from "firebase/firestore";
import { categoryCollection } from "../../../../firebase";
import { AppContext } from "../../../../App";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  background-color: #f8f8f2; // Бежевый цвет фона
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 0.75rem;
// Светло-серая рамка

  outline: none;
  font-size: 0.875rem; // 14px
  font-family: 'Helvetica Neue', sans-serif;
  color: #333; // Темно-серый цвет текста

  &:focus {
    border-color: #a6a69d; // Светло-коричневая рамка при фокусе
    box-shadow: 0 0 0 2px rgba(166, 166, 157, 0.2); // Светло-коричневая тень при фокусе
  }
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

export default function AddCategory() {
  const [category, setCategory] = useState("");
  const { user } = useContext(AppContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!user || !user.isAdmin) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = category.trim();
    if (name.length < 5) {
      alert("Please provide a category name with minimum length of 5 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      const slug = name.replaceAll(" ", "-").toLowerCase();
      await addDoc(categoryCollection, { name, slug });
      setCategory("");
    } catch (error) {
      console.log("Failed to add category:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Category name"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <StyledButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "+"}
      </StyledButton>
    </StyledForm>
  );
}