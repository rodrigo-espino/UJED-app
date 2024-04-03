import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const FS3_form = () => {

    const [FS3, setFS3] = useState({
        "CDR": "",
        "Cob_HER": "",
        "Cob_HOJ": "",
        "Cob_SUE": "",
        "Cob_ROE": "",
        "Cob_CEN": "",
        "CobSev_0": "",
        "CobSev_1": "",
        "CobSev_2": "",
        "CobSev_3": "",
        "CobSev_4": "",
        "CobSev_5": "",
        "Prof_HOJ": "",
        "Prof_FER": "",
        "Prof_CEN": "",
        "Prof_PHP": "",
        "Prof_PHQ": "",
        "Observaciones": ""
    })

    const handleChange = (name, text) => {
        setFS3({... FS3, [name]: text})
        console.log(FS3)
    }
  return (
    <ScrollView>
        <Layout>
            {/** Primer seccion CDR */}
            <View style={{ flexDirection: 'row'}}>
                <Text style={styles.title}>CDR</Text>
                <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
            </View>
            <TextInput style={styles.input} placeholder='000' onChangeText={(text) => handleChange('CDR', text)}/>

            {/** Segunda seccion, Cobertura por estado por cuadrante */}
            <View style={{margin: 15, borderBottomWidth:1, borderBottomColor: 'grey', width: '100%', alignItems: 'center'}}>
                <Text style={styles.title}>Cobertura por Estado por Cuadrante (%)</Text>
            </View>
                {/** Primera seccion de inputs, HER FER HOJ */}
            <View style={{flexDirection: 'row'}}>
                <View style={styles.multipleInputs}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>HER</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Cob_HER', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>FER</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Cob_FER', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>HOJ</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Cob_HOJ', text)}/>
                </View>
            </View>
                {/** Segunda seccion de inputs, SUE ROE CEN */}
            <View style={{flexDirection: 'row'}}>
                <View style={styles.multipleInputs}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>SUE</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Cob_SUE', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>ROE</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Cob_ROE', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>CEN</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('Cob_CEN', text)}/>
                </View>
            </View>

            {/** Tercer Seccion del formulario, Cobertura por nivel de severidad en el suelo (%) */}
            <View style={{margin: 15, borderBottomWidth:1, borderBottomColor: 'grey', width: '100%', alignItems: 'center'}}>
                <Text style={styles.title}>Cobertura por Nivel de Severidad en el suelo (%)</Text>
            </View>
                {/** Primera seccion de inputs, 0 1 2 */} 
            <View style={{flexDirection: 'row'}}>
                <View style={styles.multipleInputs}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>0</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CobSev_0', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>1</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CobSev_1', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>2</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CCobSev_2', text)}/>
                </View>
            </View>
                {/** Segunda seccion de inputs, 3 4 5*/}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.multipleInputs}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>3</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CobSev_3', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>4</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CobSev_4', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>5</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CobSev_5', text)}/>
                </View>
            </View>  

            {/** Cuarta seccion del formulario, Profundidad (cm) */}
            <View style={{margin: 15, borderBottomWidth:1, borderBottomColor: 'grey', width: '100%', alignItems: 'center'}}>
                <Text style={styles.title}>Profundidad (cm)</Text>
            </View>
                {/** Primera seccion de inputs, 0 1 2 */} 
            <View style={{flexDirection: 'row'}}>
                <View style={styles.multipleInputs}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>HOJ</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CobSev_0', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>FER</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CobSev_1', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>CEN</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CCobSev_2', text)}/>
                </View>
            </View>
                {/** Segunda seccion de inputs, 3 4 5*/}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.multipleInputs}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>PHP</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CobSev_3', text)}/>
                </View>
                <View style={styles.multipleInputs}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>PHQ</Text>
                        <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputs} placeholder='' onChangeText={(text) => handleChange('CobSev_4', text)}/>
                </View>
            </View>  

            {/** Ultima seccion del formulario, botones de guardado */}
            <View style={{justifyContent: 'space-evenly', flexDirection: 'row', width: '100%', marginTop: 30}}>
                <TouchableOpacity style={styles.cancelButton}><Text>Cancelar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}><Text style={{color: 'white'}}>Guardar</Text></TouchableOpacity>
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

export default FS3_form