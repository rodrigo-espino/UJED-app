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

export const FS21 = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { fs1Id, setFs1Id } = useFS1();
  const [dataF2_2, setDataF2_2] = useState([]);
  const [dataF2_3, setDataF2_3] = useState([]);
  const navigation = useNavigation();
  const [ID, setID] = useState(0);
  const getIDFS2 = async () => {
    const res = await getItembyId("FES2", ["*"], "FEST1_ID", fs1Id);
    if (res && res.length > 0) {
      const value = res[0]["id"];
      console.log("value", value);
      setID(value); // Actualizará el ID y disparará un nuevo efecto si ID ha cambiado
    }
  };

  const getDataFS2_2 = async (id) => {
    const resFS2_2 = await getItembyId("FES2_TR", ["*"], "FES2_ID", id);
    setDataF2_2(resFS2_2);
  };

  const getDataFS2_3 = async (id) => {
    const res = await getItembyId("FES2_3", ["*"], "FEST2_ID", id);
    setDataF2_3(res);
  };

  const onRefresh2 = useCallback(async () => {
    setRefreshing(true);
    if (ID) {
      await getDataFS2_2(ID);
    }
    setRefreshing(false);
  }, [ID]); // Ahora ID es una dependencia

  const onRefresh3 = useCallback(async () => {
    setRefreshing(true);
    if (ID) {
      await getDataFS2_3(ID);
    }
    setRefreshing(false);
  }, [ID]); // Ahora ID es una dependencia

  useEffect(() => {
    const init = async () => {
      await CreateFS_Connected("FES2", fs1Id, "?");
      await getIDFS2();
    };
    init();
  }, [fs1Id]); // Se ejecuta solo cuando fs1Id cambia

  useEffect(() => {
    if (ID !== null) {
      // Asegúrese de que ID no sea null antes de llamar a getDataFS2_2
      getDataFS2_2(ID);
      getDataFS2_3(ID);
    }
  }, [ID]); // Se ejecuta cada vez que ID cambia y no es null

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FS22", { FS2: ID, ID: item.id })}
      >
        <View style={styles.itemContainer}>
          <Text style={[styles.textBase]}>{`TR ${item.TR}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem3 = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FS23", { FS2: ID, ID: item.id })}
      >
        <View style={styles.itemContainer}>
          <View style={styles.row}>
            {/* Primera columna */}
            <View style={styles.column}>
              <Text style={styles.textBase}>{`TR ${item.TR}`}</Text>
              <Text style={styles.textBase}>{`SSP ${item.SSP}`}</Text>
            </View>

            {/* Segunda columna */}
            <View style={styles.column}>
              <Text style={styles.textBase}>{`DAP ${item.DAP}`}</Text>
              <Text style={styles.textBase}>{`PDR ${item.PDR}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Layout>
      {/* <ScrollView nestedScrollEnabled={false}> */}
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginVertical: 10,
            textAlign: "center",
          }}
        >
          Tipos de Combustible se miden sobre los ultimos 5 m del TR
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("FS22", { FS2: ID })}
        >
          <Ionicons name="create-outline" size={30} color="black" />
        </TouchableOpacity>

        <FlatList
          style={{ width: "100%", height: 300 }}
          data={dataF2_2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh2} />
          }
        />

        <View
          style={{
            borderBottomColor: "grey", // Color de la línea
            borderBottomWidth: 1, // Grosor de la línea
            marginTop: 10, // Margen superior (opcional)
            marginBottom: 25, // Margen inferior (opcional)
          }}
        ></View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginVertical: 10,
            textAlign: "center",
          }}
        >
          Tipos de Combustible de 1000 hr (DAP >7.5 cm) se miden sobre los 15 m
          del TR
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("FS23", { FS2: ID })}
        >
          <Ionicons name="create-outline" size={30} color="black" />
        </TouchableOpacity>
        <FlatList
          style={{ width: "100%", height: 500 }}
          data={dataF2_3}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem3}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh3} />
          }
        />
      </View>
      {/* </ScrollView> */}
    </Layout>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#1e293b",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    width: 355,
    alignItems: "stretch",
  },
  textBase: {
    color: "#ffffff",
    marginVertical: 4,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignItems: "flex-end",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  columnCard: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
