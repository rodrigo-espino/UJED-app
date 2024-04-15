import { InfoModal } from "../components/InfoModal";
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
import {
  insertItem,
  getItembyId,
  updateItem,
} from "../components/LocalDB/DB";
import { Feather } from "@expo/vector-icons";

export const FS22 = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [FesID, setFesID] = useState(route.params.FS2);
  const [FormData, setFormData] = useState({
    TR: "",
    Pino1: "",
    Pino10: "",
    Pino100: "",
    Encino1: "",
    Encino10: "",
    Encino100: "",
    Otros1: "",
    Otros10: "",
    Otros100: "",
    FES2_ID: FesID,
    Pendiente: "",
  });
  const [isEditing, setisEditing] = useState(false);
  const [TR, setTR] = useState(0);

  const showInfoModal = (text) => {
    setInfoText(text);
    setModalVisible(true);
  };

  const handleInputChange = (name, text) =>
    setFormData({ ...FormData, [name]: text });

  const handleSubmit = () => {
    // initializeDatabase()
    console.log(FormData);
    if (isEditing) {
      try {
        updateItem("FES2_TR", FormData,  route.params.ID, "id");
      } catch (e) {
        console.log(e);
      }
      return;
    } else {
      try {
        insertItem("FES2_TR", FormData);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    setFesID(route.params.FS2);
    if (route.params.ID) {
      setisEditing(true);
      getItembyId("FES2_TR", ["*"], "id", route.params.ID).then((res) => {
        setFormData(res[0]);
      });
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerK}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>TR</Text>
              </View>
              <View style={styles.infoCol}>
                <TouchableOpacity
                  style={styles.infoButton}
                  onPress={() =>
                    showInfoModal(
                      "TR. Transecto. \nSolo se aceptan valore del 1 al 3."
                    )
                  }
                >
                  <Feather name="info" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("TR", text)}
              keyboardType="decimal-pad"
              value={FormData.TR.toString()}
            />
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                1 h
              </Text>
              <Text style={{ textAlign: "center", fontSize: 12 }}>
                {" "}
                0.6 (finos/livianos)
              </Text>
              <View
                style={{
                  borderBottomColor: "grey", // Color de la línea
                  borderBottomWidth: 1, // Grosor de la línea
                  marginTop: 10, // Margen superior (opcional)
                  marginBottom: 25, // Margen inferior (opcional)
                }}
              ></View>
            </View>

            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Pino</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="0"
                    onChangeText={(text) => handleInputChange("Pino1", text)}
                    keyboardType="decimal-pad"
                    value={FormData.Pino1.toString()}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Encino</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="0"
                    onChangeText={(text) => handleInputChange("Encino1", text)}
                    keyboardType="decimal-pad"
                    value={FormData.Encino1.toString()}
                  />
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.conRow}>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>Otros</Text>
                </View>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleInputChange("Otros1", text)}
                keyboardType="decimal-pad"
                value={FormData.Otros1.toString()}
              />
            </View>
          </View>
          <View>
            <Text
              style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}
            >
              10 h
            </Text>
            <Text style={{ textAlign: "center", fontSize: 12 }}>
              0.6 - 2.5 (pequeños/ligeros)
            </Text>
            <View
              style={{
                borderBottomColor: "grey", // Color de la línea
                borderBottomWidth: 1, // Grosor de la línea
                marginTop: 10, // Margen superior (opcional)
                marginBottom: 25, // Margen inferior (opcional)
              }}
            ></View>
          </View>

          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>Pino</Text>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Pino10", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Pino10.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>Encino</Text>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Encino10", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Encino10.toString()}
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>Otros</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("Otros10", text)}
              keyboardType="decimal-pad"
              value={FormData.Otros10.toString()}
            />
          </View>

          <View>
            <Text
              style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}
            >
              100 h
            </Text>
            <Text style={{ textAlign: "center", fontSize: 12 }}>
              2.5 - 7.5 (regulares/medianos)
            </Text>
            <View
              style={{
                borderBottomColor: "grey", // Color de la línea
                borderBottomWidth: 1, // Grosor de la línea
                marginTop: 10, // Margen superior (opcional)
                marginBottom: 25, // Margen inferior (opcional)
              }}
            ></View>
          </View>

          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>Pino</Text>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Pino100", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Pino100.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>Encino</Text>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Encino100", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Encino100.toString()}
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>Otros</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("Otros100", text)}
              keyboardType="decimal-pad"
              value={FormData.Otros100.toString()}
            />
          </View>

          <View
            style={{
              borderBottomColor: "grey", // Color de la líneas
              borderBottomWidth: 1, // Grosor de la línea
              marginTop: 10, // Margen superior (opcional)
              marginBottom: 25, // Margen inferior (opcional)
            }}
          ></View>
          <View style={styles.conRow}>
            <View style={styles.infoCol}>
              <Text style={styles.label}>Pendiente del TR (%)</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange("Pendiente", text)}
            keyboardType="decimal-pad"
            value={FormData.Pendiente.toString()}
          />

          <InfoModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            infoText={infoText}
          />

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
