import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { FS1_data } from "./screens/FS1_data";
import { FS1 } from "./screens/FS1";
import { FS21 } from "./screens/FS2_1";
import { FS22 } from "./screens/FS2_2";
import { FS23 } from "./screens/FS2_3";
import { FS4_1 } from "./screens/FS4_1";
import { FS4_2 } from "./screens/FS4_2";

import { FS2_1 } from "./screens/FS2_1";
import FS3  from './screens/FS3'
import { initializeDatabase } from "./components/LocalDB/DB";

import { FS1Provider } from "./components/FS1Context";
import * as FileSystem from 'expo-file-system';
import FS3_form from "./screens/FS3_form";
import FS6_form from "./screens/FS6_form";
import FS6 from "./screens/FS6";
import LogIn from "./screens/LogIn";

import { FS5_1 } from "./screens/FS5_1";
import { FS5_2 } from "./screens/FS5_2";
import { FS0 } from "./screens/FS0";
import { initializeDatabase } from "./components/LocalDB/DB";

import { FS1Provider, FS0Provider } from "./components/FS1Context";
import * as FileSystem from "expo-file-system";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator específico para FS1 que incluye el Drawer
function FS1Stack() {
  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="FS1Drawer" component={FS1Drawer} />
    //   {/* Aquí puedes agregar más pantallas relacionadas con FS1 si es necesario */}
    // </Stack.Navigator>
    <FS0Provider>
      <FS1Provider>
        <Drawer.Navigator>
          <Drawer.Screen name="FS1" component={FS1} />
          <Drawer.Screen name="FS2" component={FS21} />
          <Drawer.Screen
            name="FS22"
            component={FS22}
            options={{
              unmountOnBlur: true,
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="FS23"
            component={FS23}
            options={{
              unmountOnBlur: true,
              drawerItemStyle: { display: "none" },
            }}
          />

          <Drawer.Screen name="FS4" component={FS4_1} />

          <Drawer.Screen
            name="FS4_2"
            component={FS4_2}
            options={{
              unmountOnBlur: true,
              drawerItemStyle: { display: "none" },
            }}
          />


<Drawer.Screen
        name="FS4_2"
        component={FS4_2}
        options={{
          unmountOnBlur: true,
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="FS6_form"
        component={FS6_form}
        options={{
          unmountOnBlur: true,
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="FS3_form"
        component={FS3_form}
        options={{
          unmountOnBlur: true,
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen name="FS1_2" component={FS1}/>
      {/** <Drawer.Screen name="FS2" component={FS2_1}/> */}
      <Drawer.Screen name="FS3" component={FS3}/>
      <Drawer.Screen name="FS6" component={FS6}/>
      {/* Añade aquí más pantallas si necesitas */}
    </Drawer.Navigator>
    </FS1Provider>

          <Drawer.Screen name="FS5" component={FS5_1} />

          <Drawer.Screen
            name="FS5_2"
            component={FS5_2}
            options={{
              unmountOnBlur: true,
              drawerItemStyle: { display: "none" },
            }}
          />
          {/* Añade aquí más pantallas si necesitas */}
        </Drawer.Navigator>
      </FS1Provider>
    </FS0Provider>

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
          name="Log in"
          component={LogIn}
        />
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: "#f3f4f6" },
          }}
        />
        <Stack.Screen
          name="FORM"
          component={FS1Stack}
          options={{ headerShown: true, title: "Formulario" }}
        />
        {/* Elimina la definición previa de "MyDrawer" y "FS1" aquí, ya que ahora están integradas en FS1Stack */}
      </Stack.Navigator>

      <FS0Provider>
        <FS1Provider>
          <Stack.Navigator>
            <Stack.Screen
              name="Inicio"
              component={HomeScreen}
              options={{
                headerStyle: { backgroundColor: "#f3f4f6" },
              }}
            />

            <Stack.Screen name="FS0" component={FS0} />
            <Stack.Screen name="FS1_data" component={FS1_data} />

            <Stack.Screen
              name="FORM"
              component={FS1Stack}
              options={{ headerShown: true, title: "Formulario" }}
            />

            {/* Elimina la definición previa de "MyDrawer" y "FS1" aquí, ya que ahora están integradas en FS1Stack */}
          </Stack.Navigator>
        </FS1Provider>
      </FS0Provider>

    </NavigationContainer>
  );
};

export default App;
