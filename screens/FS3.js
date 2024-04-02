import { View, Text } from 'react-native'
import React from 'react'
import { Layout } from '../components/Layout'
import data from '../datos_prueba/FS3.json'
import FS3_card from '../components/FS3_card'

const FS3 = () => {
  return (
    <Layout>
        <Text>FES3</Text>
        <FS3_card
            data={data}
        />
    </Layout>
  )
}

export default FS3