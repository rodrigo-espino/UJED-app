import { View, Text } from 'react-native'
import React from 'react'
import { Layout } from '../components/Layout'
import data from '../datos_prueba/FS3.json'
import FS3_card from '../components/FS3_card'
import { BottomMenu } from '../components/BottomMenu'
import { useNavigation } from '@react-navigation/native'

const FS3 = () => {

  const navigation = useNavigation();

  const goToAnotherScreen = async (req, res) => {
    navigation.navigate( 'FORM', { screen: 'FS3_form'} )
  }

  return (
    <Layout>
        <FS3_card
            data={data}
        />
        <BottomMenu onNavigate={goToAnotherScreen}/>
    </Layout>
  )
}

export default FS3