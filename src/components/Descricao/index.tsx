import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Descricao({ status }: any){
    return(
        <View style={styles.box}>
            <Text style={styles.descricao}>{ status }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        marginTop: 15,
        backgroundColor: '#FFFFFF',
        width: '100%',
        elevation: 2,
        padding: 10,
        minHeight: 55,
        justifyContent: 'flex-end'
    },
    descricao:{
        fontFamily: 'OpenSans',
        fontSize: 15
    }
})