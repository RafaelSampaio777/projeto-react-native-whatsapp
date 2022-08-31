import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import HeaderChat from '../../components/HeaderChat';
import InputMensagens from '../../components/InputMensagens';
import { useRoute } from '@react-navigation/native';
import Background from '../../components/Background';

export default function Chat({ navigation }: any) {

  const route = useRoute();

  const { nome, imagem, id }: any = route.params

  return (
    <SafeAreaView style={ styles.box }>
      <StatusBar backgroundColor={'#04856D'} />
      <HeaderChat nome={nome} imagem={imagem} id={id} onPress={() => {
        navigation.navigate('perfil', route.params)
      }} />
      <Background />
      <View style={ styles.optionsBox }>
        <InputMensagens />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box:{
    flex: 1, 
    
  },
  optionsBox:{
    justifyContent: 'flex-end'
  }
})