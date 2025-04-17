import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

export default function Calculator() {
    const [numA, setNumA] = useState("");
    const [numB, setNumB] = useState("");
    const [resultado, setResultado] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleNumberPress = (number) => {
        if (operator === null) {
            setNumA((prev) => prev + number);
        } else {
            setNumB((prev) => prev + number);
        }
    };

    const handleOperatorPress = (op) => {
        if (numA) {
            setOperator(op);
        } else {
            alert("Por favor, insira o primeiro número.");
        }
    };

    const calculateResult = () => {
        if (numA && numB && operator) {
            const a = parseFloat(numA);
            const b = parseFloat(numB);

            switch (operator) {
                case "+":
                    setResultado(a + b);
                    break;
                case "-":
                    setResultado(a - b);
                    break;
                case "X": // Multiplicação
                    setResultado(a * b);
                    break;
                case "/": // Divisão
                    if (b !== 0) {
                        setResultado(a / b);
                    } else {
                        alert("Divisão por zero não é permitida.");
                    }
                    break;
                default:
                    alert("Operador inválido.");
            }
        } else {
            alert("Por favor, complete a operação.");
        }
    };

    const clearCalculator = () => {
        setNumA("");
        setNumB("");
        setOperator(null);
        setResultado(null);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Calculadora</Text>
            <Text style={styles.subtitle}>Esta é a tela da calculadora.</Text>
            <View style={styles.calculatorContent}>
                <View style={styles.numberContainer}>
                    <View style={styles.resultContainer}>
                        <Text style={{ fontSize: 24 }}>
                            {resultado !== null ? resultado : `${numA} ${operator || ""} ${numB}`}
                        </Text>
                    </View>
                    <View style={styles.setContainer}>

                        <View style={styles.calculatorContainer}>
                            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
                                <Pressable
                                    key={num}
                                    style={styles.number}
                                    onPress={() => handleNumberPress(num.toString())}
                                >
                                    <Text>{num}</Text>
                                </Pressable>
                            ))}
                            <Pressable style={styles.numberReset} onPress={clearCalculator}>
                                <Text>Resetar</Text>
                            </Pressable>
                        </View>

                        <View style={styles.operatorContainer}>
                            {["+", "-", "X", "/"].map((op) => (
                                <Pressable
                                    key={op}
                                    style={styles.operator}
                                    onPress={() => handleOperatorPress(op)}
                                >
                                    <Text>{op}</Text>
                                </Pressable>
                            ))}
                            <Pressable style={styles.operatorEquals} onPress={calculateResult}>
                                <Text>=</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "align-items-center",
        marginTop: 20,
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
    numberContainer: {
        flexDirection: "collumn",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    resultContainer: {
        backgroundColor: "lightgrey",
        padding: 20,
        borderRadius: 5,
        margin: 5,
        width: "75%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    setContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        width: "100%",
        marginRight: "7.5%"
    },
    calculatorContainer: {
        flexDirection: "row",
        flexWrap: "Wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        marginBottom: 85,
    },
    operatorContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
    },
    operator: {
        backgroundColor: "lightblue",
        padding: 20,
        borderRadius: 5,
        margin: 5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
    },
    operatorEquals: {
        backgroundColor: "orange",
        padding: 20,
        borderRadius: 5,
        margin: 5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
    },
    number: {
        backgroundColor: "lightgreen",
        padding: 20,
        borderRadius: 5,
        margin: 5,
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
    },
    numberReset: {
        backgroundColor: "lightgrey",
        padding: 20,
        borderRadius: 5,
        margin: 5,
        width: "53%",
        justifyContent: "center",
        alignItems: "center",
    }
})