import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';
import InfoPerfil from "../../components/InfoPerfil";
import Descricao from "../../components/Descricao";

export default function Perfil(){

    const route = useRoute();

    const {nome, imagem, telefone, status}: any = route.params

    return (
        <SafeAreaView style={styles.tela}>
            <StatusBar backgroundColor={'#EEEEEE'} />
            <InfoPerfil nome={nome} telefone={telefone} imagem={imagem}  />
            <Descricao status={ status } />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: "#EEEEEE"
    }
})