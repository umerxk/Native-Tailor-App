import * as React from "react";
import {
  TextInput,
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
} from "react-native-paper";
import { View } from "react-native";
import TopHeader from "../../paper/AppBar";
import { appThemeColor } from "../../common/style";

const EditUser = ({ navigation, route }) => {
  const { data } = route.params;

  const [text, setText] = React.useState("");

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
    setVisible(false);
    goBack();
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <TopHeader
        title={"user name"}
        subtitle="Home"
        goBackVisible={true}
        goBack={goBack}
        showSearch={false}
        navigation={navigation}
      />
      <Provider>
        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
          <TextInput
            label="User Name"
            value={data.name}
            onChangeText={(text) => setText(text)}
            mode="outlined"
          />
          <View style={{ marginTop: 20 }} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              label="Waist"
              value={data.waist}
              onChangeText={(text) => setText(text)}
              mode="outlined"
              style={{ width: "48%" }}
            />

            <TextInput
              label="Shoulder"
              value={data.shoulder}
              onChangeText={(text) => setText(text)}
              mode="outlined"
              style={{ width: "48%" }}
            />
          </View>
          <Button
            icon="account-edit"
            mode="contained"
            onPress={showDialog}
            style={{
              marginTop: 50,
              width: "70%",
              alignSelf: "center",
              backgroundColor: appThemeColor,
            }}
          >
            Edit size
          </Button>

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Success</Dialog.Title>
              <Dialog.Content>
                <Paragraph>User Updated</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  onPress={hideDialog}
                  style={{ backgroundColor: appThemeColor }}
                >
                  Done
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    </>
  );
};
export default EditUser;
