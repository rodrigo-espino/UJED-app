import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getItembyId, getItems, CreateFS_Connected } from '../components/LocalDB/DB'
import { Layout } from '../components/Layout'
import { BottomMenu } from '../components/BottomMenu'
import { FS6_card } from '../components/FS6_card'
import { useFS1 } from '../components/FS1Context'

const FS6 = () => {

    const [data, setData] = useState([])
    const {fs1Id, setFs1Id} = useFS1()
    const [ID, setID] = useState(0)

    const navigation = useNavigation()

    const getIDFS6 = async () => {
        const res = await getItembyId("FES6", ["*"], "FEST1_ID", fs1Id);
        if (res && res.length > 0) {
          const value = res[0]["id"];
          console.log("value", value);
          setID(value); // Actualizará el ID y disparará un nuevo efecto si ID ha cambiado
        }
      };

    const getData = async ( id ) => {
        console.log('id', id)
        const res = await getItembyId('FES6_2', ['*'], 'FEST6_ID', id)
        setData(res)
    }

    const goToAnotherScreen = () => {
        navigation.navigate("FS6_form", { fs6Id : ID })
    }

    useEffect(() => {
        const init = async () => {
          await CreateFS_Connected("FES6", fs1Id, "?");
          await getIDFS6();
        };
        init();
      }, [fs1Id]); 
    

    useEffect(() => {
        getData(ID);
    }, [ID])

  return (
    <Layout>
        <FS6_card
            data={data}
        />
        <BottomMenu onNavigate={goToAnotherScreen}/>
    </Layout>
  )
}

export default FS6