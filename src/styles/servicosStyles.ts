import { StyleSheet } from "react-native";


export const ServicosStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

    hero: {
    height: "100%",
    width: "100%",
    position: "relative", 
    overflow: "hidden",
  },

  video: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
    zIndex: 0,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 25,
    color: "#fff"
  },

  button: {
    backgroundColor: "#c51111",
    width: 70,
    borderRadius: 7,
    height: 30,
    margin: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    color: "#fff",
    textAlign: "center"
  },

  containerServicos: {
    height: "100%",
    flexDirection: "column",
    gap: 10,
  },

  servicos: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 305,
    borderRadius: 12,
    gap: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#d1d1d1a3"
  },

  image: {
    width: 280,
    height: 160,
    borderRadius: 10,
  },

  titleServicos: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 6
  },

  descricao: {
    fontSize: 13
  }
})