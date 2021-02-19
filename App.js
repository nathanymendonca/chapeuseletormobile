import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import {Home , Sobre, Casas} from './src/pages'

const Stack = createStackNavigator ()

function App() {
  return( 
  <NavigationContainer initialRouteName='Home' headerMode='screen'>
    <Stack.Navigator>

      <Stack.Screen name="Home"  component={Home} 
      options={{ title: 'Home'}}/>
     
      <Stack.Screen name="Sobre"  component={Sobre}
      options={{ title: 'Sobre'}} />
     
      <Stack.Screen name="Casas"  component={Casas}
      options={{ title: 'Casas'}} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;