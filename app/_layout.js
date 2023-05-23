import { Slot } from "expo-router";

import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
 

export function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Slot></Slot>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "gray",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  

export default Layout;
