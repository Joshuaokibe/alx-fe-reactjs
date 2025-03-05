import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore(state => state.recipes);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return <p>Recipe not found.</p>;

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipeId, title, description });
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
