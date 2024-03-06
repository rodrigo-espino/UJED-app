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

export const FS1 = () => {
  const [formData, setFormData] = useState({
    ID: "",
    CVEINC: "",
    CAT: "",
    Responsable: "",

    // ... otros campos ...
  });

  const handleInputChange = (name, text) =>
    setFormData({ ...formData, [name]: text });
  const handleSubmit = () => {
    // Haz algo con los datos recopilados, como imprimirlos en la consola
    console.log(formData);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [infoText, setInfoText] = useState("");

  //Funcion para un solo modal, abarca todo el ancho
  const InputModal = ({
    infoModal,
    label,
    placeholder,
    OnChangeText,
    value,
  }) => {
    return (
      <View style={styles.section}>
        <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={styles.infoCol}>
            {infoModal !== "" && (
              <TouchableOpacity
                style={styles.infoButton}
                onPress={() => showInfoModal(infoModal)}
              >
                <Text>Info</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={OnChangeText}
          value={value}
        />
      </View>
    );
  };
  // Funcion para dos inputs con modal
  const InputsWithModal = ({
    lab1,
    lab2,
    place1,
    place2,
    mod1,
    mod2,
    OnChange1,
    OnChange2,
  }) => {
    return (
      <View style={styles.conRow}>
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>{lab1}</Text>
              </View>
              <View style={styles.infoCol}>
                {mod1 !== "" && (
                  <TouchableOpacity
                    style={styles.infoButton}
                    onPress={() => showInfoModal(mod1)}
                  >
                    <Text>Info</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder={place1}
              onChangeText={OnChange1}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>{lab2}</Text>
              </View>
              <View style={styles.infoCol}>
                {mod2 !== "" && (
                  <TouchableOpacity
                    style={styles.infoButton}
                    onPress={() => showInfoModal(mod2)}
                  >
                    <Text>Info</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder={place2}
              onChangeText={OnChange2}
            />
          </View>
        </View>
      </View>
    );
  };

  const showInfoModal = (text) => {
    setInfoText(text);
    setModalVisible(true);
  };

  return (
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
                  <Text>Info</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="000"
              onChangeText={(text) => handleInputChange("ID", text)}
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
                  <Text>Info</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="21DUR18"
              onChangeText={(text) => handleInputChange("CVEINC", text)}
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
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("CAT", text)}
          // value={value}
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
          onChangeText={(text) => handleInputChange("Responsable", text)}
          // value={value}
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
              onChangeText={(text) => handleInputChange("PARAJE", text)}
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
              onChangeText={(text) => handleInputChange("PREDIO", text)}
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
              onChangeText={(text) => handleInputChange("MUNICIPIO", text)}
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
              onChangeText={(text) => handleInputChange("ESTADO", text)}
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
              onChangeText={(text) => handleInputChange("ALTITUD", text)}
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
                  onPress={() => showInfoModal("Waypoint marcado en el GPS.")}
                >
                  <Text>Info</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("WAYPOINT", text)}
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
              onChangeText={(text) => handleInputChange("COORDX", text)}
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
              onChangeText={(text) => handleInputChange("COORDY", text)}
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
              onChangeText={(text) => handleInputChange("PRESICION", text)}
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
              onChangeText={(text) => handleInputChange("EXPOSICION", text)}
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
              placeholder="0.0"
              onChangeText={(text) => handleInputChange("PENDIENTE", text)}
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
              onChangeText={(text) => handleInputChange("FECHA", text)}
              placeholder="DD-MM-YYYY"
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
              onChangeText={(text) => handleInputChange("HRI", text)}
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
              onChangeText={(text) => handleInputChange("HRT", text)}
              placeholder="HH:MM"
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
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("DPF", text)}
          // value={value}
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
              onPress={() =>
                showInfoModal("Arbóreo (DAP > 7.5 cm)")
              }
            >
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={(text) => handleInputChange("CAR", text)}
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
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("CAS", text)}
              placeholder=""
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
              onPress={() =>
                showInfoModal("Herbáceas")
              }
            >
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={(text) => handleInputChange("CHE", text)}
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
                showInfoModal("Regeneración (individuos leñosos que surgen post-incendio)")
              }
            >
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("CRE", text)}
              placeholder=""
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
              onPress={() =>
                showInfoModal("Suelo")
              }
            >
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={(text) => handleInputChange("CSE", text)}
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
              onPress={() =>
                showInfoModal("Roca Expuesta")
              }
            >
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange("CRO", text)}
              placeholder=""
            />
          </View>
        </View>
      </View>


      {/* 

    

     

      <InputsWithModal
        lab1="CSE"
        lab2="CRO"
        place1=""
        place2=""
        mod1="Suelo"
        mod2="Roca Expuesta"
      /> */}

      {/* ...añadir más TextInput según sea necesario... */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Continuar y Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Guardar</Text>
        </TouchableOpacity>
      </View>
      <InfoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        infoText={infoText}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    padding: 5,
    borderRadius: 100,
    borderWidth: 1,
  },
});
