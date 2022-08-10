import { View, Text, StyleSheet } from "react-native";

function MealDetail({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detialItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detialItem, textStyle]}>{complexity}</Text>
      <Text style={[styles.detialItem, textStyle]}>{affordability}</Text>
    </View>
  );
}
export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detialItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
