import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width

type MyProps = {
    nome: string,
    data: string,
    ultimaMensagem: string,
    imagem: any,
    id: number,
    onPress: any
}

export default function Conversa({ imagem, nome, data, ultimaMensagem, id, onPress }: MyProps) {

    return (
        <TouchableOpacity 
            style={styles.area} 
            key={ id }
            onPress={ onPress } 
        >
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
        margin: '3%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: '13%',
        height: width * 0.13,
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
        color: '#0e1111',
        fontSize: 18,
        margin: 0,
        paddingBottom: '2%',
        fontFamily: "OpenSansSemiBold"
    },
    textos: {
        color: '#8494a1',
        margin: 0,
        fontFamily: "OpenSans"
    }
})



//<Image source={  } style={  } />