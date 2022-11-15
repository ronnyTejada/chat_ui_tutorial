import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Contact from "../../components/contactWrapper/Contact";
import Search from "../../components/inputSearch/Search";
import { users } from "../../utils/Constants";

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flex: 1,
  },
});

const ListContact = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.listContainer}>
      <Search value={search} onChange={(e) => setSearch(e)} />
      <ScrollView>
        {users
          .filter((item) => item.name.includes(search))
          .map((user) => {
            return (
              <Contact
                key={user.id}
                name={user.name}
                msg={user.msg}
                time={user.time}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default ListContact;
