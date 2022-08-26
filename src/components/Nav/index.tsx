import React from "react";
import Navegacao from '../Navegacao';
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function Nav() {
    return (
        <View style={styles.nav}>
            <View style={styles.area}>
                <Text style={styles.logo}>WhatsApp</Text>
                <View style={styles.areaBotoes}>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="search"
                            color={'#efffff'}
                            size={27} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo
                            name="dots-three-vertical"
                            color={'#efffff'}
                            size={22} />
                    </TouchableOpacity>
                </View>
            </View>
            <Navegacao conversas={true} />
        </View>
    )

}

const styles = StyleSheet.create({
    nav: {
        elevation: 5,
    },
    area: {
        backgroundColor: '#04856D',
        padding: 20,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        fontSize: 23,
        color: '#efffff',
        fontFamily: 'OpenSansBold'
    },
    areaBotoes: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between'
    }
})