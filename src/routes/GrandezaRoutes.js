import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CadastroGrandezas } from "../pages/CadastroGrandeza";
import { Grandezas } from "../pages/Grandezas";

const Stack = createNativeStackNavigator();

export function GrandezaRoutes() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
