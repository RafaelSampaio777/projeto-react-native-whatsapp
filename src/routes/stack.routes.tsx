import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Screen, Navigator} = createNativeStackNavigator();

import TelaConversas from "../screens/TelaConversas";
import Chat from "../screens/Chat";

export function RotaConversas(){
    return(
        <Navigator>
            <Screen 
                name= "home"
                component={ TelaConversas } 
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name= "conversa"
                component={ Chat }
                options={{
                    headerShown: false
                }} 
            />
        </Navigator>
    )
}