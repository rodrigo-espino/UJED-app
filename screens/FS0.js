import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { insertItem, getItembyId, updateItem } from "../components/LocalDB/DB";

export const FS0 = ({ route }) => {
  const [FormData, setFormData] = useState({
    CVE_INC: "",
    Alias: "",
    Descripcion: "",
  });
  const [isEditing, setisEditing] = useState(false);

  const handleInputChange = (name, text) =>
    setFormData({ ...FormData, [name]: text });

  const handleSubmit = () => {
    // initializeDatabase()
    console.log(FormData);
    if (isEditing) {
      try {
        updateItem("FES0", FormData, route.params.id, "CVE_INC");
      } catch (e) {
        console.log(e);
      }
      return;
    } else {
      try {
        insertItem("FES0", FormData);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (route.params && route.params.id)  {
      setisEditing(true);
      getItembyId("FES0", ["*"], "CVE_INC", route.params.id).then((res) => {
      setFormData(res[0]);
      });
    }
    else{
      setisEditing(false);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerK}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          {/* CVE, Alias */}
          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>CVE</Text>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("CVE_INC", text)}
                  value={FormData.CVE_INC}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>Alias</Text>
                  </View>

                  <TextInput
                    style={styles.input}
                    placeholder="0"
                    onChangeText={(text) => handleInputChange("Alias", text)}
                    value={FormData.Alias}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* Descripcion */}
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>Descripcion</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("Descripcion", text)}
              value={FormData.Descripcion}
            />
          </View>

          {!isEditing ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text>Guardar y Continuar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text>Guardar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text>Actualizar y Continuar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text>Actualizar</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerK: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "black",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    margin: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  conRow: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    alignContent: "space-between", // Centra horizontalmente el contenido de la columna
    marginHorizontal: 2,
  },
  infoCol: {
    alignContent: "flex-start",
    marginHorizontal: 2,
  },
  infoButton: {
    padding: 2,
  },
});
