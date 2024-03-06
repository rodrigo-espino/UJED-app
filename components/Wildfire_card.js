import { View, Text, FlatList} from 'react-native'
import React from 'react'
import { Wildfire_item } from './Wildfire_item';


export const Wildfire_card = ({data}) => {

  const renderItem = ({ item }) => {
   return <Wildfire_item info={item}/>
  };
  return (

      
      <FlatList
        style={{width: '100%'}}
        data={data}
        //keyExtractor={item => item.id} // Asegúrate de que tus objetos en JSON tengan una propiedad única que pueda servir como key
        renderItem={renderItem}
      />

  );
};

