import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UnidadesMedida } from "../pages/UnidadesMedida";
import { CadastroUnidadeMedida } from "../pages/CadastroUnidadeMedida";

const Stack = createNativeStackNavigator();

export function UnidadeMedidaRoutes() {
  return (
    <Stack.Navigator>
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
