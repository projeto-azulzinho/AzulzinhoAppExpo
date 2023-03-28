import { createNativeStackNavigator } from '@react-navigation/native-stack'
import cadastro_sensores from '../pages/cadastro_sensores'
import conjunto_sensores from '../pages/conjunto_sensores'
import sensores from '../pages/sensores'
import cadastro_conjunto from '../pages/cadastro_conjunto'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name =  "Cadastro de sensores"
            component = {cadastro_sensores} 
            options = {{ headerShown: false }}
            />

        </Stack.Navigator>

    )
}