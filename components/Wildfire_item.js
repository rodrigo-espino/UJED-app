import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useFS1, useFS0 } from "../components/FS1Context";

export const Wildfire_item = ({ info }) => {
  
  const { fs0Id, setFs0Id } = useFS0();

    const navigate = () => {
      setFs0Id(info.CVE_INC);
      navigation.navigate("FS1_data", { id: info.CVE_INC });

    }


  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FORM", {
            screen: "FS1_data",
            params: {
              id: info.CVE_INC,
            },
          });
        }}
      >
        <Text style={[styles.textBase, { fontSize: "25" }]}>
          {info.CVE_INC}
        </Text>
        <Text style={[styles.textBase]}>Alias: {info.Alias}</Text>
      </TouchableOpacity>
      <View style={[styles.container]}>
        <AntDesign name="export" size={24} color="white" />
        
        <TouchableOpacity onPress={()=> navigation.navigate("FS0", {id: info.CVE_INC})}>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>

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
    flexDirection: "row", // Alinea hijos horizontalmente
    justifyContent: "space-between", // Distribuye espacio alrededor de los elementos
  },
});
