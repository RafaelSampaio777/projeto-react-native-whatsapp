import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width

type MyProps = {
    nome: string,
    data: string,
    ultimaMensagem: string,
    imagem: any
}

export default function Conversa({ imagem, nome, data, ultimaMensagem }: MyProps) {

    return (
        <TouchableOpacity style={styles.area}>
            <Image source={imagem} style={styles.imagem} />
            <View style={styles.areaInfo}>
                <View>
                    <Text style={styles.textoNome}>{nome}</Text>
                    <Text style={styles.textos}>{ultimaMensagem}</Text>
                </View>
                <Text style={styles.textos}>{data}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    area: {
        margin: '5%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: '15%',
        height: width * 0.15,
        borderRadius: 60
    },
    areaInfo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingRight: '10%',
        paddingLeft: '2%'
    },
    textoNome: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 0,
        paddingBottom: '2%'
    },
    textos: {
        color: '#A1A1A1',
        margin: 0
    }
})



//<Image source={  } style={  } />