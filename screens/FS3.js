import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import FS3_card from '../components/FS3_card'
import { BottomMenu } from '../components/BottomMenu'
import { useNavigation } from '@react-navigation/native'
import { getItems, getItembyId, CreateFS_Connected } from '../components/LocalDB/DB'
import { useFS1 } from '../components/FS1Context'

const FS3 = () => {

  const [data, setData] = useState([])
  const {fs1Id, setFs1Id} = useFS1();
  const [ID, setID] = useState(0)

  const navigation = useNavigation();

  const getIDFS3 = async () => {
    const res = await getItembyId("FES3", ["*"], "FEST1_ID", fs1Id);
    if (res && res.length > 0) {
      const value = res[0]["id"];
      console.log("value", value);
      setID(value); // Actualizará el ID y disparará un nuevo efecto si ID ha cambiado
    }
  };

  const getData = async ( id ) => {
    console.log('id',id)
    const res = await getItembyId('FES3_2', ['*'], 'FEST3_ID', id); 
    console.log('response ',res)
    setData(res)
  }

  const goToAnotherScreen = async () => {
    navigation.navigate("FS3_form", { fs3Id: ID })
  }

  useEffect(() => {
    const init = async () => {
      await CreateFS_Connected("FES3", fs1Id, "?");
      await getIDFS3();
    };
    init();
  }, [fs1Id]); 

  useEffect(() => {
    if (ID !== null){
      getData(ID);
    }
  }, [ID])

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