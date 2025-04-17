import { Drawer } from "expo-router/drawer";
import IonIcons from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function RootLayout({ }) {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: "Início",
                        title: "Home",
                        // headerShown: false,
                        // headerLeft: true,
                        drawerIcon: ({ size, color }) => (
                            <IonIcons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="counter"
                    options={{
                        drawerLabel: "Contador",
                        title: "Contador",
                        // headerShown: false,
                        // headerLeft: true,
                        drawerIcon: ({ size, color }) => (
                            <IonIcons name="counter" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="calculator"
                    options={{
                        drawerLabel: "Calculadora",
                        title: "Calculadora",
                        // headerShown: false,
                        // headerLeft: true,
                        drawerIcon: ({ size, color }) => (
                            <IonIcons name="calculator" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="passwordGenerator"
                    options={{
                        drawerLabel: "Gerador de Senhas",
                        title: "Gerador de Senhas",
                        // headerShown: false,
                        // headerLeft: true,
                        drawerIcon: ({ size, color }) => (
                            <IonIcons name="key" size={size} color={color} />
                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}