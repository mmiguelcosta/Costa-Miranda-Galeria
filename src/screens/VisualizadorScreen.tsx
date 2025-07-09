import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const VisualizadorScreen = ({ route }: { route: any }) => {
  const { imagem } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={imagem}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default VisualizadorScreen;