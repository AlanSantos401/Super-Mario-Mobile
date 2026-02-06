import { Image, Text, TouchableOpacity, View } from "react-native";
import { HeaderStyles } from "../styles/headerStyles";
import { useNavigation, useRouter } from "expo-router";


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
        <TouchableOpacity>
          <Text style={HeaderStyles.Text}>
            Contatos
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}