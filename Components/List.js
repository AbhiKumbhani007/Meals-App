import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dp) => (
    <View style={styles.listItem} key={dp}>
      <Text style={styles.itemText}>{dp}</Text>
    </View>
  ));
}
export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "white",
  },
  itemText: {
    color: "black",
    textAlign: "center",
  },
});
