import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo, FontAwesome, Foundation, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type MyProps = {
    imagem: any,
    nome: string,
    telefone: string
}

export default function InfoPerfil({ imagem, nome, telefone }: MyProps) {

    const navigation = useNavigation();

    return (
        <View style={styles.box}>
            <View style={styles.boxinfos}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <MaterialIcons
                        name="arrow-back"
                        size={24}
                        style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.infos}>
                    <Image source={imagem} style={styles.imagem} />
                    <Text style={styles.textoNome}>{nome}</Text>
                    <Text style={styles.textoNumero}>{telefone}</Text>
                </View>
                <TouchableOpacity>
                    <Entypo
                        name="dots-three-vertical"
                        size={21}
                        style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.boxOpti}>
                <TouchableOpacity style={ styles.buttonOpti }>
                    <Foundation
                        name="telephone"
                        size={27}
                        color="#04856D"
                    />
                    <Text style={styles.textOpti}>Ligar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.buttonOpti }>
                    <FontAwesome
                        name="video-camera"
                        size={27}
                        color="#04856D"
                    />
                    <Text style={styles.textOpti}>Vídeo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.buttonOpti }>
                    <Entypo
                        name="creative-commons-noncommercial-us"
                        size={27}
                        color="#04856D"
                    />
                    <Text style={styles.textOpti}>Pagar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.buttonOpti }>
                    <MaterialIcons
                        name="search"
                        color='#04856D'
                        size={27} />
                    <Text style={styles.textOpti}>Pesquisar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#FFFFFF',
        height: '37%',
        padding: 10,
        elevation: 2,
        justifyContent: 'space-between'
    },
    boxinfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '65%'
    },
    infos: {
        alignItems: "center",
        justifyContent: 'space-between',
    },
    imagem: {
        height: 110,
        width: 110,
        borderRadius: 60
    },
    textoNome: {
        fontFamily: 'OpenSansSemiBold',
        color: '#000000',
        fontSize: 20
    },
    textoNumero: {
        fontFamily: 'OpenSans',
        color: '#555555',
        fontSize: 16
    },
    icon: {
        paddingTop: 15,
        color: "#555555"
    },
    boxOpti: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        height: '35%',
        alignItems: 'center'
    },
    buttonOpti:{
        paddingTop: 5,
        height: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textOpti:{
        fontFamily: 'OpenSans',
        fontSize: 18,
        color: '#04856D'
    }
})