import React, {useEffect} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { FS1 } from "./screens/FS1";
import { FS2_1 } from "./screens/FS2_1";
import { initializeDatabase } from "./components/LocalDB/DB";
import * as FileSystem from 'expo-file-system';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function FS1Drawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FS1" component={FS1}/>
      {/* Añade aquí más pantallas si necesitas */}
    </Drawer.Navigator>
  );
}

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