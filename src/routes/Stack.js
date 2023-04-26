import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro_sensores from "../views/cadastro_sensores/index";
import { CadastroGrandezas } from "../views/cadastro_grandezas";
import { Grandezas } from "../views/grandezas/index";
import { NavigationContainer } from "@react-navigation/native";
import { CadastroUnidadeMedida } from "../views/cadastro_unidadeMedida";
import { UnidadesMedida } from "../views/unidadesMedida";

const Stack = createNativeStackNavigator();

export const SensoresStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cadastro de sensores"
        component={Cadastro_sensores}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const GrandezasStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Grandezas">
      <Stack.Screen
        name="Cadastro de grandezas"
        component={CadastroGrandezas}
        options={{ headerShown: false }}
        initialParams={{
          fromOtherScreen: false,
        }}
      />
      <Stack.Screen
        name="Grandezas"
        component={Grandezas}
        options={{ headerShown: false }}
        initialParams={{
          fromOtherScreen: false,
        }}
      />
      <Stack.Screen
        name="Cadastro de Unidade de Medida"
        component={CadastroUnidadeMedida}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Unidades de Medida"
        component={UnidadesMedida}
        options={{ headerShown: false }}
        initialParams={{
          fromAnotherScreen: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const UnidadesMedidaStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Unidades de Medida">
      <Stack.Screen
        name="Cadastro de Unidade de Medida"
        component={CadastroUnidadeMedida}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Unidades de Medida"
        component={UnidadesMedida}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
