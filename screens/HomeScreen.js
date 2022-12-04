import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <Text className="text-red-500">
                Open up App.js to start working on your app!
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}
