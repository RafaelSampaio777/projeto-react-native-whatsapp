import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Nav(){

    return(
        <View style={styles.area}>
            <Text style={styles.logo}>WhatsApp</Text>
            <View style={styles.areaBotoes}>
            <TouchableOpacity>
                <Text style={styles.logo}>Lupa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.logo}>:</Text>
            </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    area: {
        backgroundColor: '#16914b',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    areaBotoes: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between'
    }
})