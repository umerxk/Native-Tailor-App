import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { appThemeColor } from "../common/style";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header({ status }) {
  return (
    <View style={styles.mainBody}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 40, color: "#fff", marginTop: 300 }}>
          Tailor App
        </Text>
        <Ionicons
          name={"trophy-outline"}
          size={40}
          color={"#fff"}
          style={{ marginLeft: 20, marginTop: 310 }}
        />
      </View>
      <Text style={styles.infotext}>All customers in one app !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    backgroundColor: appThemeColor,
    height: 450,
    marginTop: -260,
    borderWidth: 1,
    borderColor: appThemeColor,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  infotext: {
    marginTop: 10,
    color: "lightgray",
    alignSelf: "center",
  },
  status: {
    marginTop: 37,
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
  },
});
