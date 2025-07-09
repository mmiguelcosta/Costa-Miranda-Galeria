import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GaleriaScreen from '../screens/GaleriaScreen';
import VisualizadorScreen from '../screens/VisualizadorScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Galeria">
      <Stack.Screen
        name="Galeria"
        component={GaleriaScreen}
        options={{ title: 'Galeria' }}
      />
      <Stack.Screen
        name="Visualizador"
        component={VisualizadorScreen}
        options={{ title: 'Visualização' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;