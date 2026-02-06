import { StyleSheet } from "react-native";


export const HeaderStyles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },

  HeaderText: {
    flexDirection: 'row',
    gap: 15
  },

  Text: {
    fontSize: 17,
    fontWeight: "600",
    color: "#FFFFFF"
  },

  image: {
    height: 42,
    width: 37,
  }
})