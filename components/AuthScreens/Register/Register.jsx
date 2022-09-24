import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../Header";
import { appThemeColor } from "../../common/style";
import { TextInput, Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Register({ navigation }) {
  const valids = {
    cellError: false,
    pwdError: false
  }
  const [cellNumber, setCellNumber] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(valids);
  const [hidePwd, setHidePwd] = useState(true);
  const reqCellLen = 11;
  const reqPwdLen = 8;

  const handleNext = () => {
    if (cellNumber.length !== reqCellLen) {
      setError({
        ...error,
        cellError: true
      });
      return;
    }
    if(pwd.length < reqPwdLen){
      setError({
        ...error,
        pwdError: true
      });
      return;
    }
     else {
      navigation.navigate("get-otp", { cellNumber });
    }
  };

  const handleInput = (e, name) => {
    if(name === 'cell'){
      setCellNumber(e);
    }else{
      setPwd(e)
    }
    setError(false);
  };

  return (
    <View style={styles.mainBody}>
      <Header status={"Sign Up"} />

      <View style={{ marginTop: 60, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, color: "#333" }}>
          Create a new account
        </Text>

        <TextInput
          label="Mobile Number"
          value={cellNumber}
          onChangeText={(text) => handleInput(text, 'cell')}
          mode="outlined"
          keyboardType="numeric"
          right={<TextInput.Icon name="cellphone-iphone" />}
          activeOutlineColor="#333"
          outlineColor="lightgray"
          style={{ marginTop: 15, backgroundColor: '#fff' }}
          error={error.cellError}
        />

        <TextInput
          label="8 Digits Password"
          value={pwd}
          onChangeText={(text) => handleInput(text, 'pwd')}
          mode="outlined"
          right={<TextInput.Icon name={ hidePwd ? "eye" : "eye-off-outline"} onPress={()=>setHidePwd(prev => !prev)} />}
          activeOutlineColor="#333"
          outlineColor= {"lightgray"}
          style={{ marginTop: 15, backgroundColor: '#fff' }}
          error={error.pwdError}
          secureTextEntry={hidePwd}
        />
        <Text style={{ fontSize: 12, color: "gray", marginTop: 10 }}>
          By proceeding, you will get code through a SMS message on above phone
          number. Enter that code in next screen
        </Text>

        <View style={{ marginTop: 20 }} />
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
          onPress={handleNext}
        >
          NEXT
        </Button>
      </View>
      <Text
        onPress={() => navigation.navigate("login-user")}
        style={{ alignSelf: "center", marginTop: 27, fontSize: 15 }}
      >
        Already have an account ? Login
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
