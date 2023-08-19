import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components/Card";

const createList = () => {
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(i);
  }
  return list;
};

const Home: React.FC = () => {
  const list = createList();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen!</Text>
      <FlatList data={list} keyExtractor={(item) => String(item)} renderItem={({ item }) => <Card />} />
    </SafeAreaView>
  );
};

export { Home };
