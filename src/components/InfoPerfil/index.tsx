import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type MyProps = {
    imagem: any,
    nome: string,
    telefone: string
}

export default function InfoPerfil({ imagem, nome, telefone }: MyProps){

    const navigation = useNavigation();

    return(
        <View style={styles.box}>
            <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                    <MaterialIcons
                        name="arrow-back"
                        size={24}
                        style={styles.icon} />
                </TouchableOpacity>
            <View style={styles.infos}>
                <Image source={ imagem } style={styles.imagem} />
                <Text style={styles.textoNome}>{ nome }</Text>
                <Text style={styles.textoNumero}>{ telefone }</Text>
            </View>
            <TouchableOpacity>
                    <Entypo
                        name="dots-three-vertical"
                        size={21}
                        style={styles.icon} />
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        height: '30%'
    },
    infos:{
        alignItems: "center",
        justifyContent: 'space-between',
        height: '80%'
    },
    imagem:{
        height: 110,
        width: 110,
        borderRadius: 60
    },
    textoNome:{
        fontFamily: 'OpenSansSemiBold',
        color: '#000000',
        fontSize: 20
    },
    textoNumero: {
        fontFamily: 'OpenSans',
        color: '#555555',
        fontSize: 16
    },
    icon:{
        paddingTop: 10,
        color:"#555555"
    }
})