import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo, FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

export default function InputMensagens() {
    return (
        <View style={styles.box}>
            <View style={styles.inputBox}>
                <TouchableOpacity>
                    <Fontisto
                        name="smiley"
                        size={21}
                        color="#AAAAAA"
                    />
                </TouchableOpacity>
                <TextInput style={styles.input} />
                <TouchableOpacity>
                    <Entypo
                        name="attachment"
                        size={21}
                        color="#AAAAAA"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo
                        name="creative-commons-noncommercial-us"
                        size={21}
                        color="#AAAAAA"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome
                        name="camera"
                        color={'#AAAAAA'}
                        size={21}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.boxAudio}>
                <MaterialCommunityIcons
                    name="microphone"
                    size={24}
                    color="#FFFFFF"
                />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#333333'
    },
    inputBox: {
        backgroundColor: '#FFFFFF',
        width: "85%",
        padding: 10,
        paddingVertical: 5,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        backgroundColor: '#FFFFFF',
        width: "60%",
        padding: 0,
        paddingHorizontal: 5
    },
    boxAudio: {
        backgroundColor: '#04856D',
        padding: 9,
        borderRadius: 60
    }
})