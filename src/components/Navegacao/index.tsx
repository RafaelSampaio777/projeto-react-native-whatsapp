import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

type MyProps = {
    conversas?: boolean, 
    status?: boolean, 
    chamada?: boolean
}

export default function Navegacao({ conversas, status, chamada }: MyProps){

    const styles = stylesFunc({ conversas, status, chamada });

    return(
        <View style={styles.area}>
            <FontAwesome 
                    name="camera"
                    color={'#B3D9D2'}
                    size={21}
                    style={styles.camera}
            />
            <Text style={[styles.conversas, styles.texto]}>CONVERSAS</Text>
            <Text style={[styles.status, styles.texto]}>STATUS</Text>
            <Text style={[styles.chamada, styles.texto]}>CHAMADAS</Text>
        </View>
    )

}

const stylesFunc = ({ conversas, status, chamada }: MyProps) => StyleSheet.create({
    area: {
        backgroundColor: '#04856D',
        paddingHorizontal: 15,
        paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    texto:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        margin: 0,
        fontFamily: "OpenSansSemiBold",
    },
    camera: {
        margin: 0,
        marginTop: 9,
        paddingRight: 10
    },
    conversas: {
        color: conversas ? '#efffff' : '#B3D9D2',
        borderBottomColor: conversas ? '#efffff' : '',
        borderBottomWidth: conversas ? 2 : 0,
        marginTop: conversas ? 0 : -1,
    },
    status: {
        color: status ? '#efffff' : '#B3D9D2',
        borderBottomColor: status ? '#efffff' : '',
        borderBottomWidth: status ? 2 : 0,
        marginTop: status ? 0 : -1,
    }
    ,
    chamada: {
        color: chamada ? '#efffff' : '#B3D9D2',
        borderBottomColor: chamada ? '#efffff' : '',
        borderBottomWidth: chamada ? 2 : 0,
        marginTop: chamada ? 0 : -1,
    }
})