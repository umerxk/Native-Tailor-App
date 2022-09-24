import * as React from "react";
import TopHeader from "../../paper/AppBar";
import { View, Text } from "react-native";
import { Drawer, DataTable } from "react-native-paper";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import { appThemeColor } from "../../common/style";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function EachUser({ navigation, route }) {
  const { data } = route.params;

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
    setVisible(false);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const edit = () => {
    navigation.navigate("EditUser", {
      data,
    });
  };

  const del = () => {};

  return (
    <>
      <TopHeader
        title={data.name}
        subtitle="Details"
        goBackVisible={true}
        goBack={goBack}
        showSearch={false}
        navigation={navigation}
      />
      <Provider>
        <View style={{ marginTop: 0, backgroundColor: "#333333", padding: 20}}>
          <Drawer.Item
            style={{ backgroundColor: "gray", borderRadius: 20, borderColor: 'gray', marginTop: 40 }}
            icon="human"
            label={(<Text style={{ color: 'white' }}>{data.name} - {data.updatedAt}</Text>)}
          />
          <View style={{ marginTop: 40 }} />

          <DataTable>
            <DataTable.Header>
              <DataTable.Title textStyle={{ fontSize: 20 }}>Unit</DataTable.Title>
              <DataTable.Title numeric textStyle={{ fontSize: 20 }}>Size</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Waist</DataTable.Cell>
              <DataTable.Cell numeric>{data.waist}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Shoulder</DataTable.Cell>
              <DataTable.Cell numeric>{data.shoulder}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 50,
            }}
          >
            <Ionicons
              name={"create-outline"}
              size={40}
              color={appThemeColor}
              style={{ marginLeft: 20, marginTop: 3 }}
              onPress={edit}
            />

            <Ionicons
              name={"trash-outline"}
              size={40}
              color={"#DB403F"}
              style={{ marginLeft: 20, marginTop: 3 }}
              onPress={showDialog}
            />
          </View>
        </View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Warning</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Are you sure you want to delete this user ?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => setVisible(false)}
                style={{
                  backgroundColor: "#f7f7f7",
                  borderWidth: 2,
                  borderColor: "#f7f7f7",
                  borderRadius: 10,
                  width: 90,
                  marginRight: 10,
                }}
              >
                <Text style={{ color: "#333" }}>No</Text>
              </Button>
              <Button
                onPress={del}
                style={{ backgroundColor: "red", width: 90 }}
              >
                <Text style={{ color: "#fff" }}>Delete</Text>
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    </>
  );
}
