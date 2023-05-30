import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Sensores from '../pages/sensores';
import Conjunto_sensores from '../pages/conjunto_sensores';
import Cadastro_conjunto from '../pages/cadastro_conjunto';
import Cadastro_sensores from '../pages/cadastro_sensores';
import Home from '../pages/home';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
            name =  "Home"
            component = {Home} 
            options = {{ headerShown: false }}
            />

            <Stack.Screen
            name =  "Cadastro de sensores"
            component = {Cadastro_sensores} 
            options = {{ headerShown: false }}
            />

            <Stack.Screen
            name =  "Cadastro conjunto de sensores"
            component = {Cadastro_conjunto} 
            options = {{ headerShown: false }}
            />
           
           <Stack.Screen
            name =  "Sensores"
            component = {Sensores} 
            options = {{ headerShown: false }}
            />

           <Stack.Screen
            name =  "Conjunto sensores"
            component = {Conjunto_sensores} 
            options = {{ headerShown: false }}
            />
           
        </Stack.Navigator>

    )
}