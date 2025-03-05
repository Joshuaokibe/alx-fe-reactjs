import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add setRecipes function
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, { id: Date.now(), ...recipe }]
  })),

  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),

  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
}));
