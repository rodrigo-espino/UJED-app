import React from "react"
import {Text, View} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./screens/HomeScreen"
import { FS1 } from "./screens/FS1"
import FS3 from "./screens/FS3"
import FS3_form from "./screens/FS3_form"
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="FS3" component={FS3} options={{ title: 'FS3 - Info. de la severidad en el componente edofologico'}}/>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{
          headerStyle: {backgroundColor:'#f3f4f6'}}}/>
        <Stack.Screen name="FS1" component={FS1} options={{
          title: 'FS1 - Info. General del Sitio',
        }}/>
        <Stack.Screen name="FS3_form" component={FS3_form} options={{title: 'FS3 - Info. de la severidad en el componente edofologico'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default App