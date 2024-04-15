import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Layout } from "../components/Layout";
import { Ionicons } from "@expo/vector-icons";
import { useFS1 } from "../components/FS1Context";
import { CreateFS_Connected, getItembyId } from "../components/LocalDB/DB";

export const FS4_1 = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { fs1Id, setFs1Id } = useFS1();
  const [dataF2_2, setDataF2_2] = useState([]);
  const [dataF2_3, setDataF2_3] = useState([]);
  
  const [ID, setID] = useState(0);
  
  const navigation = useNavigation();

  const renderItem = () => {    
    return (
      <View style={styles.itemContainer}>
        <Text style={[styles.textBase]}>ID subsitio</Text>
        <Text style={[styles.textBase]}>No.</Text>
        <Text style={[styles.textBase]}>Genero</Text>
      </View>
    );
  };


  const getIDFS4 = async () => {
    const res = await getItembyId("FES4", ["*"], "FEST1_ID", fs1Id);
    if (res && res.length > 0) {
      const value = res[0]["id"];
      console.log("value", value);
      setID(value); // Actualizará el ID y disparará un nuevo efecto si ID ha cambiado
    }
  };

  useEffect(  () => {

    const init = async () => {
    await CreateFS_Connected("FES4", fs1Id, "?");
      await getIDFS4();
    }
    init();
  }, []);
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FS4_2", {FS4: ID})}>
        <Ionicons name="create-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text>Continuar y Guardar</Text>
      </TouchableOpacity>

      <FlatList
        style={{ width: "100%" }}
        // data={data}
        //keyExtractor={item => item.id} // Asegúrate de que tus objetos en JSON tengan una propiedad única que pueda servir como key
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#1e293b",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "stretch",
  },
  textBase: {
    color: "#ffffff",
    marginVertical: 4,
  },
});
