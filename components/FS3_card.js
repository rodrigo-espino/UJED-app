import { View, Text, FlatList } from 'react-native'
import React from 'react'
import FS3_item from './FS3_item'

const FS3_card = ({ data }) => {
    
    const renderItem = ({ item }) => {
        return <FS3_item info={item}/>;
    }

  return (
    <FlatList
        style={{width: '100%'}}
        data={data}
        renderItem={renderItem}
    />
  )
}

export default FS3_card