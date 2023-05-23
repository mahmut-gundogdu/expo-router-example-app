import React from "react";
import { useRouter, useSegments } from "expo-router";


export function useRouteGuard(user) {
    const segments = useSegments();
    const router = useRouter();
    const redirect = (path) => router.replace(path);

    React.useEffect(() => {
      const groupName = segments[0];
      const inAuthGroup = groupName === "(auth)";
  
      if(!user && !inAuthGroup) {
        redirect("/login")
      }
      if(user && inAuthGroup) {
        redirect("/")
      }
    }, [user, segments]);
  }

  export default useRouteGuard;