import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Screen, Navigator} = createNativeStackNavigator();

import TelaConversas from "../screens/TelaConversas";
import Chat from "../screens/Chat";
import Perfil from "../screens/Perfil";
import { setStatusBarHidden } from "expo-status-bar";

export function RotaConversas(){
    return(
        <Navigator screenOptions={{ 
            headerShown: false
         }} >
            <Screen 
                name= "home"
                component={ TelaConversas }
            />
            <Screen 
                name= "conversa"
                component={ Chat } 
            />
            <Screen 
                name= "perfil"
                component={ Perfil }
            />
        </Navigator>
    )
}