import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button } from "react-native";
import CategoryScreen from "./Screen/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./Screen/MealsOverViewScreen";
import MealDetialsScreen from "./Screen/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#24483f" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#24483f" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{
              title: "Meal Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverView"
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}

            component={MealsOverViewScreen}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetialsScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap me!"  />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
