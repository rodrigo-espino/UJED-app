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

export const FS4_2 = () => {
  const showInfoModal = (text) => {
    setInfoText(text);
    setModalVisible(true);
  };

  return (
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
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Genero / Expecie</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("TR 1-3")}
            >
              <Text>Info</Text>
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
                <Text style={styles.label}>FRE</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Fre", text)}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>CAP</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("Cap", text)}
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
              onPress={() => showInfoModal("TR 1-3")}
            >
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("TIR", text)}
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
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("SBQ", text)}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>REG</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("REG", text)}
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
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("HER", text)}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.conRow}>
              <View style={styles.infoCol}>
                <Text style={styles.label}>HOJ</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("HOJ", text)}
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
            </View>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={(text) => handleInputChange("SUE", text)}
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
              onChangeText={(text) => handleInputChange("ROE", text)}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.conRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>HHT</Text>
          </View>
          <View style={styles.infoCol}>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => showInfoModal("TR 1-3")}
            >
              <Text>Info</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("HHT", text)}
          // value={value}
        />
      </View>
    </ScrollView>
  );
};
