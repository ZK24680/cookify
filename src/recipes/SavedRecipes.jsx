import { useAuth } from "../contexts/AuthContext";
import RecipesShowCase from "./RecipesShowCase";

import Message from "../components/Message";

function SavedRecipes() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated ? (
        <Message
          message={`🧑‍🍳 You need to sign in to your account to access your saved recipes. 🧑‍🍳`}
        />
      ) : (
        <RecipesShowCase category={"saved"} />
      )}
    </>
  );
}

export default SavedRecipes;
