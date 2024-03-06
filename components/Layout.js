import { View, StyleSheet } from 'react-native'
import React from 'react'

export const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View> 
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f4f6',
        padding: 20,
        flex: 1,
        alignItems: 'center',
        
    }
})