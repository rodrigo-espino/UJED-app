import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export const FS4_1 = () => {


  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate("FS2_2"); // 'Another' es el nombre de la ruta que definiste en tu Stack.Navigator
  };
  
  const renderItem = () => {
    return (
      <View style={styles.itemContainer}>
        <Text style={[styles.textBase]}>ID subsitio</Text>
        <Text style={[styles.textBase]}>No.</Text>
        <Text style={[styles.textBase]}>Genero</Text>
      </View>
    );
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={goToAnotherScreen}>
        <Text>Continuar y Guardar</Text>
      </TouchableOpacity>

      <FlatList
        style={{ width: "100%" }}
        data={data}
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
