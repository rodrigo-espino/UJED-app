import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet, 
  RefreshControl
} from "react-native";
import { Layout } from "../components/Layout";
import { BottomMenu } from "../components/BottomMenu";
import { useNavigation } from "@react-navigation/native";
import {
  getItembyId,
  getItems
} from "../components/LocalDB/DB";

import { useFS0 } from "../components/FS1Context";

export const FS1_data = ({ route }) => {
  const navigation = useNavigation();
  const [Data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { fs0Id, setFs0Id } = useFS0();

  const getData = async () => {
    // const res = await getItembyId("FES1", ["*"], "FES0_ID", route.params.id);
    const res = await getItems('FES1', ['*'])
    setData(res);
    console.log(res);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    const init = async () => {
      await getData()
    }
    init()
    setFs0Id(route.params.id);
    
  }, []);

  const renderItem = ({ info }) => {
    console.log("INFO: ", info)
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FORM", {
              screen: "FS1",
              params: {
                id: info.CVE_INC,
              },
            });
          }}
        >
          <Text style={[styles.textBase, { textAlign: "right" }]}>
            {info.Fecha} - {info.Hr_Inicio}
          </Text>
          <Text style={[styles.textBase]}>Responsable: {info.responsable}</Text>
          <Text style={[styles.textBase, { fontSize: "25" }]}>
            {info.CVE_INC}
          </Text>
          <Text style={[styles.textBase]}>
            CoordX: {info.CoordX}, CoordY: {info.CoordY}, Altitud:{info.Altitud}
          </Text>
          <Text style={[styles.textBase]}>
            {info.Estado} - {info.Municipio}
          </Text>
        </TouchableOpacity>
        <View style={[styles.container]}>
          <AntDesign name="export" size={24} color="white" />
          <AntDesign name="delete" size={24} color="white" />
        </View>
      </View>
    );
  };

  return (
    <Layout>
      <TextInput placeholder="Buscar..." clearButtonMode="while-editing" />

      
      <FlatList
        style={{ width: "100%" }}
        data={Data}
        keyExtractor={(item) => item.CVE_INC} // Asegúrate de que tus objetos en JSON tengan una propiedad única que pueda servir como key
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <BottomMenu onNavigate={() => navigation.navigate('FORM', {
      screen: 'FS1'})} />
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
  },
  textBase: {
    color: "#ffffff",
    marginVertical: 4,
  },
  container: {
    marginTop: 10,
    flexDirection: "row", // Alinea hijos horizontalmente
    justifyContent: "space-between", // Distribuye espacio alrededor de los elementos
  },
});
