import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";

export default function Calculator() {
    const [numA, setNumA] = useState("");
    const [numB, setNumB] = useState("");
    const [resultado, setResultado] = useState("");

    const somar = () => {
        if (numA && numB) {
            setResultado(parseFloat(numA) + parseFloat(numB));
        } else {
            alert("Por favor, insira os números A e B.");
        }
    }

    const subtrair = () => {
        if (numA && numB) {
            setResultado(parseFloat(numA) - parseFloat(numB));
        } else {
            alert("Por favor, insira os números A e B.");
        }
    }

    const multiplicar = () => {
        if (numA && numB) {
            setResultado(parseFloat(numA) * parseFloat(numB));
        } else {
            alert("Por favor, insira os números A e B.");
        }
    }

    const dividir = () => {
        if (numA && numB) {
            if (numB != 0) {
                setResultado(parseFloat(numA) / parseFloat(numB));
            } else {
                alert("Divisão por zero não é permitida.");
            }
        } else {
            alert("Por favor, insira os números A e B.");
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Calculadora</Text>
            <Text style={styles.subtitle}>Esta é a tela da calculadora.</Text>

            <View style={styles.calculatorContent}>

                <View style={styles.inputContainer}>
                    <TextInput id="numA" placeholder="Número A" keyboardType="numeric" style={styles.input} onChangeText={setNumA}/>
                    <TextInput id="numB" placeholder="Número B" keyboardType="numeric" style={styles.input} onChangeText={setNumB}/>
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable id="btn" onPress={somar} style={styles.button}>Somar</Pressable>
                <Pressable id="btn" onPress={subtrair} style={styles.button}>Subtrair</Pressable>
                <Pressable id="btn" onPress={multiplicar} style={styles.button}>Multiplicar</Pressable>
                <Pressable id="btn" onPress={dividir} style={styles.button}>Dividir</Pressable>
            </View>

            <View style={styles.resultContainer}>
                <Text id="resultado" style={styles.resultText}>Resultado: {resultado}</Text>
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
    calculatorContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        gap: 20,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        width: 100,
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        gap: 20,
    },
    button: {
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
    },
    resultContainer: {
        marginTop: 20,
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        width: "60%",
    },
    resultText: {
        fontSize: 24,
        fontWeight: "bold",
        width: "100%"
    },
})