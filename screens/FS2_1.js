import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export const FS2_1 = () => {

  const renderItem = () => {
    
    return (
      <View style={styles.itemContainer}>
        <Text style={[styles.textBase]}>TR1</Text>
        <Text style={[styles.textBase]}>TR2</Text>
        <Text style={[styles.textBase]}>TR3</Text>
      </View>
    );
  };

  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate("FS2_2"); // 'Another' es el nombre de la ruta que definiste en tu Stack.Navigator
  };
  
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={goToAnotherScreen}>
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
