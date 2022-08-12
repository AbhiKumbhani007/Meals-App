import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import CategoryScreen from "./Screen/CategoryScreen";
import FavouriteScreen from "./Screen/FavouriteScreen";
import { StyleSheet } from "react-native";
import MealDetialsScreen from "./Screen/MealDetailScreen";
import MealsOverViewScreen from "./Screen/MealsOverViewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteContextProvider from "./store/context/favourites-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#24483f" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#24483f" },
        drawerContentStyle: {
          backgroundColor: "#498A79",
        },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#C2ECC0",
      }}
    >
      <Drawer.Screen
        name="MealsCategory"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          headerTitleAlign: "center",
          drawerIcon: ({ color, size }) => {
            <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerTitleAlign: "center",
          drawerIcon: ({ color, size }) => {
            <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#24483f" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#24483f" },
            }}
          >
            <Stack.Screen
              name="DraweerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverViewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetialsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
