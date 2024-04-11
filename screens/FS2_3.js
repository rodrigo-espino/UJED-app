import { InfoModal } from "../components/InfoModal";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const FS2_2 = () => {
  const showInfoModal = (text) => {
    setInfoText(text);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Tipo</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("TR 1-3")}
            >
              <Text>Tipo TR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("TR", text)} 
          // value={value}
        />
      </View>

      <View style={styles.conRow}>
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>No.</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Pino", text)}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>Valor</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Encino", text)}
            />
          </View>
        </View>
      </View>

      
      
    </ScrollView>
  );
};

export default FS2_2;