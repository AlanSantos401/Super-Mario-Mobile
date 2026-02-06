import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ServicosStyles } from "../styles/servicosStyles";
import { ResizeMode, Video } from "expo-av";


export default function Servicos() {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const isDarkMode = colorScheme === "dark"

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={ServicosStyles.hero}>

       <Video
        source={require("../../assets/images/video.mp4")}
        style={ServicosStyles.video}
        isMuted
        shouldPlay
        isLooping
        resizeMode={ResizeMode.COVER}
       />

       <View style={ServicosStyles.overlay}/>

        <TouchableOpacity style={ServicosStyles.button} onPress={() => router.push("/home")}>
          <Text style={ServicosStyles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View style={ServicosStyles.container}>
            <Text style={ServicosStyles.title}>Nossos Serviços</Text>
            <View style={ServicosStyles.containerServicos}>
              <View style={ServicosStyles.servicos}>
                <Image source={require("../../assets/images/desentupir-rede.jpg")}
                  style={ServicosStyles.image}
                />
                <Text style={ServicosStyles.titleServicos}>Desentupimento de canos e ralos</Text>
                <Text style={ServicosStyles.descricao}>Desentupimento de pias, ralos, vasos sanitários e caixas de gordura, usando ferramentas adequadas para resolver o problema de forma rápida.</Text>
              </View>

              <View style={ServicosStyles.servicos}>
                <Image source={require("../../assets/images/conserto-vazamento.webp")}
                  style={ServicosStyles.image}
                />
                <Text style={ServicosStyles.titleServicos}>Conserto de vazamentos</Text>
                <Text style={ServicosStyles.descricao}>Identificação e reparo de vazamentos em torneiras, canos, registros e tubulações, evitando desperdício de água e danos à estrutura.</Text>
              </View>

              <View style={ServicosStyles.servicos}>
                <Image source={require("../../assets/images/instalacao-de-torneiras.jpg")}
                  style={ServicosStyles.image}
                />
                <Text style={ServicosStyles.titleServicos} >Instalação de torneiras e chuveiros</Text>
                <Text style={ServicosStyles.descricao}>Instalação ou troca de torneiras, chuveiros elétricos, misturadores e registros, garantindo vedação correta e
                  funcionamento seguro.</Text>
              </View>

              <View style={ServicosStyles.servicos}>
                <Image source={require("../../assets/images/manutencao-caixa.jpeg")}
                  style={ServicosStyles.image}
                />
                <Text style={ServicosStyles.titleServicos}>Manutenção de caixas d’água</Text>
                <Text style={ServicosStyles.descricao}>Limpeza, reparo e manutenção de caixas d’água, além de revisão do sistema hidráulico para prevenir futuros problemas</Text>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}