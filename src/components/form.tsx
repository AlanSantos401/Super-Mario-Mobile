import { useState } from "react";
import {
  Alert,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FormStyles } from "../styles/formStyles";

type ModalProps = {
  onClose: () => void;
};

export default function Form({ onClose }: ModalProps) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [duvida, setDuvida] = useState("");
  const [focusedInput, setFocusedInput] = useState<
    "nome" | "telefone" | "duvida" | null
  >(null);


  const handleWhatsApp = () => {
    if (!nome || !telefone || !duvida) {
      Alert.alert("Atenção", "Preencha todos os campos");
      return;
    }

    const whatsapp = "5574981215249";

    const mensagem =
      `📋 *Pedido de Orçamento*

Nome: ${nome}
Telefone: ${telefone}
Problema: ${duvida}`;

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

    Linking.openURL(url).then(() => {
      setNome("")
      setTelefone("")
      setDuvida("")
      setFocusedInput(null)

      onClose()
    }).catch(() => {
      Alert.alert("Erro", "Não foi possível abrir o WhatsApp");
    })
  };

  return (
    <View style={FormStyles.Overlay}>
      <View style={FormStyles.Container}>

        {/* Botão fechar */}
        <TouchableOpacity
          onPress={onClose}
          style={FormStyles.ButtonFechar}
        >
          <Text style={FormStyles.ButtonFecharText}>✕</Text>
        </TouchableOpacity>

        {/* Nome */}
        <TextInput
          style={[
            FormStyles.Input,
            {
              borderColor:
                focusedInput === "nome" ? "#18D80F" : "#808080",
            },
          ]}
          placeholder="Seu nome"
          value={nome}
          onChangeText={(text) =>
            setNome(text.replace(/[^A-Za-zÀ-ÿ\s]/g, ""))
          }
          onFocus={() => setFocusedInput("nome")}
          onBlur={() => setFocusedInput(null)}
        />

        {/* Telefone */}
        <TextInput
          style={[
            FormStyles.Input,
            {
              borderColor:
                focusedInput === "telefone" ? "#18D80F" : "#808080",
            },
          ]}
          placeholder="Seu telefone"
          value={telefone}
          keyboardType="numeric"
          onChangeText={(text) =>
            setTelefone(text.replace(/[^0-9]/g, ""))
          }
          onFocus={() => setFocusedInput("telefone")}
          onBlur={() => setFocusedInput(null)}
        />

        {/* Problema */}
        <TextInput
          style={[
            FormStyles.TextArea,
            {
              borderColor:
                focusedInput === "duvida" ? "#18D80F" : "#808080",
            },
          ]}
          placeholder="Digite seu problema aqui..."
          value={duvida}
          onChangeText={setDuvida}
          multiline
          numberOfLines={7}
          textAlignVertical="top"
          onFocus={() => setFocusedInput("duvida")}
          onBlur={() => setFocusedInput(null)}
        />

        {/* Botão enviar */}
        <TouchableOpacity
          onPress={handleWhatsApp}
          style={FormStyles.Button}
        >
          <Text style={FormStyles.ButtonText}>
            Pedir Orçamento
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
