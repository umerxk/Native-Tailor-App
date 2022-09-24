import React from "react";
import { ScrollView, View } from "react-native";
import { DataTable, Searchbar } from "react-native-paper";
import TopHeader from "../paper/AppBar";
import userData from "../dummyData";
import { appThemeColor } from "../common/style";

export default function Users({ navigation }) {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(50);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const nextPage = () => {
    alert("hello");
  };

  const details = (userData) => {
    navigation.navigate("UserDetails", { userData });
  };

  const handleSearch = () => {
    alert("search: " + searchQuery);
  };

  return (
    <>
      <TopHeader
        title="All Users"
        subtitle="Home"
        goBackVisible={false}
        navigation={navigation}
      />
      <View style={{ marginHorizontal: 9 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={handleSearch}
          style={{ marginTop: 30 }}
        />

        <ScrollView
          contentContainerStyle={{ paddingBottom: 200, marginTop: 20 }}
        >
          <DataTable>
            <DataTable.Header
              style={{
                backgroundColor: "#0a6070",
                borderWidth: 1,
                borderRadius: 20,
                borderColor: "#0a6070",
              }}
            >
              <DataTable.Title
                style={{ maxWidth: 50 }}
                textStyle={{ fontSize: 22, color: "#fff" }}
              >
                #
              </DataTable.Title>
              <DataTable.Title textStyle={{ fontSize: 22, color: "#fff" }}>
                Name
              </DataTable.Title>
              <DataTable.Title
                style={{ marginLeft: 100 }}
                textStyle={{ fontSize: 22, color: "#fff" }}
              >
                Contact
              </DataTable.Title>
            </DataTable.Header>
            <View style={{ marginTop: 10 }} />
            {userData.map(
              (data, i) =>
                i <= itemsPerPage && (
                  <DataTable.Row
                    key={i}
                    style={{}}
                    onPress={() => details(data)}
                  >
                    <DataTable.Cell>{i + 1}</DataTable.Cell>
                    <DataTable.Cell style={{ marginLeft: -50, minWidth: 100 }}>
                      {data.name}
                    </DataTable.Cell>
                    <DataTable.Cell style={{ marginLeft: 10 }}>
                      {data.number}
                    </DataTable.Cell>
                  </DataTable.Row>
                )
            )}

            <DataTable.Pagination
              page={page}
              onPageChange={nextPage}
              label="1-2 of 6"
            />
          </DataTable>
        </ScrollView>
      </View>
    </>
  );
}
