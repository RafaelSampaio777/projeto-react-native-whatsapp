import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function Nav(){

    return(
        <View style={styles.area}>
            <Text style={styles.logo}>WhatsApp</Text>
            <View style={styles.areaBotoes}>
            <TouchableOpacity>
                <MaterialIcons 
                    name="search"
                    color={'#FFFFFF'}
                    size={27} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Entypo 
                    name="dots-three-vertical"
                    color={'#FFFFFF'}
                    size={20} />
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