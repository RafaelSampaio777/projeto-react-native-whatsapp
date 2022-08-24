import React, { useEffect, useState } from "react";
import { FlatList, Text } from 'react-native';
import Conversa from "../Conversa";
import useUsuarios from "../../hooks/useUsuarios";

export default function Conversas() {

    const [lista] = useUsuarios();

    const itensLista = ({ item }: any) => <Conversa {...item} />

    return(
        <FlatList 
            data={lista} 
            keyExtractor={ ({id}: any) => id }
            renderItem={ itensLista } />
    )

}
