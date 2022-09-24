import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../Header";
import { appThemeColor } from "../../common/style";
import { TextInput, Button } from "react-native-paper";
import { LoginUser } from "../../common/ApiLayer/AddUser";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [hidePwd, setHidePwd] = useState(true);

  const handleLogin = () => {
    const data = { name, pwd };
    const response = LoginUser(data);
    console.log(data);
  };

  return (
    <View style={styles.mainBody}>
      <Header status={"Login"} />

      <View style={{ marginTop: 60, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, color: "#333" }}>Sign In</Text>
        <TextInput
          label="Mobile Number"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          keyboardType="numeric"
          right={<TextInput.Icon name="cellphone-iphone" />}
          style={{ backgroundColor: "#fff", marginTop: 15 }}
          activeOutlineColor="#333"
          outlineColor="lightgray"
        />
        <View style={{ marginTop: 20 }} />
        <TextInput
          label="Password"
          value={pwd}
          onChangeText={(text) => setPwd(text)}
          mode="outlined"
          secureTextEntry={hidePwd}
          right={
            <TextInput.Icon
              name={hidePwd ? "eye" : "eye-off-outline"}
              onPress={() => setHidePwd((prev) => !prev)}
            />
          }
          style={{ backgroundColor: "#fff" }}
          activeOutlineColor="#333"
          outlineColor="lightgray"
        />
        <Button
          icon="arrow-right-bold"
          mode="contained"
          style={{
            marginTop: 50,
            width: "90%",
            padding: "2%",
            alignSelf: "center",
            backgroundColor: appThemeColor,
          }}
          onPress={handleLogin}
        >
          LOGINS
        </Button>
      </View>
      <Text
        onPress={() => navigation.navigate("register-user")}
        style={{ alignSelf: "center", marginTop: 27, fontSize: 15 }}
      >
        Create new account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignContent: "center",
  },
});
