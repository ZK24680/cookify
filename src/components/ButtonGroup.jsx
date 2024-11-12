import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ButtonGroup() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 mb-3 border-b border-[var(--border-color)] bg-[var(--secondary-background-color)] py-5">
      <Button type="primary" onClick={() => navigate(-1, { replace: true })}>
        Back
      </Button>
    </div>
  );
}

export default ButtonGroup;
