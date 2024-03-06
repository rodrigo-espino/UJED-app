import React from "react"
import {Text, View} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./screens/HomeScreen"
import { FS1 } from "./screens/FS1"
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{
          headerStyle: {backgroundColor:'#f3f4f6'}}}/>
        <Stack.Screen name="FS1" component={FS1} options={{
          title: 'FS1 - Info. General del Sitio',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default App