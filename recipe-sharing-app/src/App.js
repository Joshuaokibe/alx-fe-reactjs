import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
