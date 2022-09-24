import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TopHeader from "../paper/AppBar";
import { List, Divider, FAB } from "react-native-paper";
export default function UserDetails({ route, navigation }) {
  const { userData } = route.params;
  const { linkedAccounts } = userData;
  const goBack = () => {
    navigation.goBack();
  };
  const details = (data) => {
    navigation.navigate("EachUser", {
      data,
    });
  };

  const edit = (e) => {
    e.stopPropagation();
    alert("edit");
  };

  const handleNewUser = () => {
    let data = {
      name: userData.name,
      number: userData.number
    }
    navigation.navigate("add-user", {
      data,
    });
  }

  return (
    <>
      <TopHeader
        title={userData?.name}
        subtitle={userData?.number}
        goBackVisible={true}
        goBack={goBack}
        showSearch={false}
        navigation={navigation}
      />
      <View>
        <Text style={{ padding: 20, fontSize: 20 }}>
          3 Users linked with this account
        </Text>
        <Divider />
        {linkedAccounts?.map((item, index) => (
          <View key={index}>
            <List.Item
              onPress={() => details(item)}
              title={item.name}
              description={item.createdAt}
              left={(props) => <List.Icon {...props} icon="account-details" />}
              right={(props) => (
                <>
                  <View onPress={edit}>
                    <List.Icon
                      {...props}
                      icon="eye"
                      color="#333"
                    />
                  </View>

                  {/* <List.Icon {...props} icon="delete" color="#333" /> */}
                </>
              )}
            />
            <Divider key={index + "1"} />
          </View>
        ))}
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={handleNewUser}
      />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    // top: 0,
    right: 0,
    bottom: 0,
    margin: 26,
  },
});
