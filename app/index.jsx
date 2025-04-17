import react from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Bem Vindo ao Site!</Text>
                <Text style={styles.subtitle}>Aqui você encontrará um <strong>Contador</strong>, uma <strong>Calculadora</strong> e um <strong>Gerador de Senhas</strong></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    menuButton: {   
        position: "absolute",
        top: 40,
        left: 20,
        padding: 10,
        borderRadius: 50,
    },
    content: {
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
    },
})

