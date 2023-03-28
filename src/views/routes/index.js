import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cadastro_sensores from '../pages/cadastro_sensores'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name =  "Cadastro de sensores"
            component = {Cadastro_sensores} 
            options = {{ headerShown: false }}
            />

        </Stack.Navigator>

    )
}