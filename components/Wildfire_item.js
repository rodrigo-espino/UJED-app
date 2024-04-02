import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const Wildfire_item = ({info}) => {
  return (
    <View style={styles.itemContainer}>
    <Text style={[styles.textBase,{ textAlign: 'right'}]}>{info.Fecha} - {info.Hr_Inicio}</Text>
    <Text style={[styles.textBase]}>Responsable: {info.responsable}</Text>
    <Text style={[styles.textBase,{ fontSize:25}]}>{info.CVE_INC}</Text>
    <Text style={[styles.textBase]}>CoordX: {info.CoordX}, CoordY: {info.CoordY}, Altitud:{info.Altitud}</Text>
    <Text style={[styles.textBase]}>{info.Estado} - {info.Municipio}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: '#1e293b',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        alignItems: 'stretch'
    },
    textBase:{
        color: '#ffffff',
        marginVertical:4
    }

})
