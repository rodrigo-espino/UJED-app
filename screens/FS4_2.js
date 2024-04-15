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

export const FS4_2 = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [infoText, setInfoText] = useState("");
  const FS4ID = route.params.FS4
  const [FormData, setFormData] = useState({
    Subsitio: "",
    No: "",
    Genero_Especie: "",
    FRE: "",
    CAP: "",
    TIR: "",
    Cob_SBQ: "",
    Cob_REG: "",
    Cob_HER: "",
    Cob_HOJ: "",
    Cob_SUE: "",
    Cob_ROE: "",
    HHT: "",
    Observaciones:"", 
    FES4_ID: FS4ID,

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
        updateItem("FES4_2", FormData,  route.params.ID, "id");
      } catch (e) {
        console.log(e);
      }
      return;
    } else {
      try {
        insertItem("FES4_2", FormData);
      } catch (e) {
        console.log(e);
      }
    }
  };
  

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
                <Text style={styles.label}>SubSitio.</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Subsitio", text)}
              keyboardType="decimal-pad"
              value = {FormData.SubSitio}
            />
          </View>
        </View>
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
              onChangeText={(text) => handleInputChange("No", text)}
              keyboardType="decimal-pad"
              value = {FormData.No}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Genero / Expecie</Text>
          </View>
          
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("Genero_Especie", text)}
          value = {FormData.Genero_Especie}
        />
      </View>

      <View style={styles.conRow}>
        <View style={styles.column}>
          <View style={styles.section}>
          <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>FRE</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("Frecuencia del Individuo")}
            >
              <Feather name="info" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("FRE", text)}
              keyboardType="decimal-pad"
              value = {FormData.FRE}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
          <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>CAP</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("Categoria de altura (cm) \n (1) <25 \n (2) 25-50 \n (3) 50-75 \n (4) 75-100 \n (5) >100")}
            >
              <Feather name="info" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("CAP", text)}
              keyboardType="decimal-pad"
              value = {FormData.CAP}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
      <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>TIR</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("Tipo de Regeneracion. \n por semilla (s) \n rebrote (R) \n nada (0)")}
            >
              <Feather name="info" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
          
        
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("TIR", text)}
          value = {FormData.TIR}
          // value={value}
        />
      </View>

      <View>
        <Text style={{ textAlign: "center" }}>Cobertura del Subsitio (%)</Text>
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
            <Text style={styles.label}>SBQ</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("Sotobosque quemado")}
            >
              <Feather name="info" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Cob_SBQ", text)}
              keyboardType="decimal-pad"
              value={FormData.Cob_SBQ}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
          <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>REG</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("Regeneracion (no quemado)")}
            >
              <Feather name="info" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Cob_REG", text)}
              keyboardType="decimal-pad"
              value={FormData.Cob_REG}
            />
          </View>
        </View>
      </View>

      <View style={styles.conRow}>
        <View style={styles.column}>
          <View style={styles.section}>
          <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>HER</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("Herbaceas")}
            >
              <Feather name="info" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Cob_HER", text)}
              keyboardType="decimal-pad"
              value={FormData.Cob_HER}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
          <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>HOJ</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("Hojarasca")}
            >
              <Feather name="info" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Cob_HOJ", text)}
              keyboardType="decimal-pad"
              value={FormData.Cob_HOJ}

            />
          </View>
        </View>
      </View>

      <View style={styles.conRow}>
        <View style={styles.column}>
          <View style={styles.section}>
          <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>SUE</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("Suelo desnudo")}
            >
             <Feather name="info" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Cob_SUE", text)}
              keyboardType="decimal-pad"
              value={FormData.Cob_SUE}

            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>ROE</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Cob_ROE", text)}
              keyboardType="decimal-pad"
              value={FormData.Cob_ROE}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>HHT (m)</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("Altura promedio del estrato herbaceo (m)")}
            >
              <Feather name="info" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
         
        
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("HHT", text)}
          keyboardType="decimal-pad"
          value={FormData.HHT}
          // value={value}
        />
      </View>


      <View style={styles.section}>
        <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Observaciones</Text>
          </View>
          
        </View>
         
        
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("Observaciones", text)}
          numberOfLines={4}
          multiline={true}
          value={FormData.Observaciones}
          
          // value={value}
        />
      </View>
      <InfoModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            infoText={infoText}
          />
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text>Guardar y Continuar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text>Guardar</Text>
              </TouchableOpacity>
            </View>
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