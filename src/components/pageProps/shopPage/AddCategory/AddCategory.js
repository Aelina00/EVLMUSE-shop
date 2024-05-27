import { useContext, useState } from "react";
import { addDoc } from "firebase/firestore";
import { categoryCollection } from "../../../../firebase";
import { AppContext } from "../../../../App";

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
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        type="text"
        placeholder="Category name"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-400"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="ml-2 px-4 py-2 bg-beige-400 text-gray-700 rounded-md hover:bg-beige-500 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Adding..." : "+"}
      </button>
    </form>
  );
}