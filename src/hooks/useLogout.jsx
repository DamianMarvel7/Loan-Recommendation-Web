import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storafe
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("tokenCore");
    sessionStorage.removeItem("tokenDiet");
    sessionStorage.removeItem("tokenGym");

    // dispatch
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
