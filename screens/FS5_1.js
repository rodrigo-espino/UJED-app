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

export const FS5_1 = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { fs1Id, setFs1Id } = useFS1();
  const [data, setData] = useState([]);
  const [ID, setID] = useState(0);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FS5_2", { FS5: ID, id: item.id })}
      >
        <View style={styles.itemContainer}>
          <Text style={[styles.textBase]}>No. {item.No}</Text>
          <Text style={[styles.textBase]}>Genero {item.Genero_Especie}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const getIDFS4 = async () => {
    const res = await getItembyId("FES5", ["*"], "FEST1_ID", fs1Id);
    if (res && res.length > 0) {
      const value = res[0]["id"];
      console.log("value", value);
      setID(value); // Actualizará el ID y disparará un nuevo efecto si ID ha cambiado
    }
  };

  const getData = async () => {
    const res = await getItembyId("FES5_2", ["*"], "FES5_ID", ID);
    setData(res);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    if (ID) {
      await getData();
    }
    setRefreshing(false);
  }, [ID]);

  useEffect(() => {
    const init = async () => {
      await CreateFS_Connected("FES5", fs1Id, "?");
      await getIDFS4();
      await getData();
    };
    init();
  }, [ID]);

  return (
    <Layout>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("FS5_2", { FS5: ID })}
        >
          <Ionicons name="create-outline" size={30} color="black" />
        </TouchableOpacity>

        <FlatList
          style={{ width: "100%" }}
          data={data}
          keyExtractor={(item) => item.id} // Asegúrate de que tus objetos en JSON tengan una propiedad única que pueda servir como key
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#1e293b",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "stretch",
    width: 355,
  },
  textBase: {
    color: "#ffffff",
    marginVertical: 4,
    fontSize: 16,
  },
  button: {
    alignItems: "flex-end",
  },
});
