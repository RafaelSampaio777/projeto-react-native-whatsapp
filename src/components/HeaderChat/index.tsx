import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Foundation, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type MyProps = {
    nome: string,
    imagem: any,
    id: number,
    onPress: any
}

export default function HeaderChat({ imagem, nome, id, onPress }: MyProps) {

    const navigation = useNavigation();

    return (
        <View style={styles.barra}>
            <View style={styles.botoesInfo}>
                <TouchableOpacity style={styles.voltar} onPress={() => {
                        navigation.goBack()
                    }}>
                    <MaterialIcons
                        name="arrow-back"
                        size={24}
                        color="#EFFFFF" />
                    {<Image source={imagem} style={styles.imagem} />}
                </TouchableOpacity>
                <TouchableOpacity 
                    key={id} 
                    style={styles.botaoPerfil}
                    onPress={onPress}
                >
                    <Text style={styles.textoPerfil}>{nome}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botoesOpcoes}>
                <TouchableOpacity>
                    <FontAwesome
                        name="video-camera"
                        size={21}
                        color="#EFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Foundation
                        name="telephone"
                        size={24}
                        color="#EFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo
                        name="dots-three-vertical"
                        size={21}
                        color="#EFFFFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    barra: {
        backgroundColor: "#04856D",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        height: 60
    },
    botoesInfo:{
        flexDirection: 'row',
        width: '70%'
    },
    botoesOpcoes:{
        flexDirection: "row",
        width: '30%',
        justifyContent: 'space-between'
    },
    voltar: {
        flexDirection: 'row',
        alignItems: "center",
        height: "100%",
        width: '27%'
    },
    imagem: {
        width: 40,
        height: 40,
        borderRadius: 60
    },
    botaoPerfil: {
        height: '100%',
        justifyContent: "center",
        width: '70%',
        paddingLeft: 2
    },
    textoPerfil: {
        color: '#EFFFFF',
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18
    }
})