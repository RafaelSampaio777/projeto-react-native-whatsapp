import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type MyProps = {
    conversas?: boolean, 
    status?: boolean, 
    chamada?: boolean
}

export default function Navegacao({ conversas, status, chamada }: MyProps){

    const styles = stylesFunc({ conversas, status, chamada });

    return(
        <View style={styles.area}>
            <Text>logo</Text>
            <Text style={styles.conversas}>CONVERSAS</Text>
            <Text style={styles.status}>STATUS</Text>
            <Text style={styles.chamada}>CHAMADAS</Text>
        </View>
    )

}

const stylesFunc = ({ conversas, status, chamada }: MyProps) => StyleSheet.create({
    area: {
        backgroundColor: '#16914b',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        elevation: 3
    },
    conversas: {
        color: conversas ? '#FFFFFF' : '#6C9167',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    status: {
        color: status ? '#FFFFFF' : '#6C9167',
        fontSize: 16,
        fontWeight: 'bold'
    }
    ,
    chamada: {
        color: chamada ? '#FFFFFF' : '#6C9167',
        fontSize: 16,
        fontWeight: 'bold'
    }
})