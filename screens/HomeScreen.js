import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, TextInput } from 'react-native'
import {Wildfire_card} from '../components/Wildfire_card'
import data from '../datos_prueba.json'
import { Layout } from '../components/Layout'
import { BottomMenu } from '../components/BottomMenu'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate('FS1'); // 'Another' es el nombre de la ruta que definiste en tu Stack.Navigator
  };
    return (
      
      <Layout>
        <TextInput
        
        placeholder="Buscar..."
        clearButtonMode="while-editing"
      />
        <Wildfire_card data={data}/>
        <BottomMenu onNavigate={goToAnotherScreen}/>
      </Layout>
     
    );
  };
  


export default HomeScreen