import { useContext, useState } from "react";
import { AppContext } from "../../../../App";
import { productsCollection, uploadProductPhoto } from "../../../../firebase";
import { addDoc } from "firebase/firestore";

export default function AddProduct({ category }) {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!user || !user.isAdmin) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!picture) {
      alert("Please upload a picture");
      return;
    }

    setIsSubmitting(true);

    try {
      const pictureUrl = await uploadProductPhoto(picture);
      const slug = name.replaceAll(" ", "-").toLowerCase();
      await addDoc(productsCollection, {
        category: category.id,
        name,
        price: Number(price),
        picture: pictureUrl,
        description,
        slug,
      });

      setName("");
      setPrice(0.0);
      setPicture(null);
      setDescription("");
    } catch (error) {
      console.log("Failed to add product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create a new product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
            min={0}
            step="any"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="picture" className="block font-medium mb-1">
            Picture
          </label>
          <input
            type="file"
            id="picture"
            onChange={(e) => setPicture(e.target.files[0])}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}