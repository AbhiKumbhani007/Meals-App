import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import List from "../Components/List";
import { useContext, useLayoutEffect } from "react";
import MealDetail from "../Components/MealDetails";
import Subtitle from "../Components/Subtitle";
import { MEALS } from "../data/dummy-data";
import IconButton from "../Components/IconButton";
import { FavouriteContext } from "../store/context/favourites-context";

function MealDetialsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const favoriteMealsContext = useContext(FavouriteContext);

  const isMealFav = favoriteMealsContext.ids.includes(mealId);

  function ChangeFavouriteHandler() {
    if (isMealFav) {
      favoriteMealsContext.removeFavourite(mealId);
    } else {
      favoriteMealsContext.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerRight: () => {
        return (
          <IconButton
            color="white"
            icon={isMealFav ? "star" : "star-outline"}
            onPress={ChangeFavouriteHandler}
          />
        );
      },
    });
  }, [navigation, ChangeFavouriteHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetail
            textStyle={styles.detailsText}
            affordability={selectedMeal.affordability}
            complexity={selectedMeal.complexity}
            duration={selectedMeal.duration}
          />
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle title="Ingredients" />
            <List data={selectedMeal.ingredients} />
            <Subtitle title="Steps" />
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetialsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
