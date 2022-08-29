import { NavigationContainer } from '@react-navigation/native';

import { RotaConversas } from './stack.routes';

export function Routes(){
    return(
        <NavigationContainer>
            <RotaConversas />
        </NavigationContainer>
    )
}