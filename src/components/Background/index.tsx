import React, { Children, ReactComponentElement } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import image from '../../../assets/fundo-whatsapp.webp';

export default function Background({ Children }: any) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {Children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  }
})