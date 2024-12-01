import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Message from "../components/Message";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center overflow-scroll bg-[var(--background-color)]">
      <div className="flex items-center gap-4">
        <p>😔 Sorry! Page Not Found</p>
        <Button onClick={() => navigate("/recipes")}>Back to site </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
