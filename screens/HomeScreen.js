import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Wildfire_card } from "../components/Wildfire_card";
import data from "../datos_prueba.json";
import { Layout } from "../components/Layout";
import { BottomMenu } from "../components/BottomMenu";
import { useNavigation } from "@react-navigation/native";
import { getItems, truncateTable } from "../components/LocalDB/DB";
const HomeScreen = () => {
  const navigation = useNavigation();
  
 
  const goToAnotherScreen = () => {
    navigation.navigate('FORM', {
      screen: 'FS1'}); // 'Another' es el nombre de la ruta que definiste en tu Stack.Navigator
  };

  const deleteInfo = () => {
    truncateTable("FES1");
    console.log("delete");
  };
  return (
    <Layout>
      <TextInput placeholder="Buscar..." clearButtonMode="while-editing" />

      <View>
        <TouchableOpacity onPress={deleteInfo}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <Wildfire_card/>
      <BottomMenu onNavigate={goToAnotherScreen} />
    </Layout>
  );
};

export default HomeScreen;
