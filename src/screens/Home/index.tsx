import React from "react";
import { FlatList, SafeAreaView, Text, View, ViewToken } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components/Card";
import { useSharedValue } from "react-native-reanimated";

const createList = () => {
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(i);
  }
  return list;
};

const Home: React.FC = () => {
  const list = createList();
  const viewableList = useSharedValue<ViewToken[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen!</Text>
      <FlatList
        data={list}
        style={{
          width: "100%",
          padding: 30,
        }}
        onViewableItemsChanged={(info) => {
          viewableList.value = info.viewableItems;
        }}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Card index={item} viewableItems={viewableList} />}
      />
    </SafeAreaView>
  );
};

export { Home };
