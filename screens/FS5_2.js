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
import { insertItem, getItembyId, updateItem } from "../components/LocalDB/DB";
import { Feather } from "@expo/vector-icons";

export const FS5_2 = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [infoText, setInfoText] = useState("");
  const FS5ID = route.params.FS5;
  const [FormData, setFormData] = useState({
    FES5_ID: FS5ID,
    No: "",
    Genero_Especie: "",
    AZM: "",
    DIST: "",
    DAP: "",
    Dia_NS: "",
    Dia_OE: "",
    Alt_Htotal: "",
    Alt_Hmar: "",
    Alt_Hneg: "",
    Alt_Hcht: "",
    Alt_Hcopa: "",
    Sof_NEG: "",
    Sof_MAR: "",
    Sof_VER: "",
    Sof_CSH: "",
    Sof_REB: "",
    Estatus: "",
    Observaciones: "",
  });
  const [isEditing, setisEditing] = useState(false);

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
        updateItem("FES5_2", FormData, route.params.id, "id");
      } catch (e) {
        console.log(e);
      }
      return;
    } else {
      try {
        insertItem("FES5_2", FormData);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (route.params.id) {
      setisEditing(true);
      getItembyId("FES5_2", ["*"], "id", route.params.id).then((res) => {
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
          {/* No */}
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>No.</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("No", text)}
              keyboardType="decimal-pad"
              value={FormData.No.toString()}
            />
          </View>

          {/* Genero / especie, AZM */}
          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>Genero / Especie</Text>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) =>
                    handleInputChange("Genero_Especie", text)
                  }
                  value={FormData.Genero_Especie}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>AZM</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => showInfoModal("Azimut (grados)")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("AZM", text)}
                  keyboardType="decimal-pad"
                  value={FormData.AZM.toString()}
                />
              </View>
            </View>
          </View>

          {/* DIST y DAP */}

          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>DIST</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() =>
                        showInfoModal(
                          "DIST. Distancia del arbol desde al centro del sitio (m)"
                        )
                      }
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("DIST", text)}
                  value={FormData.DIST.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>DAP</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() =>
                        showInfoModal(
                          "DAP. Diametro a la altura del pecho (cm)"
                        )
                      }
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("DAP", text)}
                  keyboardType="decimal-pad"
                  value={FormData.DAP.toString()}
                />
              </View>
            </View>
          </View>

          {/* Linea */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 10,
              textAlign: "center",
            }}
          >
            Diametro de Copa (m)
          </Text>
          <View
            style={{
              borderBottomColor: "grey", // Color de la línea
              borderBottomWidth: 1, // Grosor de la línea
              marginTop: 10, // Margen superior (opcional)
              marginBottom: 25, // Margen inferior (opcional)
            }}
          ></View>

          {/* Dia_NS y Dia_OE */}
          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>N-S</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() =>
                        showInfoModal(
                          "Diametro de la orientaacion de la copa en orientacion: \n N-S: Norte a Sur (m)"
                        )
                      }
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Dia_NS", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Dia_NS.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>O-E</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() =>
                        showInfoModal(
                          "Diametro de la orientaacion de la copa en orientacion: \n O-E: Oeste a Este (m)"
                        )
                      }
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Dia_OE", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Dia_OE.toString()}
                />
              </View>
            </View>
          </View>

          {/* Linea */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 10,
              textAlign: "center",
            }}
          >
            Alturas y Severidad (m)
          </Text>
          <View
            style={{
              borderBottomColor: "grey", // Color de la línea
              borderBottomWidth: 1, // Grosor de la línea
              marginTop: 10, // Margen superior (opcional)
              marginBottom: 25, // Margen inferior (opcional)
            }}
          ></View>

          {/* htotal y hmar */}
          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>H total</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => showInfoModal("Altura total (m)")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Alt_Htotal", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Alt_Htotal.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>H mar</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() =>
                        showInfoModal(
                          "Altura de soflamado de copa (marron) (m)"
                        )
                      }
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Alt_Hmar", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Alt_Hmar.toString()}
                />
              </View>
            </View>
          </View>

          {/* hneg y hcopa */}
          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>H neg</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() =>
                        showInfoModal("Altura de calcinado de copa (negro) (m)")
                      }
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Alt_Hneg", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Alt_Hneg.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>H copa</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() =>
                        showInfoModal("Altura a la primer grupo de ramas (m)")
                      }
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Alt_Hcopa", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Alt_Hcopa.toString()}
                />
              </View>
            </View>
          </View>

          {/* hcht */}
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>H cht</Text>
              </View>
              <View style={styles.infoCol}>
                <TouchableOpacity
                  style={styles.infoButton}
                  onPress={() =>
                    showInfoModal("Altura de chamuscado en el tronco (m)")
                  }
                >
                  <Feather name="info" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("Alt_Hcht", text)}
              keyboardType="decimal-pad"
              value={FormData.Alt_Hcht.toString()}
            />
          </View>

          {/* Linea */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 10,
              textAlign: "center",
            }}
          >
            Soflamado en la copa (%)
          </Text>
          <View
            style={{
              borderBottomColor: "grey", // Color de la línea
              borderBottomWidth: 1, // Grosor de la línea
              marginTop: 10, // Margen superior (opcional)
              marginBottom: 25, // Margen inferior (opcional)
            }}
          ></View>

          {/* Sofneg y sofmar */}
          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>NEG</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => showInfoModal("Calcinado (negro)")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Sof_NEG", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Sof_NEG.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>MAR</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => showInfoModal("Soflamado (Marron)")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Sof_MAR", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Sof_MAR.toString()}
                />
              </View>
            </View>
          </View>

          {/* SofVER y SofCSH */}
          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>VER</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => showInfoModal("Verde (no quemado)")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Sof_VER", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Sof_VER.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>CSH</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => showInfoModal("Copa Sin Hojas")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("Sof_CSH", text)}
                  keyboardType="decimal-pad"
                  value={FormData.Sof_CSH.toString()}
                />
              </View>
            </View>
          </View>
          {/* SofReb */}
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>REB</Text>
              </View>
              <View style={styles.infoCol}>
                <TouchableOpacity
                  style={styles.infoButton}
                  onPress={() => showInfoModal("Rebrotes en la copa")}
                >
                  <Feather name="info" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("Sof_REB", text)}
              keyboardType="decimal-pad"
              value={FormData.Sof_REB.toString()}
            />
          </View>

          <View
            style={{
              borderBottomColor: "grey", // Color de la línea
              borderBottomWidth: 1, // Grosor de la línea
              marginTop: 10, // Margen superior (opcional)
              marginBottom: 25, // Margen inferior (opcional)
            }}
          ></View>

          {/* Estatus */}
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>Estatus</Text>
              </View>
              <View style={styles.infoCol}>
                <TouchableOpacity
                  style={styles.infoButton}
                  onPress={() =>
                    showInfoModal(
                      "1: Calcinado (100%),\n2: Muerto con follaje, \n3: Vivo quemado, \n4: Seco o enfermo (por incendio), \n5: Calcinado con rebrotes en la base, \n6: Sin copa (trozado), \n7: Vivo no quemado, \n8: Seco o enfermo (no por incendio), \n9: Muerto no por incendio, \n10: Otro (especificar)"
                    )
                  }
                >
                  <Feather name="info" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("Estatus", text)}
              keyboardType="decimal-pad"
              value={FormData.Estatus.toString()}
            />
          </View>

          {/* Observaciones */}
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>Observaciones</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("Observaciones", text)}
              keyboardType="decimal-pad"
              value={FormData.Observaciones.toString()}
            />
          </View>

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
