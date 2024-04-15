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
export const FS23 = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [infoText, setInfoText] = useState("");
  const FesID = route.params.FS2
  const [FormData, setFormData] = useState({
    TR: "",
    SSP: "",
    DAP: "",
    PDR: "",
    FEST2_ID: FesID,
  });
  const [isEditing, setisEditing] = useState(false);


  const showInfoModal = (text) => {
    setInfoText(text);
    setModalVisible(true);
  };

  const handleInputChange = (name, text) =>
    setFormData({ ...FormData, [name]: text });


    

    const handleSubmit = () => {
      FormData.FEST2_ID = FesID;
      console.log("FormData", FormData);
      if (isEditing) {
        try {
          updateItem("FES2_3", FormData,  route.params.ID, "id");
        } catch (e) {
          console.log(e);
        }
        return;
      } else {
        try {
          insertItem("FES2_3", FormData);
        } catch (e) {
          console.log(e);
        }
      }
    };


    useEffect(() => {
      
      if (route.params.ID) {
        setisEditing(true);
        getItembyId("FES2_3", ["*"], "id", route.params.ID).then((res) => {
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
          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>TR</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => showInfoModal("TR. Transecto.")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("TR", text)}
                  keyboardType="decimal-pad"
                  value={FormData.TR.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>SSP</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                    onPress={() => showInfoModal("P. Pino \n Q. Quercus \n O. Otra especie")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0"
                  onChangeText={(text) => handleInputChange("SSP", text)}
                  value={FormData.SSP}
                />
              </View>
            </View>
          </View>

          <View style={styles.conRow}>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>DAP</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => showInfoModal("DAP. Diámetro a la altura del pecho (cm).")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="0.0"
                  onChangeText={(text) => handleInputChange("DAP", text)}
                  keyboardType="decimal-pad"
                  value={FormData.DAP.toString()}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.section}>
                <View style={styles.conRow}>
                  <View style={styles.infoCol}>
                    <Text style={styles.label}>PDR</Text>
                  </View>
                  <View style={styles.infoCol}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => showInfoModal("PDR. Material leñoso podrido (Si/No).")}
                    >
                      <Feather name="info" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Si/No"
                  onChangeText={(text) => handleInputChange("PDR", text)}
                  value={FormData.PDR}
                />
              </View>
            </View>
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
