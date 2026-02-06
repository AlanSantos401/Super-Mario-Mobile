import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FormStyles } from "../styles/formStyles";


type ModalProps = {
  onClose: () => void;
};

export default function Form({ onClose }: ModalProps) {
  const [text, setText] = useState("")
  const [telefone, setTelefone] = useState("")


  return (
    <View style={FormStyles.Overlay}>
      <View style={FormStyles.Container}>

        <TouchableOpacity
          onPress={onClose}
          style={FormStyles.ButtonFechar}
        >
          <Text style={FormStyles.ButtonFecharText}>✕</Text>
        </TouchableOpacity>

        <TextInput
          style={FormStyles.Input}
          placeholder="Seu nome"
          value={text}
          onChangeText={(text) => setText(text.replace(/[^A-Za-zÀ-ÿ\s]/g, ""))}
        />
        <TextInput
          style={FormStyles.Input}
          placeholder="Seu telefone"
          value={telefone}
          keyboardType="numeric"
          onChangeText={(text) => setTelefone(text.replace(/[^0-9]/g, ""))}
        />
        <TextInput
          style={FormStyles.TextArea}
          placeholder="Digite seu problema aqui..."
          multiline
          numberOfLines={7}
          textAlignVertical="top"
        />
        <TouchableOpacity style={FormStyles.Button}>
          <Text style={FormStyles.ButtonText}>Pedir Orçamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}