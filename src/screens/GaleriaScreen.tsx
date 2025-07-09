import { StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const imagens = [
  { id: '1', uri: require('../../assets/1.png') },
  { id: '2', uri: require('../../assets/2.svg') },
  { id: '3', uri: require('../../assets/3.svg') },
  { id: '4', uri: require('../../assets/4.svg') },
  { id: '5', uri: require('../../assets/5.svg') },
  { id: '6', uri: require('../../assets/6.svg') }
];


const GaleriaScreen = ({ navigation }: { navigation: any }) => {
  const handleImagePress = (source: any) => {
    navigation.navigate('Visualizador', { imagem: source });
  };
  
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {imagens.map((imagem) => (
        <TouchableOpacity
          key={imagem.id}
          onPress={() => handleImagePress(imagem.uri)}
          style={styles.touchableWrapper} 
        >
          <Image
            source={imagem.uri}
            style={styles.imagem}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
  
export const styles = StyleSheet.create({
  
  contentContainer: {
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center',     
    paddingVertical: 10, 
  },

  touchableWrapper: {
    marginBottom: 20, 
  },

  imagem: {
    width: 230,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10, 
    
  },
});
  
export default GaleriaScreen;