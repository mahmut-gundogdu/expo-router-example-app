import { Slot } from "expo-router";

 import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "../auth-context";

export function Layout() {
  return (
    <>
      <AuthProvider>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Slot></Slot>
        </View>
      </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: "center",
    justifyContent: "center",
  },
});

export default Layout;
