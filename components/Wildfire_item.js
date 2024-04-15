import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";


export const Wildfire_item = ({ info }) => {
  const navigation = useNavigation();
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
      <View style={[styles.container]} >
        <AntDesign name="export" size={24} color="white" />
        <AntDesign name="delete" size={24} color="white" />
      </View>
     
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
  container: {
    marginTop: 10,
    flexDirection: 'row', // Alinea hijos horizontalmente
    justifyContent: 'space-between', // Distribuye espacio alrededor de los elementos
  },
});
