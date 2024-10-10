import { createContext, useContext, useState } from "react";

// B1: Tạo context
const AuthContext = createContext();

// B2: Tạo Provider

function AuthProvider(props) {
  const [user, setUser] = useState({
    username: 1,
    fullName: "Lương Văn Linh",
    email: "evondev@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

// B3: Tạo hook useAuth

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used with AuthProvider");

  return context;
}

export { useAuth, AuthProvider };
