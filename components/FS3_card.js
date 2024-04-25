import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FS3_card = ({ data }) => {

  const navigation = useNavigation()
    
    const renderItem = ({ item }) => {
      return(
      <TouchableOpacity onPress={ () => navigation.navigate("FS3_form", {fs3Id: item.FEST3_ID, id: item.id})}>
<View style={styles.cardContainer} >
          
              <Text style={{ flexDirection: 'row', color: 'white' }}>CDR : { item.CDR }</Text>
         
        </View>
      </TouchableOpacity>
        
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

export default FS3_card