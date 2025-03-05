import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(parseInt(recipeId));
    navigate('/');
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;