import { TextInput, StyleSheet } from "react-native";

interface StyledInputProps {

    placeholder: string
    onChangeText: (text: string) => void
}

export default function StyledInput(
    {placeholder,onChangeText}:StyledInputProps
){
    return (
    <TextInput 
    style={styles.input}
    onChangeText={onChangeText}
    placeholder={placeholder}/>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '70%',
        height: '8%',
        margin: 12,
        borderWidth: 1
}
})