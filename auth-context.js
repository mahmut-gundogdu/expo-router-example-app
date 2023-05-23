import React from "react";
import {useRouteGuard} from "./auth-guard-hook";

const AuthContext = React.createContext(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider(props) {
  const [user, setAuth] = React.useState(null);

  useRouteGuard(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => setAuth({}),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
