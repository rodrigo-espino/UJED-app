import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export const FS6_card = ({ data }) => {

    const navigation = useNavigation()
    
    const renderItem = ({ item }) => {
        return(
          <View>
            <TouchableOpacity style={styles.cardContainer} onPress={ () => navigation.navigate("FS6_form", { id: item.id})}>
                <Text style={{ flexDirection: 'row', textAlign: 'center', color:'white' }}>Genero/Especie : {item.Genero_Especie} <TouchableOpacity></TouchableOpacity></Text>
                <Text style={{ color: 'white'}}>Numero : {item.No}</Text>
            </TouchableOpacity>
          </View>
        )
      }

  return (
    <FlatList
        style={{width: '100%'}}
        data={data}
        renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        padding: 50,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
        backgroundColor: "#1e293b",
        marginVertical: 8,
        borderRadius: 10,
        alignItems: "center",
        
    }
  })

