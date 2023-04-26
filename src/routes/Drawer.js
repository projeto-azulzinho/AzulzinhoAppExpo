import {
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Grandezas } from "../views/grandezas";
import { NavigationContainer } from "@react-navigation/native";
import { CadastroGrandezas } from "../views/cadastro_grandezas";
import { CadastroUnidadeMedida } from "../views/cadastro_unidadeMedida";
import { UnidadesMedida } from "../views/unidadesMedida";
import { Cadastro_sensores } from "../views/cadastro_sensores";
import { Cadastro_conjunto } from "../views/cadastro_conjunto";
import { Conjunto_sensores } from "../views/conjunto_sensores";
import { Sensores } from "../views/sensores";
import {
  GrandezasStackNavigator,
  SensoresStackNavigator,
  UnidadesMedidaStackNavigator,
} from "./Stack";

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Grandezas"
        screenOptions={{ drawerPosition: "right" }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Drawer Grandezas"
          component={GrandezasStackNavigator}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Drawer Unidades de Medida"
          component={UnidadesMedidaStackNavigator}
          options={{ headerShown: false }}
          nitialParams={{
            fromAnotherScreen: false,
          }}
        />
        <Drawer.Screen
          name="Drawer Sensores"
          component={SensoresStackNavigator}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}
