import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import CadastroConjunto from "../pages/CadastroConjunto";
import CadastroSensores from "../pages/CadastroSensores";
import ConjuntoSensores from "../pages/ConjuntoSensores";
import Sensores from "../pages/Sensores";
import { CadastroGrandezas } from "../pages/CadastroGrandeza";
import { Grandezas } from "../pages/Grandezas";
import { UnidadesMedida } from "../pages/UnidadesMedida";
import { CadastroUnidadeMedida } from "../pages/CadastroUnidadeMedida";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Cadastro Grandezas">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro de sensores"
        component={CadastroSensores}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro conjunto de sensores"
        component={CadastroConjunto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sensores"
        component={Sensores}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Conjunto sensores"
        component={ConjuntoSensores}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro Grandezas"
        component={CadastroGrandezas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Grandezas"
        component={Grandezas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro Unidades Medida"
        component={CadastroUnidadeMedida}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Unidades Medida"
        component={UnidadesMedida}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
