import React from "react";
import { Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import InfoPerfil from "../../components/InfoPerfil";

export default function Perfil(){

    const route = useRoute();

    const {nome, imagem, telefone}: any = route.params

    return <InfoPerfil nome={nome} telefone={telefone} imagem={imagem}  />
}