import React from "react";
import { FlatList } from 'react-native';
import Conversa from "../Conversa";
import useUsuarios from "../../hooks/useUsuarios";

export default function Conversas() {

    const [lista] = useUsuarios();

    const itensLista = ({ item }: any) => <Conversa {...item} />

    return(
        <FlatList 
            data={lista}
            renderItem={ itensLista } />
    )

}
