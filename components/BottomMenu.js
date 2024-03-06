// BottomMenu.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const BottomMenu = ({ onNavigate }) => {
  return (
    <View style={styles.menuContainer}>
      {/* Aquí agregarías tus botones o iconos para el menú */}
      <TouchableOpacity onPress={onNavigate}>
        <Text >Crear nuevo</Text>
      </TouchableOpacity>
      {/* Repite los botones según sea necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    height: 100, // o la altura que desees
    backgroundColor: '#fff', // o el color de fondo que prefieras
    borderTopWidth: 1, // si quieres un borde superior
    borderColor: '#ccc', // o el color que prefieras
    flexDirection: 'row',
    justifyContent: 'space-around', // esto distribuirá tus botones uniformemente
    alignItems: 'center',
    position: 'absolute', // posicionamiento absoluto
    bottom: 0, // al fondo
    left: 0,
    right: 0
  }
});

