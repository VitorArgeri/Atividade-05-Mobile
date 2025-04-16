import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

export default function Contador() {
    // const router = useRouter();

    const [contador, setContador] = useState(0);

    const somar = () => {
        setContador(contador + 1);
    }

    const subtrair = () => {
        setContador(contador - 1);
    }

    const resetar = () => {
        setContador(0);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Contador</Text>
            <Text style={styles.subtitle}>Esta é a tela do contador.</Text>

            <View style={styles.counterContent}>
                <Pressable id="btn" onPress={subtrair} style={styles.subtrair}>Subtrair</Pressable>
                <Text id="num" style={styles.num}>{contador}</Text>
                <Pressable id="btn" onPress={somar} style={styles.somar}>Somar</Pressable>
            </View>

            <View style={styles.reset}>
                <Pressable id="btn" onPress={resetar}>Resetar</Pressable>
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
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
    },
    counterContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        gap: 20,
    },
    somar: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
    },
    subtrair: {
        backgroundColor: "#F44336",
        padding: 10,
        borderRadius: 5,
    },
    reset: {
        marginTop: 20,
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
    },
    num: {
        fontSize: 24,
        marginHorizontal: 20,
    },
})