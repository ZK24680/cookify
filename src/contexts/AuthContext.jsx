import { createContext, useContext } from "react";
import useUser from "../authentication/useUser";
import FullPageSpinner from "../components/FullPageSpinner";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { data: user, isLoading, error } = useUser();

  const userID = user?.id;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: user?.role === "authenticated",
        userID,
        email: user?.email,
        isLoading,
        fullName: user?.user_metadata?.fullName,
        avatar: user?.user_metadata?.avatar,
      }}
    >
      {isLoading ? <FullPageSpinner /> : children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("Using Context outside of Auth provider");

  return context;
}

export { AuthProvider, useAuth };
