import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const FS3_item = ({ info }) => {

    const navigation = useNavigation();

  return (
    <View>
        <TouchableOpacity style={styles.cardContainer} onPress={ () => navigation.navigate("FS3_form")}>
            <Text style={{ flexDirection: 'row' }}>CDR <TouchableOpacity><Text style={styles.infoButton}>i</Text></TouchableOpacity></Text>
            <Text>{ info.CDR }</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#7a8d91',
        alignItems: 'center',
        padding: 50,
        borderRadius: 7,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
    },
    infoButton: {
        borderRadius: 20/2,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        width: 20,
        height: 20,
        textAlign: 'center',
        flexDirection: 'column'
    },
})

export default FS3_item