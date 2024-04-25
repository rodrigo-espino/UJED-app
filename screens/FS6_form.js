import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Layout } from '../components/Layout'
import { useNavigation } from '@react-navigation/native'
import { insertItem, getItembyId, updateItem } from '../components/LocalDB/DB'

const FS6_form = ({ route }) => {

  const fs6Id = route.params.fs6Id


  const [editing, setEditing] = useState(false)
  const [FS6, setFS6] = useState({
    "FEST6_ID": fs6Id,
    "No": "",
    "Genero_Especie": "",
    "FRE": "",
    "CDB": "",
    "Dia_NS": "",
    "Dia_OE": "",
    "Alt_Htotal": "",
    "Alt_Hcopa": "",
    "Sof_NEG": "",
    "Sof_MAR": "",
    "Sof_VER": "",
    "Sof_CSH": "",
    "Sof_REB": "",
    "CRF": "",
    "Observaciones": ""
  })

  const navigation = useNavigation();

  const handleChange = (name, text)=> {
    setFS6({... FS6, [name]: text})
    console.log(FS6)
  }

  const handleSubmit = async () => {
    if(!editing){
      await insertItem('FES6', {"FEST1_ID": route.params.fs1Id })
      await insertItem('FES6_2', FS6)
    }
    else{
      await updateItem('FES6_2', FS6, FS6.id, 'id')
    }
    navigation.navigate('FS6')
  }

  useEffect(() => {
    if (route.params && route.params.id){
        navigation.setOptions({ headerTtitle: 'Updating FES6' });
        setEditing(true);
        ( async () => {
            const FES6 = await getItembyId('FES6_2', ["*"], 'id', route.params.id);
            console.log('response',FES6)
            setFS6(FES6[0]);
            console.log('useState',FS6)
        })();
    }
}, [])

  return (
    <ScrollView>
      <Layout>
        {/** Primera parte del formulatio No */}
        <View style={{ flexDirection: 'row'}}>
          <Text style={styles.title}>No</Text>
          <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
        </View>
        <TextInput value={FS6.No.toString()} style={styles.input} placeholder='000' onChangeText={(text) => handleChange('No', text)}/>
      
        {/** Segunda parte del formulario Genero/Especie */}
        <View style={{ flexDirection: 'row', marginTop: 15}}>
          <Text style={styles.title}>Genero/Especie</Text>
          <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
        </View>
        <TextInput value={FS6.Genero_Especie} style={styles.input} placeholder='000' onChangeText={(text) => handleChange('Genero_Especie', text)}/>

        {/** Tercera parte del formulario FRE CDB */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <View style={styles.multipleInputs}>
              <View style={{flexDirection: 'row'}}>
                  <Text style={styles.title}>FRE</Text>
                  <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
              </View>
              <TextInput value={FS6.FRE.toString()} style={styles.inputs} placeholder='000' onChangeText={(text) => handleChange('FRE', text)}/>
          </View>
          <View style={styles.multipleInputs}>
              <View style={{ flexDirection: 'row'}}>
                  <Text style={styles.title}>CDB</Text>
                  <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
              </View>
              <TextInput value={FS6.CDB.toString()} style={styles.inputs} placeholder='000' onChangeText={(text) => handleChange('CDB', text)}/>
          </View>
        </View>

        {/** Cuarta parte del formulario Diametro coma (m) */}
        <View style={{margin: 15, borderBottomWidth:1, borderBottomColor: 'grey', width: '100%', alignItems: 'center'}}>
          <Text style={styles.title}>Diametro copa (m)</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <View style={styles.multipleInputs}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>N-S</Text>
                <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
            </View>
            <TextInput value={FS6.Dia_NS.toString()} style={styles.inputs} placeholder='000' onChangeText={(text) => handleChange('Dia_NS', text)}/>
          </View>
          <View style={styles.multipleInputs}>
            <View style={{ flexDirection: 'row'}}>
                <Text style={styles.title}>O-E</Text>
                <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
            </View>
            <TextInput value={FS6.Dia_NS.toString()} style={styles.inputs} placeholder='000' onChangeText={(text) => handleChange('Dia_OE', text)}/>
          </View>
        </View>

        {/** Quinta parte del formulario Altura promedio (m) */}
        <View style={{margin: 15, borderBottomWidth:1, borderBottomColor: 'grey', width: '100%', alignItems: 'center'}}>
          <Text style={styles.title}>Altura promedio (m)</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <View style={styles.multipleInputs}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>H total</Text>
                <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
            </View>
            <TextInput value={FS6.Alt_Hcopa.toString()} style={styles.inputs} placeholder='000' onChangeText={(text) => handleChange('Alt_Htotal', text)}/>
          </View>
          <View style={styles.multipleInputs}>
            <View style={{ flexDirection: 'row'}}>
                <Text style={styles.title}>H copa</Text>
                <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
            </View>
            <TextInput value={FS6.Alt_Hcopa.toString()} style={styles.inputs} placeholder='000' onChangeText={(text) => handleChange('Alt_Hcopa', text)}/>
          </View>
        </View>

        {/** Sexta seccion del formulario Soflamado Promedio Copa (%) */}
        <View style={{margin: 15, borderBottomWidth:1, borderBottomColor: 'grey', width: '100%', alignItems: 'center'}}>
          <Text style={styles.title}>Soflamado promedio copa (%)</Text>
        </View>
            {/** Primera seccion de inputs, NEG MAR VER */} 
        <View style={{flexDirection: 'row'}}>
          <View style={styles.multipleInputs}>
              <View style={{flexDirection: 'row'}}>
                  <Text style={styles.title}>NEG</Text>
                  <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
              </View>
              <TextInput value={FS6.Sof_NEG.toString()} style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Sof_NEG', text)}/>
          </View>
          <View style={styles.multipleInputs}>
              <View style={{ flexDirection: 'row'}}>
                  <Text style={styles.title}>MAR</Text>
                  <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
              </View>
              <TextInput value={FS6.Sof_MAR.toString()} style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Sof_MAR', text)}/>
          </View>
          <View style={styles.multipleInputs}>
              <View style={{ flexDirection: 'row'}}>
                  <Text style={styles.title}>VER</Text>
                  <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
              </View>
              <TextInput value={FS6.Sof_VER.toString()} style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Sof_VER', text)}/>
          </View>
        </View>
            {/** Segunda seccion de inputs, CSH REB */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.multipleInputs}>
              <View style={{flexDirection: 'row'}}>
                  <Text style={styles.title}>CSH</Text>
                  <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
              </View>
              <TextInput value={FS6.Sof_CSH.toString()} style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Sof_CSH', text)}/>
          </View>
          <View style={styles.multipleInputs}>
              <View style={{ flexDirection: 'row'}}>
                  <Text style={styles.title}>REB</Text>
                  <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
              </View>
              <TextInput value={FS6.Sof_REB.toString()} style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Sof_REB', text)}/>
          </View>
        </View>  

        {/** Septima parte del formulatio CRF */}
        <View style={{ flexDirection: 'row', marginTop: 15}}>
          <Text style={styles.title}>CRF</Text>
          <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
        </View>
        <TextInput value={FS6.CRF.toString()} style={styles.input} placeholder='000' onChangeText={(text) => handleChange('CRF', text)}/>

        {/** Octava parte del formulatio Observaciones */}
        <View style={{ flexDirection: 'row', marginTop: 15}}>
          <Text style={styles.title}>Observaciones</Text>
          <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
        </View>
        <TextInput value={FS6.Observaciones} style={styles.input} placeholder='000' onChangeText={(text) => handleChange('Observaciones', text)}/>

            {/** Ultima seccion del formulario, botones de guardado */}
            <View style={{justifyContent: 'space-evenly', flexDirection: 'row', width: '100%', marginTop: 30}}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('FS6')}><Text>Cancelar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}><Text style={{color: 'white'}}>Guardar</Text></TouchableOpacity>
            </View>

      </Layout>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  infoButton: {
      borderRadius: 20/2,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: '#ffffff',
      width: 20,
      height: 20,
      textAlign: 'center',
      flexDirection: 'column',
      marginHorizontal: 5
  },
  input: {
      width: '100%',
      textAlign: 'center',
      borderColor: 'grey',
      borderRadius: 5,
      borderWidth: 1,
      height: 40,
      margin: 10
  },
  title: {
      fontSize: 17,
      marginBottom: 5,
      textAlign: 'center',
  },
  inputs: {
      width: 100,
      textAlign: 'center',
      borderColor: 'grey',
      borderRadius: 5,
      borderWidth: 1,
      height: 40,
  },
  multipleInputs: {
      marginHorizontal: 10,
      alignItems: 'center',
      marginTop: 5,
  },
  saveButton: {
      padding: 20,
      backgroundColor: 'black',
      borderRadius: 5,
      margin: 10
  },
  cancelButton: {
      padding: 20,
      borderRadius: 5,
      margin: 10,
      borderWidth: 1,
      borderColor: 'black'
  }
})

export default FS6_form