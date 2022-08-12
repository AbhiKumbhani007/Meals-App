import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../Components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/favourites-context";

function FavouriteScreen() {
  const FavouriteMealContext = useContext(FavouriteContext);

  const favouriteMeals = MEALS.filter((meal) =>
    FavouriteMealContext.ids.includes(meal.id)
  );

  return favouriteMeals.length > 0 ? (
    <MealList items={favouriteMeals} />
  ) : (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>No Favourite Meals yet</Text>
    </View>
  );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
