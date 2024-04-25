import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity,  FlatList, RefreshControl, StyleSheet } from "react-native";
import { Layout } from "../components/Layout";
import { BottomMenu } from "../components/BottomMenu";
import { useNavigation } from "@react-navigation/native";
import { getItems, truncateTable, eliminarBaseDeDatos, initializeDatabase } from "../components/LocalDB/DB";
import { useFS1, useFS0 } from "../components/FS1Context";
import { AntDesign } from "@expo/vector-icons";
const HomeScreen = () => {
  const navigation = useNavigation();

  const { fs0Id, setFs0Id } = useFS0();

  const navigate = () => {
    setFs0Id(info.CVE_INC);
    navigation.navigate("FS1_data", { id: info.CVE_INC });

  }

  const [Data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    const res = await getItems("FES0", ["*"]);
    setData(res);
    console.log(res);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  }, []);


  const renderItem = ({ item }) => {
   return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FS1_data",{
              id: item.CVE_INC,
            },
          );
        }}
      >
        <Text style={[styles.textBase, { fontSize: "25" }]}>
          {item.CVE_INC}
        </Text>
        <Text style={[styles.textBase]}>Alias: {item.Alias}</Text>
      </TouchableOpacity>
      <View style={[styles.container]}>
        <AntDesign name="export" size={24} color="white" />
        
        <TouchableOpacity onPress={()=> navigation.navigate("FS0", {id: item.CVE_INC})}>
          <AntDesign name="edit" size={24} color="white" />
        </TouchableOpacity>

        <AntDesign name="delete" size={24} color="white" />
      </View>
    </View>
   )
  };


  const deleteInfo = () => {
    eliminarBaseDeDatos()
    console.log("delete");
  };

  useEffect(() => {
    initializeDatabase()
    getData();
  }, []);


  return (
    <Layout>
      <TextInput placeholder="Buscar..." clearButtonMode="while-editing" />

      <View>
        <TouchableOpacity onPress={deleteInfo}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{width: '100%'}}
        data={Data}
        keyExtractor={(item) => item.CVE_INC} // Asegúrate de que tus objetos en JSON tengan una propiedad única que pueda servir como key
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
      <BottomMenu onNavigate={() => navigation.navigate('FS0')} />
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
export default HomeScreen;
