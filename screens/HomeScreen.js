import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";

export default function HomeScreen() {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <SafeAreaView>
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    className="h-7 aspect-square rounded-full p-4 bg-gray-300"
                />
                <View>
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now
                    </Text>
                    <Text className="font-bold text-xl">Current Location</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
