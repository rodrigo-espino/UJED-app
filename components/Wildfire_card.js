import { FlatList, RefreshControl} from 'react-native'
import React, {useEffect, useCallback, useState} from 'react'
import { Wildfire_item } from './Wildfire_item';
import { getItems } from './LocalDB/DB';


export const Wildfire_card = () => {
  const [Data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    const res = await getItems("FES1", ["*"]);
    setData(res);
    console.log(res);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getData();
  },[]);

  const renderItem = ({ item }) => {
   return <Wildfire_item info={item}/>
  };
  return (

      
      <FlatList
        style={{width: '100%'}}
        data={Data}
        keyExtractor={(item) => item.id} // Asegúrate de que tus objetos en JSON tengan una propiedad única que pueda servir como key
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />

  );
};

