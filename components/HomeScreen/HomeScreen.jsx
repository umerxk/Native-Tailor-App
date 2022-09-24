import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Avatar, Drawer } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainBody}>
      <View style={{ marginTop: 100 }}>
        <View
          style={{ backgroundColor: "#1999B2", height: 250, marginTop: -100 }}
        >
          <Text
            style={{
              marginTop: 80,
              alignSelf: "center",
              fontSize: 40,
              color: "#fff",
            }}
          >
            Umer sheraz
          </Text>
          <Text
            style={{
              marginTop: 10,
              alignSelf: "center",
              fontSize: 20,
              color: "#fff",
            }}
          >
            <Ionicons
              name={"location-outline"}
              size={20}
              color={"#fff"}
              style={{ marginLeft: 20, marginTop: 3 }}
            />
            Lahore
          </Text>

          <View style={{ alignSelf: "center", marginTop: 25 }}>
            <Avatar.Image
              size={124}
              source={require("../../assets/user.png")}
            />
            <Text style={{ fontSize: 30, color: "#fff", alignSelf: "center" }}>
              My Profile
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 140 }} />

        <Drawer.Item
          style={styles.SectionStyle}
          icon="face-profile"
          label="Umer sheraz"
        />
        <Drawer.Item
          style={styles.SectionStyle}
          icon="cellphone-iphone"
          label="0311-7872746"
        />
        <Drawer.Item
          style={styles.SectionStyle}
          icon="account"
          label="Total clients: 23001"
        />
        <Drawer.Item style={styles.SectionStyle} icon="logout" label="Logout" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: "#333333",
  },
  SectionStyle: {
    backgroundColor: "#f7f7f7",
    borderWidth: 5,
    borderColor: "#f7f7f7",
    borderRadius: 20,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  registerTextStyle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
