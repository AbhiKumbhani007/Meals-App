import { View, Text, StyleSheet } from "react-native";

function Subtitle({ title, style }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{title}:</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
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
    marginHorizontal: 12,
  },
});
