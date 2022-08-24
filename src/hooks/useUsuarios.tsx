import { useState, useEffect } from "react";
import { carregaUsuarios } from "../services/carregaDados";

export default function useUsuarios(){

    const [lista, setLista] = useState([{}]);

    useEffect( () => {
        const retorno = carregaUsuarios();
        setLista(retorno.lista);
    }, [] )

    return [lista];
}