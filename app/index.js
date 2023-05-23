import { useRouter } from "expo-router";
import { Button, Text } from "react-native";

export default function App() {
  const router = useRouter();
  const handleClick = () => router.push("/login");
  return (
    <>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={handleClick} title="Go to Login Page" />
    </>
  );
}
