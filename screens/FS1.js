import { InfoModal } from "../components/InfoModal";
import React, { useState, useEffect } from "react";
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
import { Feather } from '@expo/vector-icons';

import { useFS1 } from "../components/FS1Context";
import { insertItem, getItembyId, updateItem } from "../components/LocalDB/DB";

export const FS1 = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [formData, setFormData] = useState({
    Sitio_ID: "",
    CVE_INC: "",
    CAT: "",
    responsable: "",
    Paraje: "",
    Predio: "",
    Municipio: "",
    Estado: "",
    Altitud: "",
    Waypoint_ID: "",
    CoordX: "",
    CoordY: "",
    PrecisionF: "",
    Exposicion: "",
    Pendiente: "",
    Fecha: "",
    Hr_Inicio: "",
    Hr_Termino: "",
    DPF: "",
    CGE_CAR: "",
    CGE_CAS: "",
    CGE_CHE: "",
    CGE_CRE: "",
    CGE_CSE: "",
    CGE_CRO: "",
  });
  const [id, setId] = useState("");
  const [editing, setEditing] = useState(false);
  const { fs1Id, setFs1Id } = useFS1();

  const getData = async (id) => {
    const res = await getItembyId("FES1", ["*"], "CVE_INC", id);
    setFormData(res[0]);
    console.log(res[0]);
  };

  useEffect(() => {
    console.log("Parans: ", route.params);
    if (route.params && route.params.id) {
      setId(route.params.id);
      setEditing(true);
      getData(route.params.id);
      setFs1Id(route.params.id);

    } else {
      setEditing(false);
    }
  }, []);

  const handleInputChange = (name, text) =>{
    setFormData({ ...formData, [name]: text });
    console.log(formData)
  }

  const handleSubmit = () => {
    if (!editing) {
      try {
        insertItem("FES1", formData);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        updateItem("FES1", formData, id, "CVE_INC");
      } catch (e) {
        console.log(error);
      }
    }
  };

  const showInfoModal = (text) => {
    setInfoText(text);
    setModalVisible(true);
  };

  return (
 
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerK}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.container}>
            {/* ID del Sitio y CVE INC */}

            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>ID del Sitio</Text>
                    </View>
                    <View style={styles.infoCol}>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() =>
                          showInfoModal(
                            "ID del Sitio: Se refiere al número de identificación del sitio. 000"
                          )
                        }
                      >
                        <Feather name="info" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="000"
                    onChangeText={(text) => handleInputChange("Sitio_ID", text)}
                    value={formData.Sitio_ID}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>CVE INC</Text>
                    </View>
                    <View style={styles.infoCol}>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() =>
                          showInfoModal("CVE INC: Clave de Incendio. 21DUR18")
                        }
                      >
                        <Feather name="info" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="21DUR18"
                    onChangeText={(text) => handleInputChange("CVE_INC", text)}
                    value={formData.CVE_INC}
                  />
                </View>
              </View>
            </View>

            {/* CAT */}
            <View style={styles.section}>
              <View style={styles.conRow}>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>CAT</Text>
                </View>
                <View style={styles.infoCol}>
                  <TouchableOpacity
                    style={styles.infoButton}
                    onPress={() =>
                      showInfoModal(
                        "CAT: Categoria del Sitio. QUE: Quemado, NOQ: No Quemado"
                      )
                    }
                  >
                    <Feather name="info" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleInputChange("CAT", text)}
                value={formData.CAT}
              />
            </View>

            {/* Responsable */}
            <View style={styles.section}>
              <View style={styles.conRow}>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>Responsable</Text>
                </View>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleInputChange("responsable", text)}
                value={formData.responsable}
              />
            </View>

            {/* Paraje y Predio */}

            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Paraje</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    onChangeText={(text) => handleInputChange("Paraje", text)}
                    value={formData.Paraje}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Predio</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleInputChange("Predio", text)}
                    value={formData.Predio}
                  />
                </View>
              </View>
            </View>

            {/* Municipio y Estado */}

            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Municipio</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="Guanacevi"
                    onChangeText={(text) =>
                      handleInputChange("Municipio", text)
                    }
                    value={formData.Municipio}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Estado</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="Durango"
                    onChangeText={(text) => handleInputChange("Estado", text)}
                    value={formData.Estado}
                  />
                </View>
              </View>
            </View>

            {/* Altitud y Waypoint */}
            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Altitud</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange("Altitud", text)}
                    value={formData.Altitud.toString()}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Waypoint</Text>
                    </View>
                    <View style={styles.infoCol}>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() =>
                          showInfoModal("Waypoint marcado en el GPS.")
                        }
                      >
                        <Feather name="info" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                      handleInputChange("Waypoint_ID", text)
                    }
                    value={formData.Waypoint_ID}
                  />
                </View>
              </View>
            </View>

            {/* CoordX y CoordY */}
            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>CoordX</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange("CoordX", text)}
                    value={formData.CoordX.toString()}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>CoordY</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange("CoordY", text)}
                    value={formData.CoordY.toString()}
                  />
                </View>
              </View>
            </View>

            {/* Presicion y Exposicion */}
            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Presicion</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    keyboardType="decimal-pad"
                    onChangeText={(text) =>
                      handleInputChange("PrecisionF", text)
                    }
                    value={formData.PrecisionF.toString()}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Exposicion</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    keyboardType="decimal-pad"
                    onChangeText={(text) =>
                      handleInputChange("Exposicion", text)
                    }
                    value={formData.Exposicion.toString()}
                  />
                </View>
              </View>
            </View>

            {/* Pendiente y Fecha */}
            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Pendiente</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    keyboardType="decimal-pad"
                    placeholder="0.0"
                    onChangeText={(text) =>
                      handleInputChange("Pendiente", text)
                    }
                    value={formData.Pendiente.toString()}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Fecha</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleInputChange("Fecha", text)}
                    placeholder="DD-MM-YYYY"
                    value={formData.Fecha}
                  />
                </View>
              </View>
            </View>

            {/* Hora de Inicio y Hora de Termino */}
            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Hora de Inicio</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="HH:MM"
                    onChangeText={(text) =>
                      handleInputChange("Hr_Inicio", text)
                    }
                    value={formData.Hr_Inicio}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>Hora de Termino</Text>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                      handleInputChange("Hr_Termino", text)
                    }
                    placeholder="HH:MM"
                    value={formData.Hr_Termino}
                  />
                </View>
              </View>
            </View>

            {/* DPF */}
            <View style={styles.section}>
              <View style={styles.conRow}>
                <View style={styles.infoCol}>
                  <Text style={styles.label}>DPF</Text>
                </View>
                <View style={styles.infoCol}>
                  <TouchableOpacity
                    style={styles.infoButton}
                    onPress={() =>
                      showInfoModal("Dirección de propagación del fuego")
                    }
                  >
                    <Feather name="info" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("DPF", text)}
                value={formData.DPF.toString()}
              />
            </View>

            <View>
              <Text style={{ textAlign: "center" }}>CGE (%)</Text>
              <View
                style={{
                  borderBottomColor: "grey", // Color de la línea
                  borderBottomWidth: 1, // Grosor de la línea
                  marginTop: 10, // Margen superior (opcional)
                  marginBottom: 25, // Margen inferior (opcional)
                }}
              ></View>
            </View>

            {/* CAR y CAS */}
            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>CAR</Text>
                    </View>
                    <View style={styles.infoCol}>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() => showInfoModal("Arbóreo (DAP > 7.5 cm)")}
                      >
                        <Feather name="info" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange("CGE_CAR", text)}
                    value={formData.CGE_CAR.toString()}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>CAS</Text>
                    </View>
                    <View style={styles.infoCol}>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() =>
                          showInfoModal("Sotobosque (DAP < 7.5 cm)")
                        }
                      >
                        <Feather name="info" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange("CGE_CAS", text)}
                    placeholder=""
                    value={formData.CGE_CAS.toString()}
                  />
                </View>
              </View>
            </View>

            {/* CHE y CRE */}
            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>CHE</Text>
                    </View>
                    <View style={styles.infoCol}>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() => showInfoModal("Herbáceas")}
                      >
                        <Feather name="info" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange("CGE_CHE", text)}
                    value={formData.CGE_CHE.toString()}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>CRE</Text>
                    </View>
                    <View style={styles.infoCol}>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() =>
                          showInfoModal(
                            "Regeneración (individuos leñosos que surgen post-incendio)"
                          )
                        }
                      >
                        <Feather name="info" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange("CGE_CRE", text)}
                    placeholder=""
                    value={formData.CGE_CRE.toString()}
                  />
                </View>
              </View>
            </View>

            <View style={styles.conRow}>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>CSE</Text>
                    </View>
                    <View style={styles.infoCol}>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() => showInfoModal("Suelo")}
                      >
                        <Feather name="info" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    keyboardType="decimal-pad"
                    placeholder=""
                    onChangeText={(text) => handleInputChange("CGE_CSE", text)}
                    value={formData.CGE_CSE.toString()}
                  />
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.section}>
                  <View style={styles.conRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.label}>CRO</Text>
                    </View>
                    <View style={styles.infoCol}>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() => showInfoModal("Roca Expuesta")}
                      >
                        <Feather name="info" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TextInput
                    style={styles.input}
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange("CGE_CRO", text)}
                    placeholder=""
                    value={formData.CGE_CRO.toString()}
                  />
                </View>
              </View>
            </View>

            {/* ...añadir más TextInput según sea necesario... */}

            {!editing ? (
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

            <InfoModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              infoText={infoText}
            />
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
