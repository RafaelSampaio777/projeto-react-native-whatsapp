import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'

type MyProps = {
    conversas?: boolean, 
    status?: boolean, 
    chamada?: boolean
}

export default function Navegacao({ conversas, status, chamada }: MyProps){

    const styles = stylesFunc({ conversas, status, chamada });

    return(
        <View style={styles.area}>
            <AntDesign 
                    name="camera"
                    color={'#7cb574'}
                    size={27} />
            <Text style={styles.conversas}>CONVERSAS</Text>
            <Text style={styles.status}>STATUS</Text>
            <Text style={styles.chamada}>CHAMADAS</Text>
        </View>
    )

}

const stylesFunc = ({ conversas, status, chamada }: MyProps) => StyleSheet.create({
    area: {
        backgroundColor: '#16914b',
        paddingHorizontal: 15,
        paddingBottom: 0,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    conversas: {
        color: conversas ? '#FFFFFF' : '#7cb574',
        borderBottomColor: conversas ? '#FFFFFF' : '',
        borderBottomWidth: conversas ? 5 : 0,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        margin: 0,
        marginTop: conversas ? 0 : -1,
        fontWeight: 'bold',
    },
    status: {
        color: status ? '#FFFFFF' : '#7cb574',
        borderBottomColor: status ? '#FFFFFF' : '',
        borderBottomWidth: status ? 5 : 0,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        margin: 0,
        marginTop: status ? 0 : -1,
        fontWeight: 'bold',
    }
    ,
    chamada: {
        color: chamada ? '#FFFFFF' : '#7cb574',
        borderBottomColor: chamada ? '#FFFFFF' : '',
        borderBottomWidth: chamada ? 5 : 0,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        margin: 0,
        marginTop: chamada ? 0 : -1,
        fontWeight: 'bold',
    }
})