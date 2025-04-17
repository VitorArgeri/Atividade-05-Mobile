import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");

    // Função para gerar a senha
    const generatePassword = () => {
        const length = 12; // Comprimento da senha
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

})
