import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";
import useRemoveSaved from "../recipes/useRemoveSaved";
import useAddToSave from "../recipes/useAddToSave";

function ButtonGroup({ isSaved, recipe }) {
  const { isAuthenticated, userID } = useAuth();
  const { unSave, isRemoving } = useRemoveSaved();
  const { save, isSaving } = useAddToSave();

  const navigate = useNavigate();

  const condition = isRemoving || isSaving;

  function addToSaved() {
    const meal = {
      user_id: userID,
      idMeal: recipe?.idMeal,
      strMeal: recipe?.strMeal,
      strMealThumb: recipe?.strMealThumb,
    };

    save(meal);
  }

  function removeFromSaved() {
    unSave(recipe.idMeal);
  }

  return (
    <div className="sticky top-0 mb-3 flex justify-between border-b border-[var(--border-color)] bg-[var(--secondary-background-color)] py-5">
      <Button
        disabled={condition}
        type="primary"
        onClick={() => navigate(-1, { replace: true })}
      >
        Back
      </Button>

      {isAuthenticated && (
        <Button
          type={isSaved ? "danger" : "primary"}
          disabled={condition}
          onClick={() => (!isSaved ? addToSaved() : removeFromSaved())}
        >
          {isSaved ? "Unsave" : "Save"}
        </Button>
      )}
    </div>
  );
}

export default ButtonGroup;
