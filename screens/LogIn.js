import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {

    const [ user, setUser] = useState({
        "user": "",
        "pass": ""

    })

    const [ visible, setVisible] = useState(false);

    const handleChange = (name, text) => {
        setUser({... user, [name]: text})
        console.log(user)
    }

    const navigation = useNavigation();

    const handleSubmit = () => {
        if (user.user == "test" && user.pass == "testpass"){
            navigation.navigate("Inicio")
        }
        else{
            setVisible(!visible)
            console.log('no papu')
        }
    }

  return (
    <Layout>
        <View style={styles.container}>
            <Image
            style={styles.logo}
              source={require('../assets/Logo_CONAFOR_bueno.png')}
            />
            <Text style={styles.title}>Iniciar Sesion</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="user" size={30} color="black" style={{ paddingTop: 20, marginRight: 10 }} />
                <TextInput style={styles.input} placeholder='Usuario' onChangeText={(text) => handleChange("user", text)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="key-outline" size={30} color="black" style={{ paddingTop: 20, marginRight: 10  }} />
                <TextInput secureTextEntry={true} style={styles.input} placeholder='Contraseña' onChangeText={(text) => handleChange("pass", text)}/>
            </View>
            <TouchableOpacity style={ styles.LogInButton }><Text style={{ color: 'white' }} onPress={ handleSubmit }>Iniciar Sesion</Text></TouchableOpacity>
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Usuario o contraseña incorrecta. Intenta de nuevo</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible(!visible)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Layout>
  )
}

const styles = StyleSheet.create({
    container: {
        verticalAlign: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30
    },
    input: {
        borderRadius: 7,
        borderColor: 'black',
        height: 30,
        borderWidth: 1,
        width: '75%',
        marginTop: 20,
        textAlign: 'center'
    },
    LogInButton: {
        padding: 20,
        backgroundColor: 'black',
        borderRadius: 5,
        margin: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: 'red',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      logo:{
        margin: 25
      }
})

export default LogIn