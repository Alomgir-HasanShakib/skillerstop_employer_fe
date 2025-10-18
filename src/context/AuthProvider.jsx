import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance/axiosInstance";
import AuthContext from "./AuthContext";

const fetchUser = async (token) => {
  const res = await axiosInstance.get("/candidate/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return typeof res.data === "string" ? { email: res.data } : res.data;
};

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(token),
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  });
  const login = (userData, token) => {
    localStorage.setItem("accessToken", token);
    queryClient.setQueryData(["user"], userData); // user state update
  };

  const verifyEmail = (userData, token) => {
    localStorage.setItem("accessToken", token);
    queryClient.setQueryData(["user"], userData); // user state update
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    queryClient.setQueryData(["user"], null); // ← user কে null করো
    queryClient.invalidateQueries(["user"]); // ← query invalidate করে UI fresh করো
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, logout, verifyEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
