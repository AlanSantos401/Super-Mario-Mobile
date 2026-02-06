import { StyleSheet } from "react-native";


export const FormStyles = StyleSheet.create({
  Overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    elevation: 20,
  },

  ButtonFechar: {
   alignSelf: 'flex-end',
   marginBottom: 10,
  },
  
  ButtonFecharText: {
  textAlign: "center",
  fontSize: 20,
  fontWeight: "bold"
  },

  Container: {
    backgroundColor: "#ffffff",
    gap: 15,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 5,
    padding: 20,
  },

  Input: {
    width: 270,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 7
  },
  
  TextArea: {
    width: 270,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 7,
  },

  Button: {
    marginTop: 30,
    borderRadius: 5,
    width: 270,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c51111"
  },

  ButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  },
})