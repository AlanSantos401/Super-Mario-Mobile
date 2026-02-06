import { ResizeMode, Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, StatusBar, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Form from "../components/form";
import Header from "../components/header";
import { HomeStyles } from "../styles/homeStyles";


export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const colorScheme = useColorScheme()
  const isDarkMode = colorScheme === "dark"
  const [renderForm, setRenderForm] = useState(false)

  const formAnim = useRef(new Animated.Value(-1000)).current

  useEffect(() => {

    if (showForm) {
      setRenderForm(true)

      Animated.timing(formAnim, {
        toValue: 0,
        duration: 1500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(formAnim, {
        toValue: -400,
        duration: 1500,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setRenderForm(false)
      });
    }
  }, [showForm])

  return (
    <SafeAreaView style={HomeStyles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <View style={HomeStyles.hero}>

        <Video
          source={require("../../assets/images/video.mp4")}
          style={HomeStyles.video}
          isMuted
          shouldPlay
          isLooping
          resizeMode={ResizeMode.COVER}
        />

        <View style={HomeStyles.overlay} />

        <View style={HomeStyles.content}>
          <Header />
          <View style={HomeStyles.MarioLougi}>
            <Image source={require("../../assets/images/logo.png")}
              style={HomeStyles.LogoMario}
            />
            <TouchableOpacity style={HomeStyles.Button}
              onPress={() => setShowForm(true)}
            >
              <Text style={HomeStyles.ButtonText}>
                ENTRE EM CONTATO
              </Text>
            </TouchableOpacity>
            <Image source={require("../../assets/images/mario.png")}
              style={HomeStyles.ImageMario}
            />
          </View>
        </View>
      </View>
      {renderForm && (
        <View style={HomeStyles.mascara} />
      )}

      {renderForm && (
        <Animated.View
          style={[
            HomeStyles.formContainer,
            { transform: [{ translateX: formAnim }] },
          ]}
        >
          <Form onClose={() => setShowForm(false)} />
        </Animated.View>
      )}

    </SafeAreaView>
  );

}