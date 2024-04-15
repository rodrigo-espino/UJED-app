import React, {useEffect} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { FS1 } from "./screens/FS1";
import { FS2_1 } from "./screens/FS2_1";
import FS3  from './screens/FS3'
import { initializeDatabase } from "./components/LocalDB/DB";
import * as FileSystem from 'expo-file-system';
import FS3_form from "./screens/FS3_form";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator específico para FS1 que incluye el Drawer
function FS1Stack() {
  
  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="FS1Drawer" component={FS1Drawer} />
    //   {/* Aquí puedes agregar más pantallas relacionadas con FS1 si es necesario */}
    // </Stack.Navigator>
    <Drawer.Navigator>
      <Drawer.Screen name="FS1" component={FS1}/>
      <Drawer.Screen name="FS2" component={FS2_1}/>
      <Drawer.Screen name="FS3" component={FS3}/>
      <Drawer.Screen name="FS3_form" component={FS3_form}/>
      {/* Añade aquí más pantallas si necesitas */}
    </Drawer.Navigator>
  );
}

const App = () => {

  useEffect(() => {
    // Inicializar o actualizar la base de datos al inicio
    initializeDatabase();
    // deleteDatabase();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: "#f3f4f6" },
          }}
        />
        <Stack.Screen name="FORM" component={FS1Stack} options={{headerShown: true, title: "Formulario"}} />
        {/* Elimina la definición previa de "MyDrawer" y "FS1" aquí, ya que ahora están integradas en FS1Stack */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;