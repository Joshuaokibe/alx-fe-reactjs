import { useRecipeStore } from '../store/recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore(state => state.recipes);
  
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => navigate(`/edit/${recipeId}`)}>Edit</button>
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

export default RecipeDetails;
