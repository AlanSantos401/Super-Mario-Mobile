import { StyleSheet } from "react-native";


export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  hero: {
    height: "100%",
    width: "100%",
    position: "relative", 
    overflow: "hidden",
  },

  video: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },

  mascara: {
     ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(19, 19, 19, 0.71)",
    zIndex: 999,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
    zIndex: 2,
  },

  content: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 3,
    flexDirection: "column",
  },

  Button: {
    borderRadius: 5,
    width: 230,
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

  MarioLougi: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 27,
    marginTop: 30
  },

  LogoMario: {
    width: 290,
    height: 190
  },

  ImageMario: {
    width: 330,
    height: 370
  },

  formContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    zIndex: 1000
  }

});
