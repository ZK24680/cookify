import { useNavigate } from "react-router-dom";
import Button from "./Button";

function SavedButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/recipes/saved", { replace: true })}>
      Saved
    </Button>
  );
}

export default SavedButton;
