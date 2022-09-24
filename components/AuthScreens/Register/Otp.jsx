import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { appThemeColor } from "../../common/style";
import { TextInput, Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import TopHeader from "../../paper/AppBar";

export default function Otp({ navigation, route }) {
  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState(false);
  const reqLength = 4;
  const dispatch = useDispatch();

  const validate = () => {
    const len = otpCode.length;
    if (len !== reqLength) {
      setError(true);
    } else {
      dispatch({ type: "SHOW_TABS", payload: true });
      navigation.navigate("Users");
    }
  };

  const handleChange = (e) => {
    setError(false);
    setOtpCode(e);
  };
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <TopHeader
        title={"Change Mobile Numbers"}
        subtitle=""
        goBackVisible={true}
        showSearch={false}
        goBack={goBack}
        navigation={navigation}
      />
      <View style={styles.mainBody}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: "#333" }}>OTP</Text>
          <Ionicons
            name={"lock-open-outline"}
            size={40}
            color={"#333"}
            style={{ marginLeft: 20, marginTop: 3 }}
          />
        </View>

        <View style={{ marginTop: 60, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 22, color: "#333", lineHeight: 32 }}>
            Enter the 4-digit code sent to you at {route.params?.cellNumber}
          </Text>

          <TextInput
            label="Code"
            value={otpCode}
            onChangeText={(text) => handleChange(text)}
            mode="flat"
            // keyboardType="number-pad"
            keyboardType="name-phone-pad"
            right={<TextInput.Icon name="cellphone-iphone" />}
            outlineColor={"#333"}
            activeOutlineColor={"#333"}
            error={error}
            style={{ marginTop: 15 }}
          />
          <Text style={{ fontSize: 12, color: "lightgray", marginTop: 10 }}>
            By proceeding, you will get code through a SMS message on above
            phone number. Enter that code in next screen
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
            onPress={validate}
          >
            NEXT
          </Button>
        </View>
      </View>
    </>
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
