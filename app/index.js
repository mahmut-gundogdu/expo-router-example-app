import { Text, Button } from "react-native";
import { useAuth } from "../auth-context";

export default function App() {
  const { signOut } = useAuth();
  const handleClick = () => signOut();
  return (
    <>
      <Text>Welcome to Authenticated page</Text>
      <Button onPress={handleClick} title="Sign-out" />
    </>
  );
}
