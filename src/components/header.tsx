import { useRouter } from "expo-router";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { HeaderStyles } from "../styles/headerStyles";


export default function Header() {
  const router = useRouter()


  return (

    <View style={HeaderStyles.Container}>
      <Image style={HeaderStyles.image} source={require("../../assets/images/icon.png")} />

      <View style={HeaderStyles.HeaderText}>
        <TouchableOpacity>
          <Text style={HeaderStyles.Text}>
            Inicío
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/servicos")}>
          <Text style={HeaderStyles.Text}>
            Serviços
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(
            "https://wa.me/5574981215249?text=Olá!%0AGostaria%20de%20um%20orçamento."
          )}
        >
          <Text style={HeaderStyles.Text}>
            Contatos
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}