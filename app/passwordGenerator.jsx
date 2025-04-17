import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        const length = 12; 
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let generatedPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Password Generator</Text>
            <Text style={styles.password}>{password || "Sua senha aparecerá aqui"}</Text>
            <Pressable style={styles.button} onPress={generatePassword}>
            <Text style={styles.buttonText}>Gerar Senha</Text>
            </Pressable>
        </View>
    );
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
        marginBottom: 3,

    },
    password: {
        fontSize: 18,
        marginVertical: 20,
        color: "#000",
        borderBlockEndColor: "#000",
        borderBottomColor: "#000",
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 10,
    },

    buttonText: {
        color: "#000",
        fontSize: 16,
    },
});
